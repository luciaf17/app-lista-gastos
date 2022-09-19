import React from 'react'
import { Helmet } from 'react-helmet'
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import {Boton} from './../elementos/Boton';
import {ContenedorBoton, Input, Formulario} from './../elementos/ElementosDeFormulario';
import {ReactComponent as SvgLogin} from './../imagenes/login.svg';
import styled from 'styled-components'

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 7.5rem;
  magin-bottom: 1.25rem;
`;

const InicioSesion = () => {
  return (
    <>
      <Helmet>
        <title>Iniciar Sesion</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Iniciar Sesion</Titulo>
          <div>
            <Boton to='/crear-cuenta'>Registrarse</Boton>
          </div>
        </ContenedorHeader>
      </Header>
      <Formulario>
        <Svg />
        <Input type="email"  name="email" placeholder='Correo Electronico' />
        <Input type="password"  name="password" placeholder='Contraseña' />
        <ContenedorBoton>
        <Boton as="button" primario="true" type='submit'>Iniciar Sesion</Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  )
}

export default InicioSesion
