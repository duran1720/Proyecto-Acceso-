import { useEffect } from "react";


function Prueba () {
    useEffect(()=>{
        traer();
    },[])
    async function traer(){
        const respuesta= await fetch("http://localhost:4000/api/prueba")
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