const createUserController = async (req, res) => {
    res.send({messege: "create ok"})
};
const findAllUserController = async (req, res) => {
    res.send({messege: "find all ok"})
};

module.exports = {
    createUserController,
    findAllUserController,
};