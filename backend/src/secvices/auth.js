import jwt from 'jsonwebtoken';
import {env} from '../utils/env.js';
import createHttpError from 'http-errors';


const Jwt_Access_Secret = env('JWT_ACCESS_SECRET');
const Jwt_Refresh_Secret = env('JWT_REFRESH_SECRET');

export async function signin({ email, password }) {

  //тут повинена бути перевірка але немає бази даних
  // const user = await findOneUser({email});
  // if (!user) {
//   throw createHttpError(401, 'Invalid email or password. Please check and try again.');
  // }
  // const hashedInputPassword = await bcrypt.hash(password, user.salt);
  //
  // if (hashedInputPassword !== user.password) {
//   throw createHttpError(401, 'Invalid email or password. Please check and try again.');
  // }

  const argForToken = { email: email};
  const accessToken = jwt.sign(argForToken, Jwt_Access_Secret, {expiresIn: '1h',});
  const refreshToken = jwt.sign(argForToken, Jwt_Refresh_Secret, { expiresIn: '1d' },);
  return { accessToken, refreshToken };
}

export async function signup({ email, password }) {

  // тут повині ми створювати нового юзера але немає бази даних
  // const existingUser = await UserCollection.findOne({UserName: email});
  // if (existingUser) {
  //   throw createHttpError(400, "User already exist");
  // }
  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);
  //
  // const user = await UserCollection.create({
  //   email,
  //   firstName,
  //   lastName,
  //   password: hashedPassword,
  //   salt: salt,
  // });

  const argForToken = { email: email};
  const accessToken = jwt.sign(argForToken, Jwt_Access_Secret, {expiresIn: '1h',});
  const refreshToken = jwt.sign(argForToken, Jwt_Refresh_Secret, { expiresIn: '1d' },);
  return { accessToken, refreshToken };
}

export async function refresh({ refreshToken }) {
  try {
    const decoded = jwt.verify(refreshToken, Jwt_Refresh_Secret);
    const email =  decoded.email;
    if (!email) {
      throw createHttpError(401, 'Email not found in token.');
    }
    const argForToken = { email};

    const newAccessToken = jwt.sign(argForToken, Jwt_Access_Secret, {
      expiresIn: '1h',
    });

    const newRefreshToken = jwt.sign(
        argForToken,
      Jwt_Refresh_Secret,
      { expiresIn: '1d' },
    );
    return { newAccessToken, newRefreshToken };
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw createHttpError(401, 'Your session has expired.');
    }
    throw createHttpError(401, error.message);
  }
}
