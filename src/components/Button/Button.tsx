import React from 'react';
import { Button as ButtonComponent } from '@headlessui/react';

import './styles.css';

interface ButtonProps {
  Icon?: React.ElementType;
  children: string;
}

const Button: React.FC<ButtonProps> = ({
  Icon,
  children,
}) => {
  return (
    <ButtonComponent className="button">
      {Icon && <Icon className="button__icon" style={{ width: 20 }} />}
      {children}
    </ButtonComponent>
  )
}

export default Button;