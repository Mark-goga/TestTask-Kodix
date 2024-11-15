import * as authServices from '../secvices/auth.js';

export async function signinController(req, res) {
  const { email, password } = req.body;

  const {accessToken, refreshToken} = await authServices.signin({ email, password});

  res.status(200).json({
    message: 'You have successfully signed in.',
    status: 200,
    data: {
      accessToken: accessToken,
      refreshToken: refreshToken
    },
  });
}

export async function signupController(req , res) {
  const {email , password,} = req.body;

  const data = await authServices.signup({email , password});

  res.status(201).json({
    message: 'You have successfully signed up.',
    status: 201,
    data
  });
}

export async function refreshController(req , res) {
  const {refreshToken} = req.body;

  const {newRefreshToken , newAccessToken} = await authServices.refresh({refreshToken});

  res.status(200).json({
    status: 200,
    message: 'Token refreshed successfully.',
    data: {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken
    }
  });
}
