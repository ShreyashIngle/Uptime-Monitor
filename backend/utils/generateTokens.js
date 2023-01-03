const jwt = require("jsonwebtoken");

const generateTokens = async (userId) => {
  try {
    const accessToken = jwt.sign(
      {
        id: userId,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1m" }
    );

    const refreshToken = jwt.sign(
      {
        id: userId,
      },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "1d" }
    );

    return Promise.resolve({ accessToken, refreshToken });
  } catch (error) {
    Promise.reject(error);
  }
};

module.exports = generateTokens;
