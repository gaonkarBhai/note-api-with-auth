const JWT  = require("jsonwebtoken")

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    console.log("from middleware",req.user);
    next();
  } catch (error) {
    console.log(error);
  }
};
