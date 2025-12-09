import { useState } from "react";


function Register(){
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function guardar(e){
        e.preventDefault();
        const respuesta= await fetch("http://localhost:4000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({nombre, email, password})
        })
        const data=respuesta.json();
        console.log(data);
    }
        
    return(
        <form onSubmit={guardar}>
            <h2>Register</h2>
            <input type="text" placeholder="nombre" onChange={(event)=>setNombre(event.target.value)} required />
            <input type="email" placeholder="Email" onChange={(event)=>setEmail(event.target.value)} required/>
            <input type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)} required/>
            <button type="submit">Sign Up</button>
        </form>
    )
}
export default Register;