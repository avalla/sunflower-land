import React from "react";

import bear from "assets/sfts/bears/sfl_bear.png";
import { PIXEL_SCALE } from "features/game/lib/constants";

export const BetaBear: React.FC = () => {
  return (
    <>
      <img
        src={bear}
        style={{
          width: `${PIXEL_SCALE * 16}px`,
          bottom: `${PIXEL_SCALE * 0}px`,
          left: `${PIXEL_SCALE * 0}px`,
        }}
        className="absolute"
        alt="Beta Bear"
      />
    </>
  );
};
