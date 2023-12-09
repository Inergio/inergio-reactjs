import React from "react";

function Icon({ iconSvg }) {
  return (
    <div className={`icon-svg`}>
      { iconSvg }
    </div>
  );
}

export { Icon };