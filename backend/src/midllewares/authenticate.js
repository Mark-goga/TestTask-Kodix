import jwt from "jsonwebtoken";
import createHttpError from "http-errors";
import * as authServices from '../secvices/auth.js';
import { env } from "../utils/env.js";

const JwtAccessSecret = env('JWT_ACCESS_SECRET');

const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next(createHttpError(401, 'Authorization header not found'));
  }

  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    return next(createHttpError(401, 'Authorization header must have Bearer type'));
  }

  try {
    const decoded = jwt.verify(token, JwtAccessSecret);
    const email = decoded.email;
    console.log("🚀 ~ authenticate ~ decoded:", decoded);
    if(!email) {
      createHttpError(500 , 'token whitout any data');
    }
    req.user = email;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return next(createHttpError(401, "Access token expired"));
    } else {
      return next(createHttpError(401, "Invalid token"));
    }
  }
};

export default authenticate;
