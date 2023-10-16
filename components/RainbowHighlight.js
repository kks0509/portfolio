</*----------완료----------*/></>;
import React from 'react';
import { RoughNotation } from 'react-rough-notation';

export const RainbowHighlight = ({ color, children }) => {
  const animationDuration = Math.floor(30 * children.length);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};
