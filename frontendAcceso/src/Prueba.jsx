import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";


function Prueba () {
    const { token } = useAuth();
    useEffect(()=>{
        traer();
    },[])
    async function traer(){
        const respuesta= await fetch("http://localhost:4000/api/prueba",{
            method: "GET",
            
            headers: {
               "Authorization":token,
                "content-Type":"application/json"
            }
        })
        const res= await respuesta.json();
        console.log(res);
    }
    return (
        <div>
            <h1>Hola</h1>
        </div>
    )
}
export default Prueba;