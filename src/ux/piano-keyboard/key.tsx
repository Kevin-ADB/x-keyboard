import React from "react";

export interface IKeyProps {
  $className: string;
  $keyNumber: number;

  $onDown: (keyNumber: number) => void;
  $onUp: (keyNumber: number) => void;
  $isKeyPressed: (keyNumber: number) => boolean;
}

export const Key: React.FC<IKeyProps> = (props) => {
  const pressedClassName = props.$isKeyPressed() ? "pressed" : "";

  return <div className={`${props.$className} ${pressedClassName}`} />;
};
