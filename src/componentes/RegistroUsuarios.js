import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import {Boton} from './../elementos/Boton';
import {ContenedorBoton, Input, Formulario} from './../elementos/ElementosDeFormulario';
import {ReactComponent as SvgLogin} from './../imagenes/registro.svg';
import styled from 'styled-components'
import {auth} from './../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import Alerta from '../elementos/Alerta';

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 5.25rem;
  magin-bottom: 1.25rem;
`;

const RegistroUsuarios = () => {

  const navigate = useNavigate();

  const [correo, establecerCorreo] = useState('');
  const [password, establecerPassword] = useState('');
  const [password2, establecerPassword2] = useState('');
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});

  const handleChange = (e) => {
    switch(e.target.name){
      case 'email':
        establecerCorreo(e.target.value);
        break;
      case 'password':
        establecerPassword(e.target.value);
        break;
      case 'password2':
        establecerPassword2(e.target.value);
        break;
      default:
        break;
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

    if(correo === '' || password === '' || password2 === ''){
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: 'error',
        mensaje: 'Debe rellenar todos los campos'
      });
      return;
    }

    if(password !== password2){
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: 'error',
        mensaje: 'Las contraseñas deben coincidir'
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, correo, password)
      navigate('/');
    } catch (error) {
      cambiarEstadoAlerta(true);
      let mensaje;
      switch (error.code) {
        case 'auth/weak-password':
          mensaje = 'La contraseña debe contener al menos 6 caracteres';
          break;
        case 'auth/invalid-email':
          mensaje = 'El correo electrónico no es válido';
          break;
        case 'auth/email-already-in-use':
          mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado';
          break;
        default:
          mensaje = 'Hubo un error al crear la cuenta';
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
        <title>Crear Cuenta</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Crear Cuenta</Titulo>
          <div>
            <Boton to='/iniciar-sesion'>Iniciar Sesion</Boton>
          </div>
        </ContenedorHeader>
      </Header>
      <Formulario onSubmit={handleSubmit}>
        <Svg />
        <Input type="email"  name="email" placeholder='Correo Electronico' value={correo} onChange={handleChange}/>
        <Input type="password"  name="password" placeholder='Contraseña' value={password} onChange={handleChange}/>
        <Input type="password"  name="password2" placeholder='Repetir la Contraseña' value={password2} onChange={handleChange}/>
        <ContenedorBoton>
        <Boton as="button" primario="true" type='submit'>Crear Cuenta</Boton>
        </ContenedorBoton>
      </Formulario>

      <Alerta mensaje={alerta.mensaje} tipo={alerta.tipo} estadoAlerta={estadoAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta}/>
    </>
  )
}

export default RegistroUsuarios
