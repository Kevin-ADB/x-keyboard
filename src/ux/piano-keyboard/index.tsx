import React from "react";
import { KeyGroup } from "./key-group";

export interface IPianoKeyboardProps {
  $onDown: (keyNumber: number) => void;
  $onUp: (keyNumber: number) => void;
  $isKeyPressed: (keyNumber: number) => boolean;
}

export const PianoKeyboard: React.FC<IPianoKeyboardProps> = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <KeyGroup
        $whiteKeyCount={2}
        $layoutWhiteKeyCount={4}
        $rightAligned={true}
        $startKeyNumber={9}
        {...props}
      />
      {new Array(7).fill(0).map((_, index) => (
        <>
          <KeyGroup
            $whiteKeyCount={3}
            $startKeyNumber={(index + 1) * 12}
            {...props}
          />
          <KeyGroup
            $whiteKeyCount={4}
            $startKeyNumber={(index + 1) * 12 + 5}
            {...props}
          />
        </>
      ))}
      <KeyGroup
        $whiteKeyCount={1}
        $layoutWhiteKeyCount={3}
        $startKeyNumber={96}
        {...props}
      />
    </div>
  );
};
