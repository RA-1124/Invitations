import Inicio from "../components/Inicio/Inicio";
import { Box } from "@mui/material";
import IncioFamilia from "../components/Inicio/Familia"; 
import Ceremonia from "../components/Itinerario/Ceremonia.js";
import Recepcion from "../components/Itinerario/Recepcion";
import Itinerario from "../components/Itinerario/Itinerario";
import Confirmacion from "../components/Confirmacion/Confirmacion";
import Sugerencias from "../components/Sugerencias/Sugerencias";
import MesaDeRegalos from "../components/MesaDeRegalos/MesaDeRegalos";
import Footer from "../components/Footer/Footer";

const styles = {
  root: {
    background: "#F4EBE2",
  },
};

const InicioPages = () => {
  return (
    <>
      <Box sx={styles.root}>
        <Inicio />
        <IncioFamilia />
        <Ceremonia />
        <Recepcion />
     
        <Itinerario/>
        <Confirmacion/>
        <Sugerencias/>
        <MesaDeRegalos/>
        <Footer/>
      </Box>
    
    </>
  );
}

export default InicioPages;
