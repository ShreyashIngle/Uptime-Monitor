const jwt = require("jsonwebtoken");

const generateTokens = async (userId) => {
  try {
    const accessToken = jwt.sign(
      {
        id: userId,
      },
      process.env.JWT_SECRET,
      // { expiresIn: "10s" }
      { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
      {
        id: userId,
      },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "24h" }
    );

    return Promise.resolve({ accessToken, refreshToken });
  } catch (error) {
    Promise.reject(error);
  }
};

module.exports = generateTokens;
