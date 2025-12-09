const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

const SECRET = "CLAVE_SECRETA";

const authService = {

    // REGISTRO
    async register(data) {
        const { nombre, email, password } = data;

        const passwordEncriptado = await bcrypt.hash(password, 10);

        const nuevoUsuario = await prisma.usuario.create({
            data: {
                nombre,
                email,
                password: passwordEncriptado
            }
        });

        return nuevoUsuario;
    },

    // LOGIN
    login : async (credentials) => {

        const { email, password } = credentials;  

        // Buscar usuario
        const usuarioEncontrado = await prisma.usuario.findFirst({
            where: { email }
        });

        // Si no existe
        if (!usuarioEncontrado) {
            return { error: "Usuario no encontrado" };
        }

        // Comparar contraseña
        const passwordCorrecta = await bcrypt.compare(password, usuarioEncontrado.password);

        if (!passwordCorrecta) {
            return { error: "Credenciales incorrectas" };
        }

        // Generar token
        const token = jwt.sign(
            { userId: usuarioEncontrado.id },
            SECRET,
            { expiresIn: '1d' }
        );

        return { usuarioEncontrado, token };
    },

    logout: async () => {
        return { msg: "Logout no requiere backend con JWT" };
    }
};

module.exports = authService;
