import React from "react";

import { getKeyGroupStyles } from "./key-group.styles";
import { Key } from "./key";

export interface IKeyGroupProps {
  $whiteKeyCount: number;
  $startKeyNumber: number;

  $layoutWhiteKeyCount?: number;
  $rightAligned?: boolean;

  $onDown: (keyNumber: number) => void;
  $onUp: (keyNumber: number) => void;
  $isKeyPressed: (keyNumber: number) => boolean;
}

export const KeyGroup: React.FC<IKeyGroupProps> = (props) => {
  const {
    $whiteKeyCount,
    $startKeyNumber,
    $layoutWhiteKeyCount = props.$whiteKeyCount,
    $rightAligned,
    ...$methods
  } = props;
  const styles = getKeyGroupStyles(
    $whiteKeyCount,
    $layoutWhiteKeyCount,
    $rightAligned,
  );

  return (
    <div className={styles.keyGroup}>
      <div className={styles.whites}>
        {new Array($whiteKeyCount).fill(0).map((_, index) => (
          <Key
            key={index}
            $className={styles.key}
            $keyNumber={$startKeyNumber + index * 2}
            {...$methods}
          />
        ))}
      </div>
      <div className={styles.blacks}>
        {new Array($whiteKeyCount - 1).fill(0).map((_, index) => (
          <Key
            key={index}
            $className={styles.key}
            $keyNumber={$startKeyNumber + index * 2 - 1}
            {...$methods}
          />
        ))}
      </div>
    </div>
  );
};
