class userController {
  register(req, res, next) {
    res.send("registor success");
  }
}

module.exports = new userController();
