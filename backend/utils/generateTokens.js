const jwt = require("jsonwebtoken");

const generateTokens = async (userId) => {
  try {
    const accessToken = jwt.sign(
      {
        id: userId,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30s" }
    );

    const refreshToken = jwt.sign(
      {
        id: userId,
      },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "1m" }
    );

    return Promise.resolve({ accessToken, refreshToken });
  } catch (error) {
    Promise.reject(error);
  }
};

module.exports = generateTokens;
