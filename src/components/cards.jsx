import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

const IconFloatWidget = () => {
  return (
    <div className="float-widget" style={{ top: '12vh', right: '8vw', rotate: '10deg' }}>
      <FontAwesomeIcon className="icon" icon={faMugHot} />
    </div>
  );
};

export default IconFloatWidget;
