import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/16/solid';

import DropdownMenu from '../DropdownMenu/DropdownMenu';

import './styles.css';

interface PanelHeaderProps {
  title: string;
}

const PanelHeader: React.FC<PanelHeaderProps> = ({
  title,
}) => {
  return (
    <div className="panel-header">
      <div className="panel-header__icon">
        <AcademicCapIcon style={{ width: 24 }} />
      </div>
      <span className="panel-header__title">{title}</span>
      <DropdownMenu />
    </div>
  );
};

export default PanelHeader;