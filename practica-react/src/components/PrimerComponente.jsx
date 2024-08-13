import React, {useState} from "react";

export const PrimerComponente = () => {

    const [nombre, setNombre] = useState("Nahuel")


    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre)
    }

    return (
        <div>
            <h1 className={nombre.length >= 4 ? "verde" : "rojo"}>{nombre}</h1>

            <input type="text" onChange={e => cambiarNombre(e.target.value)} />
            
        </div>
    );
};
