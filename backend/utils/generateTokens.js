const jwt = require("jsonwebtoken");

const generateTokens = async (userId) => {
  try {
    const accessToken = jwt.sign(
      {
        id: existingUser._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30m" }
    );

    const refreshToken = jwt.sign(
      {
        id: existingUser._id,
      },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "1d" }
    );

    return Promise.resolve({ accessToken, refreshToken });
  } catch (error) {
    Promise.reject(error);
  }
};

export default generateTokens;
