const JWT = require("jsonwebtoken");

//Protected Routes token base
const requireSignIn = async (req, res, next) => {
  try {
    if (!req.headers.authorization)
      return res.status(400).json({ message: "Authorization required",success:false });
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    // console.log("from middleware", req.user);
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { requireSignIn };
