function ensureLoggedIn(req, res, next) {
  const { user_id } = req.signedCookies;
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
