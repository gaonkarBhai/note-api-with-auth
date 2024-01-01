// import { comparePassword, hashPassword } from "../helper/authHelper.js";
// import userModel from "../model/authModel.js";
// import JWT from "jsonwebtoken";

const { hashPassword, comparePassword } = require("../helper/authHelper");
const userModel = require("../model/authModel");
const JWT = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { name, password } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};

//POST LOGIN
const loginController = async (req, res) => {
  try {
    const { name, password } = req.body;
    //validation
    if (!name || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid name or password",
      });
    }
    //check user
    const user = await userModel.findOne({ name });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "name is not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

module.exports = { loginController, registerController };
