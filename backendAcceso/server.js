const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173', // Reemplaza con el origen de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type',"authorization"],
}));
app.use(express.json());
app.use('/api', authRoutes);
app.listen(4000,()=>{
    console.log('Servidor corriendo en el puerto 4000 sos un CRACK');
})
