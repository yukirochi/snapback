const hello = (req, res) => {
  res.json({
    msg: "hello from the server",
  });
};

module.exports = {
  hello,
};
