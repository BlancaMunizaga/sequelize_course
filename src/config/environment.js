export default {
  port: parseInt(process.env.PORT) || 8080,
  nodeEnv: process.env.NODE_ENV || 'production',
  saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
  jwtAccessTokenSecret:
    process.env.JWT_ACCESS_TOKEN_SECRET ||
    '0dfefd7f939d2ddc5b0596acbdcc6597ff1b26fd170f8279d0c6470650e75a7a',
  jwtRefreshTokenSecret:
    process.env.JWT_REFRESH_TOKEN_SECRET ||
    '4ce3e677888b64ed8bc6b7e80c3f299f9d25f13c98d650714bc2ed7b41bda9e4',
};