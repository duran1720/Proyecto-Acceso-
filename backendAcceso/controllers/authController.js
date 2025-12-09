
const authService = require("../services/authService");

const authController = {
    async register(req, res) {

        const userNuevo = await authService.register(req.body)
        res.json({ mensaje: "usuario registrado", user: userNuevo })
    },
    async login(req, res) {
       const usuarioLogueado = await authService.login(req.body)
       return res.json({mensaje: "usuario logueado", user: usuarioLogueado})
    },
    async prueba(req, res) {
        return res.json({ mensaje: "este es el metodo de prueba" })
    }
};
module.exports = authController;