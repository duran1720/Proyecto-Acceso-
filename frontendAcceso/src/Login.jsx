import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function guardar(e){
        e.preventDefault();
        const respuesta= await fetch("http://localhost:4000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        })
        const data=respuesta.json();
        console.log(data);
        navigate('/prueba'); // Navega a la ruta protegida después del login exitoso
    }
        
    return(
        <form onSubmit={guardar}>
            <h2>Login</h2>
            
            <input type="email" placeholder="Email" onChange={(event)=>setEmail(event.target.value)} required/>
            <input type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)} required/>
            <button type="submit">Sign Up</button>
        </form>
    )
}
export default Login;