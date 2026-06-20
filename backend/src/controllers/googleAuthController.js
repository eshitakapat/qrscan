const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");

const User = require("../models/userModel");

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);

const googleLogin = async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({
        message: "Google credential missing",
      });
    }

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const {
      sub,
      email,
      name,
    } = payload;

    let user = await User.findOne({
      username: email,
    });

    if (!user) {
      user = await User.create({
        username: email,
        role: "customer",
        googleId: sub,
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      token,
      role: user.role,
      username: user.username,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Google login failed",
    });
  }
};

module.exports = {
  googleLogin,
};