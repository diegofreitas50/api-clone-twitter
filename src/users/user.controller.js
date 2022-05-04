const userService = require("./user.service");

const createUserController = async (req, res) => {
  const { name, username, email, password, avatar } = req.body;

  if (!name || !username || !email || !password || !avatar) {
    return res.status(400).send({ message: "Preencha todos os campos!" });
  }

  const foundUser = await userService.findByEmailUserService(email);

  if (foundUser) {
    return res.status(400).send({ message: "Usuário já existe!" });
  }

  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err.message));

  if (!user) {
    return res.status(400).send({ message: "Erro ao criar usuário!" });
  }

  res.status(201).send(user);
};

const findAllUserController = async (req, res) => {
  const users = await userService.findAllUserService();

  if (users.lenght === 0) {
      return res.status(400).send({message: "Não existe usiários cadastrados!"});
  }

  res.send(users);
};

module.exports = {
  createUserController,
  findAllUserController,
};
