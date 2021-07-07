import React from 'react';
import acuarioIcon from 'assets/img/boton_acuario.png';
import ariesIcon from 'assets/img/boton_aries.png';
import cancerIcon from 'assets/img/boton_cancer.png';
import capricornioIcon from 'assets/img/boton_capricornio.png';
import escorpioIcon from 'assets/img/boton_escorpio.png';
import geminisIcon from 'assets/img/boton_geminis.png';
import leoIcon from 'assets/img/boton_leo.png';
import libraIcon from 'assets/img/boton_libra.png';
import piscisIcon from 'assets/img/boton_piscis.png';
import sagitarioIcon from 'assets/img/boton_sagitario.png';
import tauroIcon from 'assets/img/boton_tauro.png';
import virgoIcon from 'assets/img/boton_virgo.png';
import { Sign } from './style';

const getSignIcon = (sign) => {
  switch (sign) {
    case 'acuario':
      return acuarioIcon;
    case 'aries':
      return ariesIcon;
    case 'cancer':
      return cancerIcon;
    case 'capricornio':
      return capricornioIcon;
    case 'escorpion':
      return escorpioIcon;
    case 'geminis':
      return geminisIcon;
    case 'leo':
      return leoIcon;
    case 'libra':
      return libraIcon;
    case 'piscis':
      return piscisIcon;
    case 'sagitario':
      return sagitarioIcon;
    case 'tauro':
      return tauroIcon;
    case 'virgo':
      return virgoIcon;

    default:
      return null;
  }
};
const SignButton = ({ sign }) => {
  return (
    <Sign>
      <img src={getSignIcon(sign)} alt="Sign Icon" />
    </Sign>
  );
};

export default SignButton;
