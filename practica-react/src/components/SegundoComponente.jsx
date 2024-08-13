import React from 'react'

let materias = ["mates", "lengua", "filosofia"];

export const SegundoComponente = () => {
    return (
        <div>
            <h2>
                Materias:
            </h2>
            {
                materias.map((materia, indice) => {
                    return <li key={indice}>
                        {materia}
                    </li>
                })
            }
        </div>
    )
}
