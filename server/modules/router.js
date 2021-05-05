const analytics = process.env.ANALYTICS;

function home(req, res) {
  res.render('index', { analytics });
}

module.exports = {
  home,
};
