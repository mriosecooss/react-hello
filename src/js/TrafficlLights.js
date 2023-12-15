import React, { useState } from "react";
export const TrafficLights = () => {
    const [color, setColor] = useState("red");
    return (
        //Contenedor principal
        <div className="containerMaster">
            //Contenedores de los semaforos
            <div className="container1 bg-dark p-4"></div>
            <div className="container bg-dark p-4 rounded">
                //Bombillas semaforos
                <div className=
                {"light-red " + (color == "red" ? "selected" : "")}
                 onClick={() => setColor("red")} ></div>
                <div className=
                {"light-yellow " + (color == "yellow" ? "selected" : "")}
                 onClick={() => setColor("yellow")}></div>
                <div className=
                {"light-green " + (color == "green" ? "selected" : "")}
                 onClick={() => setColor("green")}></div>
            </div>
        </div>
    );
};

