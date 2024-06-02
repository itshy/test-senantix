import React from 'react';

import './styles.css';

interface PaperProps {
  children: React.ReactNode;
  width?: React.CSSProperties['width'],
}

const Paper: React.FC<PaperProps> = ({
  children,
  width = 'initial',
}) => {
  return (
    <div className="paper" style={{ width }}>
      {children}
    </div>
  );
};

export default Paper;