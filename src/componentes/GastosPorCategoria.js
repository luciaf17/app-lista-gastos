import React from 'react'
import {Header, Titulo} from './../elementos/Header';
import { Helmet } from 'react-helmet'
import BtnRegresar from '../elementos/BtnRegresar';

const GastosPorCategoria = () => {
  return (
    <>
      <Helmet>
        <title>Gastos Por Categoria</title>
      </Helmet>
      <Header>
          <BtnRegresar />
          <Titulo>Gastos Por Categoria</Titulo>
      </Header>
    </>
  )
}

export default GastosPorCategoria
