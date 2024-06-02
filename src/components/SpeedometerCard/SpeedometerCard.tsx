import React from 'react';
import { BoltIcon } from '@heroicons/react/16/solid';

import Paper from '../Paper/Paper';
import PanelHeader from '../PanelHeader/PanelHeader';
import PanelFooter from '../PanelFooter/PanelFooter';
import SemiDonut from '../SemiDonut/SemiDonut';

import './styles.css';

interface SpeedometerCardProps {
  value?: number;
}

const SpeedometerCard: React.FC<SpeedometerCardProps> = ({
  value = 0,
}) => {
  return (
    <Paper width={365}>
      <PanelHeader
        title="App limits"
      />
      <div className="speedometer-chart__content" style={{ height: 280 }}>
        <div className="speedometer-chart__content-chart">
          <SemiDonut height={120} value={value} label={`${value}%`} />
        </div>
        <span className="speedometer-chart__title">
          You've almost reached your limit
        </span>
        <span className="speedometer-chart__description">
          You've used 80% of your available spots.<br/>
          Upgrade plan to create more projects.
        </span>
      </div>
      <PanelFooter
        primaryButtonLabel="Upgrade plan"
        Icon={BoltIcon}
      />
    </Paper>
  );
};

export default SpeedometerCard;