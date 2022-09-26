import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import {Boton} from './../elementos/Boton';
import {ContenedorBoton, Input, Formulario} from './../elementos/ElementosDeFormulario';
import {ReactComponent as SvgLogin} from './../imagenes/login.svg';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import {auth} from './../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth"
import Alerta from '../elementos/Alerta';

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 7.5rem;
  magin-bottom: 1.25rem;
`;

const InicioSesion = () => {

  const navigate = useNavigate();

  const [correo, establecerCorreo] = useState('');
  const [password, establecerPassword] = useState('');
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});

  const handleChange = (e) =>{
    if(e.target.name === 'email'){
      establecerCorreo(e.target.value);
    }
    if(e.target.name === 'password'){
      establecerPassword(e.target.value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    cambiarEstadoAlerta(false);
    cambiarAlerta({});

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    if( !expresionRegular.test(correo) ){
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: 'error',
        mensaje: 'Ingrese un correo electrónico válido'
      });
      return;
    }

    if(correo === '' || password === ''){
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: 'error',
        mensaje: 'Debe rellenar todos los campos'
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, correo, password)
      navigate('/');
    } catch (error) {
      cambiarEstadoAlerta(true);
      let mensaje;
      switch (error.code) {
        case 'auth/wrong-password':
          mensaje = 'La contraseña no coincide';
          break;
        case 'auth/user-not-found':
          mensaje = 'El usuario no existe';
          break;
        default:
          mensaje = 'Hubo un error al iniciar sesión';
          break;
      }

      cambiarAlerta({
        tipo: 'error',
        mensaje: mensaje
      });
    }
  }



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
      <Formulario onSubmit={handleSubmit}>
        <Svg />
        <Input type="email"  name="email" placeholder='Correo Electronico' value={correo} onChange={handleChange}/>
        <Input type="password"  name="password" placeholder='Contraseña' value={password} onChange={handleChange}/>
        <ContenedorBoton>
        <Boton as="button" primario="true" type='submit'>Iniciar Sesion</Boton>
        </ContenedorBoton>
      </Formulario>
      <Alerta  mensaje={alerta.mensaje} tipo={alerta.tipo} estadoAlerta={estadoAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta}/>
    </>
  )
}

export default InicioSesion
