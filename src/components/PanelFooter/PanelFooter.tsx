import React from 'react';
import Button from '../Button/Button';

import './styles.css';

interface PanelFooterProps {
  Icon?: React.ElementType;
  primaryButtonLabel: string;
}

const PanelFooter: React.FC<PanelFooterProps> = ({
  Icon,
  primaryButtonLabel,
}) => {
  return (
    <div className="panel-footer">
      <Button
        Icon={Icon}
      >
        {primaryButtonLabel}
      </Button>
    </div>
  );
};

export default PanelFooter;