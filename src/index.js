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
import { AuthProvider, AuthContext } from './contextos/AuthContext';
import RutaPrivada from './componentes/RutaPrivada';
import {TotalGastadoProvider} from './contextos/TotalGastadoEnElMesContext';

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
    <AuthProvider>
      <TotalGastadoProvider>
          <BrowserRouter>
            <Contenedor>
              <Routes>
                <Route path='/iniciar-sesion' element={<InicioSesion />}/>
                <Route path='/crear-cuenta' element={<RegistroUsuarios />}/>

                <Route />
                <Route path='/editar/:id' element={
                  <RutaPrivada>
                    <EditarGasto />
                  </RutaPrivada>
                }/>
                <Route path='/categoria' element={
                  <RutaPrivada>
                    <GastosPorCategoria />
                  </RutaPrivada>
                }/>
                <Route path='/lista' element={
                  <RutaPrivada>
                    <ListaDeGastos />
                  </RutaPrivada>
                }/>
                <Route path='/' element={
                  <RutaPrivada>
                    <App />
                  </RutaPrivada>
                }/>
              </Routes>
            </Contenedor>
          </BrowserRouter>
        </TotalGastadoProvider>
      </AuthProvider>
      <Fondo />
    </>
  );
}


const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Index />);
