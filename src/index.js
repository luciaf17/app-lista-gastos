import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/Contenedor';
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import InicioSesion from './componentes/InicioSesion';
import EditarGasto from './componentes/EditarGasto';
import GastosPorCategoria from './componentes/GastosPorCategoria';
import RegistroUsuarios from './componentes/RegistroUsuarios';
import ListaDeGastos from './componentes/ListaDeGastos';
import {Helmet} from 'react-helmet';
import favicon from './imagenes/logo.png';
import Fondo from './elementos/Fondo';

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return (
    <>
    <Helmet>
      <link rel="shortcut icon" href={favicon} type='image/x-icon' />
    </Helmet>
      <BrowserRouter>
        <Contenedor>
          <Routes>
            <Route path='/iniciar-sesion' element={<InicioSesion />}/>
            <Route path='/editar/:id' element={<EditarGasto />}/>
            <Route path='/categoria' element={<GastosPorCategoria />}/>
            <Route path='/lista' element={<ListaDeGastos />}/>
            <Route path='/crear-cuenta' element={<RegistroUsuarios />}/>
            <Route path='/' element={<App />}/>
          </Routes>
        </Contenedor>
      </BrowserRouter>
      <Fondo />
    </>
  );
}


const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Index />);
