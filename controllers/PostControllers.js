const { post } = require("../database/models/index");
module.exports = {
  async index(req, res) {
    let posts = await post.findAll();
    res.json(posts);
  },
};
