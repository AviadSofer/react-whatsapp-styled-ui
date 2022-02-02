import React from 'react';
import { StyledPhoneNumber } from './styles/PhoneNumber.styled';

interface Props {
  phoneNumber: string
}

const PhoneNumber: React.FC<Props> = (props) => {
  const { phoneNumber } = props;

  let prefix = phoneNumber.length > 0 ? '+' : '';
  const prefixNumber = `${prefix}${phoneNumber.slice(0, 3)}`;
  let firstDash = phoneNumber.length > 5 ? '-' : '';
  let secondDash = phoneNumber.length > 8 ? '-' : '';
  const mainNumber = `${phoneNumber.slice(3, 5)}${firstDash}${phoneNumber.slice(5, 8)}${secondDash}${phoneNumber.slice(8, 12)}`
  const orderPhone = `${prefixNumber} ${mainNumber}`
  
  return (
    <StyledPhoneNumber>{orderPhone}</StyledPhoneNumber>
  )
}

export default PhoneNumber;
