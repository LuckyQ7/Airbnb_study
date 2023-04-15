import React, { memo } from "react";
import { styleStrToObj } from "./utils/index";

const IconLeft = memo((props) => {
  const { width = 12, height = 12 } = props;
  return (
    <svg
      t="1678540655115"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="10547"
      style={styleStrToObj(
        `display:block;fill:none;height:${height}px;width:${width}px;stroke:currentColor;stroke-width:5.333333333333333;overflow:visible;color:currentcolor`
      )}
    >
      <path
        d="M670.954667 86.826667L269.44 488.362667a32 32 0 0 0-2.090667 42.965333l2.090667 2.282667L670.933333 935.168a8.533333 8.533333 0 0 0 6.037334 2.496h66.368a8.533333 8.533333 0 0 0 6.037333-14.570667L337.28 511.018667 749.397333 98.901333a8.533333 8.533333 0 0 0-6.037333-14.570666h-66.346667a8.533333 8.533333 0 0 0-6.058666 2.496z"
        p-id="10548"
        fill="currentColor"
      ></path>
    </svg>
  );
});

export default IconLeft;
