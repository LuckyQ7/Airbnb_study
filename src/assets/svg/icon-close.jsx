import React, { memo } from "react";
import { styleStrToObj } from "./utils/index";

const IconClose = memo((props) => {
  const { width = 12, height = 12 } = props;
  return (
    <svg
      t="1679747101948"
      className="icon"
      viewBox="0 0 1025 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2892"
      style={styleStrToObj(
        `display:block;fill:none;height:${height}px;width:${width}px;stroke:currentColor;stroke-width:5.333333333333333;overflow:visible;color:currentcolor`
      )}
    >
      <path
        d="M97.018 1023.854l-97.018-97.018 926.837-926.837 97.018 97.018-926.837 926.837z"
        fill="#fff"
        p-id="2893"
      ></path>
      <path
        d="M0.277 97.162l97.018-97.018 926.837 926.837-97.018 97.018-926.837-926.837z"
        fill="#fff"
        p-id="2894"
      ></path>
    </svg>
  );
});

export default IconClose;
