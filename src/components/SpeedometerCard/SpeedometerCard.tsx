import React from 'react';
import { BoltIcon } from '@heroicons/react/16/solid';

import Paper from '../Paper/Paper';
import PanelHeader from '../PanelHeader/PanelHeader';
import PanelFooter from '../PanelFooter/PanelFooter';
import SemiDonut from '../SemiDonut/SemiDonut';

import './styles.css';

interface SpeedometerCardProps {
  title?: string;
  description?: string | React.ReactNode;
  width?: number;
  headerTitle?: string;
  value?: number;
}

const SpeedometerCard: React.FC<SpeedometerCardProps> = ({
  title = '',
  description = '',
  width = 365,
  headerTitle = '',
  value = 0,
}) => {
  return (
    <Paper width={width}>
      <PanelHeader title={headerTitle} />
      <div className="speedometer-chart__content">
        <div className="speedometer-chart__content-chart">
          <SemiDonut height={120} value={value} label={`${value}%`} />
        </div>
        <span className="speedometer-chart__title">{title}</span>
        <span className="speedometer-chart__description">
          {description}
        </span>
      </div>
      <PanelFooter primaryButtonLabel="Upgrade plan" Icon={BoltIcon} />
    </Paper>
  );
};

export default SpeedometerCard;