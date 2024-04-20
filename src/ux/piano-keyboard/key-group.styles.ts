import { mergeStyleSets } from "@fluentui/merge-styles";
import { memoizeFunction } from "@fluentui/utilities";

export const getKeyGroupStyles = memoizeFunction(
  (
    whiteKeyCount: number,
    layoutWhiteKeyCount: number,
    rightAligned: boolean,
  ) => {
    const blackWidth = 60 / whiteKeyCount; // 60% of white key

    const layoutBlackKeyCount = layoutWhiteKeyCount - 1;
    const layoutWidth = (100 * layoutWhiteKeyCount) / whiteKeyCount;
    const spacing =
      (layoutWidth - blackWidth * layoutBlackKeyCount) / layoutWhiteKeyCount;

    const virtualWidth =
      whiteKeyCount * spacing + (whiteKeyCount - 1) * blackWidth;
    const gap = (100 - virtualWidth) / 2;

    return mergeStyleSets({
      keyGroup: {
        flex: whiteKeyCount,
        height: 100,
        position: "relative",
        display: "flex",
      },
      whites: {
        position: "absolute",
        height: "100%",
        width: "100%",
        display: "flex",
        "&>*": {
          flex: 1,
          border: "1px solid rgba(0,0,0,0.25)",
          background: "white",
          boxSizing: "border-box",
        },
      },
      blacks: {
        height: "63.33%",
        width: "100%",
        zIndex: 1,
        position: "relative",
        left: `${rightAligned ? gap : -gap}%`,
        "&>*": {
          background: "black",
          display: "inline-block",
          width: `${blackWidth}%`,
          height: "100%",
          margin: `0 ${spacing / 2}%`,
        },
      },
      key: {
        borderRadius: "6%",
      },
    });
  },
);
