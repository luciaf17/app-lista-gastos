import React from "react";
import styled from "styled-components";
import { ReactComponent as Puntos} from './../imagenes/puntos.svg';

const Svg = styled.svg`
	height: 50vh;
	width: 100%;
	position: fixed;
	bottom: 0;
	z-index: 0;
	path {
		fill: rgba(135,182,194, .15);
	}
`;

const PuntosArriba = styled(Puntos)`
	position: fixed;
	z-index: 1;
	top: 2.5rem; /* 40px */
	left: 2.5rem; /* 40px */
`;

const PuntosAbajo = styled(Puntos)`
	position: fixed;
	z-index: 1;
	bottom: 2.5rem; /* 40px */
	right: 2.5rem; /* 40px */
`;

const Fondo = () => {
  return (
    <>
      <PuntosArriba />
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
            fillOpacity="1" 
            preserveAspectRatio="none"
            d="M0,32L36.9,96L73.8,96L110.8,192L147.7,32L184.6,256L221.5,128L258.5,160L295.4,64L332.3,32L369.2,288L406.2,160L443.1,160L480,0L516.9,224L553.8,192L590.8,224L627.7,96L664.6,288L701.5,32L738.5,32L775.4,224L812.3,320L849.2,256L886.2,64L923.1,32L960,256L996.9,96L1033.8,32L1070.8,96L1107.7,288L1144.6,96L1181.5,224L1218.5,32L1255.4,192L1292.3,96L1329.2,160L1366.2,96L1403.1,32L1440,256L1440,320L1403.1,320L1366.2,320L1329.2,320L1292.3,320L1255.4,320L1218.5,320L1181.5,320L1144.6,320L1107.7,320L1070.8,320L1033.8,320L996.9,320L960,320L923.1,320L886.2,320L849.2,320L812.3,320L775.4,320L738.5,320L701.5,320L664.6,320L627.7,320L590.8,320L553.8,320L516.9,320L480,320L443.1,320L406.2,320L369.2,320L332.3,320L295.4,320L258.5,320L221.5,320L184.6,320L147.7,320L110.8,320L73.8,320L36.9,320L0,320Z"></path>
        </Svg>
      <PuntosAbajo />
    </>
  )
}

export default Fondo
