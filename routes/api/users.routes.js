const router = require("express").Router();
const User = require("../../models/User");

router.post("/create", (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save()
    .then(() => {
      User.find({}, (err, users) => {
        if (err) {
          console.log(err);
          res
            .status(500)
            .json({ results: [], message: "Error while fetching users" });
          return;
        }
        res.status(200).json({ results: users, message: "User was created" });
      });
    })
    .catch((err) => {
      if (err) {
        res
          .status(500)
          .json({ results: [], message: "Error while creating user" });
        return;
      }
    });
});

router.get("/", (_, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ results: [], message: "Error while fetching users" });
      return;
    }
    res.status(200).json({ results: users, message: "All user fetched" });
  });
});

module.exports = router;
