import React from 'react';
import { Button as ButtonComponent } from '@headlessui/react';

import './styles.css';

interface ButtonProps {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: string;
}

const Button: React.FC<ButtonProps> = ({
  Icon,
  children,
}) => {
  return (
    <ButtonComponent className="button">
      {Icon && <Icon width={20} className="button__icon" />}
      {children}
    </ButtonComponent>
  )
}

export default Button;