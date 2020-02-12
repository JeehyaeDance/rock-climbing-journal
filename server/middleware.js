function ensureLoggedIn(req, res, next) {
  console.log("middleware:");
  const { user_id } = req.signedCookies;
  console.log("user_id signed: ", user_id);
  if (user_id) {
    next();
  } else {
    res.status(401);
    next(new Error("un-authorized"));
  }
}

module.exports = {
  ensureLoggedIn
};
