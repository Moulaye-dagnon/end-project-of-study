const route = require("express").Router();
const user = require("../mongoose/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

route.post("/", async (req, res) => {
  const { email, password } = req.body;

  const cheick_email = await user.findOne({ email });

  if (!cheick_email) {
    res.json({ status: false, message: " Email n'existe deja" });
    return;
  } else {
    const compare_password = await bcrypt.compare(
      password,
      cheick_email.password
    );

    if (compare_password) {
      const payload = {
        email: email,
        role: cheick_email.role,
      };
      const token = jwt.sign(payload, process.env.KEY, { expiresIn: "1d" });
      res.cookie("token", token);
      res.json({ status: true, message: "utilisateur connu ", token: token });
    } else {
      res.json({ status: false, message: " mot de passe incorrect" });
    }
  }
});

module.exports = route;
