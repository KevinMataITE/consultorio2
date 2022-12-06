import React from "react";
import { useState } from "react";
import { Button, NumberInput,  } from "@mantine/core";

import styles from "../styles/CuadroDietosintetico.module.css";

const Porcentaje = ({ datosPersona }) => {
  const [proteinaPorcentaje, setProteinaPorcentaje] = useState(0);
  const [lipidosPorcentaje, setLipidosPorcentaje] = useState(0);
  const [mensajeError,setMensajeError] = useState(null);

  const [proteinas, setProteinas] = useState({
    porcentaje: "",
    kcal: "",
    g: "",
    "g/kg": "",
  });

  const [lipidos, setLipidos] = useState({
    porcentaje: "",
    kcal: "",
    g: "",
    "g/kg": "",
  });

  const [carbohidratos, setCarbohidratos] = useState({
    porcentaje: "",
    kcal: "",
    g: "",
    "g/kg": "",
  });

  const [total, setTotal] = useState({
    porcentaje: "",
    kcal: "",
    g: "",
    "g/kg": "",
  });

  const borrarDatos = () => {
    setProteinas({
      porcentaje: "",
      kcal: "",
      g: "",
      "g/kg": "",
    });
    setLipidos({
      porcentaje: "",
      kcal: "",
      g: "",
      "g/kg": "",
    });
    setCarbohidratos({
      porcentaje: "",
      kcal: "",
      g: "",
      "g/kg": "",
    });
    setTotal({
      porcentaje: "",
      kcal: datosPersona["get"],
      g: "",
      "g/kg": "",
    });
    setMensajeError(null);
  };

  const generarDatos = () => {
    if (proteinaPorcentaje + lipidosPorcentaje > 100) {
      setMensajeError("El porcentaje no puede ser mayor a 100");
      return;
    }

    carbohidratos["porcentaje"] = 100  -proteinaPorcentaje - lipidosPorcentaje;

    setMensajeError(null);
    const proteinaKcal = Math.round(
      (datosPersona["get"] * proteinaPorcentaje) / 100
    );
    const lipidosKcal = Math.round(
      (datosPersona["get"] * lipidosPorcentaje) / 100
    );
    const carbohidratosKcal = Math.round(
      (datosPersona["get"] * carbohidratos["porcentaje"]) / 100
    );

    const proteinaG = proteinaKcal / 4;
    const lipidosG = lipidosKcal / 9;
    const carbohidratosG = carbohidratosKcal / 4;

    const proteinaGEntreKG = proteinaG / datosPersona["peso"];
    const lipidosGEntreKG = lipidosG / datosPersona["peso"];
    const carbohidratosGEntreKG = carbohidratosG / datosPersona["peso"];

    const totalG = proteinaG + lipidosG + carbohidratosG;
    const totalGEntreKG =
      proteinaGEntreKG + lipidosGEntreKG + carbohidratosGEntreKG;

    setProteinas({
      porcentaje: proteinaPorcentaje,
      kcal: proteinaKcal,
      g: parseFloat(proteinaG).toFixed(2),
      "g/kg": parseFloat(proteinaGEntreKG).toFixed(2),
    });

    setLipidos({
      porcentaje: lipidosPorcentaje,
      kcal: lipidosKcal,
      g: parseFloat(lipidosG).toFixed(2),
      "g/kg": parseFloat(lipidosGEntreKG).toFixed(2),
    });

    setCarbohidratos({
      porcentaje: carbohidratos["porcentaje"],
      kcal: carbohidratosKcal,
      g: parseFloat(carbohidratosG).toFixed(2),
      "g/kg": parseFloat(carbohidratosGEntreKG).toFixed(2),
    });

    setTotal({
      porcentaje: "100",
      kcal: datosPersona["get"],
      g: parseFloat(totalG).toFixed(2),
      "g/kg": parseFloat(totalGEntreKG).toFixed(2),
    });
  };

  return (
    <div>

            {
                mensajeError==null? null: <h1>{mensajeError}</h1>
            }

      

      <div className={styles.cuadro}>
        <div className={styles.cuadro__opcion}></div>
        <div className={styles.cuadro__opcion}>Proteina</div>
        <div className={styles.cuadro__opcion}>Lípidos</div>
        <div className={styles.cuadro__opcion}>Carbohidratos</div>
        <div className={styles.cuadro__opcion}></div>
        <div className={styles.cuadro__opcion}>Porcentaje</div>
        <NumberInput
          min={0}
          max={100}
          className={styles.cuadro__opcion}
          value={proteinaPorcentaje}
          onChange={(val) => setProteinaPorcentaje(val)}
        />
        <NumberInput
          min={0}
          max={100}
          className={styles.cuadro__opcion}
          value={lipidosPorcentaje}
          onChange={(val) => setLipidosPorcentaje(val)}
        />
        <div className={styles.cuadro__opcion}>
          {carbohidratos["porcentaje"]}
        </div>
        <div className={styles.cuadro__opcion}>{total["porcentaje"]}</div>
        <div className={styles.cuadro__opcion}>Calorias</div>
        <div className={styles.cuadro__opcion}>{proteinas["kcal"]}</div>
        <div className={styles.cuadro__opcion}>{lipidos["kcal"]}</div>
        <div className={styles.cuadro__opcion}>{carbohidratos["kcal"]}</div>
        <div className={styles.cuadro__opcion}>{total["kcal"]}</div>
        <div className={styles.cuadro__opcion}>Gramos</div>
        <div className={styles.cuadro__opcion}>{proteinas["g"]}</div>
        <div className={styles.cuadro__opcion}>{lipidos["g"]}</div>
        <div className={styles.cuadro__opcion}>{carbohidratos["g"]}</div>
        <div className={styles.cuadro__opcion}>{total["g"]}</div>
        <div className={styles.cuadro__opcion}>G/Kg</div>
        <div className={styles.cuadro__opcion}>{proteinas["g/kg"]}</div>
        <div className={styles.cuadro__opcion}>{lipidos["g/kg"]}</div>
        <div className={styles.cuadro__opcion}>{carbohidratos["g/kg"]}</div>
        <div className={styles.cuadro__opcion}>{total["g/kg"]}</div>
      </div>

      <Button onClick={generarDatos} color="green" className={styles.boton}>
        Calcular
      </Button>

      
    </div>
  );
};

export default Porcentaje