const express = require("express");
const router = express.Router();
const User = require("../Models/UserModel");

router.get("/", async (req, res) => {
  res.send(await User.findAll());
});

router.post("/", async (req, res) => {

  const user = {
    nome: req.body.nome,
    lastName: req.body.lastName,
    email: req.body.email,
    senha: req.body.senha,
  };
  try {
    await User.create(user);
    res.status(202).send("Ok");
  } catch (err) {
    res.send(400);
  }
});

router.delete("/:id", async (req, res) => {
  const apagar = await User.findByPk(req.params.id);
  await apagar.destroy();
  res.status(204).send("Ok");
});
module.exports = router;