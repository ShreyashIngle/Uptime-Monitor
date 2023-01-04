const jwt = require("jsonwebtoken");

const generateTokens = async (userId) => {
  try {
    const accessToken = jwt.sign(
      {
        id: userId,
      },
      process.env.JWT_SECRET,
      { expiresIn: "10s" }
    );

    const refreshToken = jwt.sign(
      {
        id: userId,
      },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "15s" }
    );

    return Promise.resolve({ accessToken, refreshToken });
  } catch (error) {
    Promise.reject(error);
  }
};

module.exports = generateTokens;
