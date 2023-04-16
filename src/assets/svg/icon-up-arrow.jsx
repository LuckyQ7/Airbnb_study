import React, { memo } from "react";
import { styleStrToObj } from "./utils/index";

const IconUpArrow = memo((props) => {
  const { width = 12, height = 12 } = props;
  return (
    <svg
      t="1681648023346"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="5414"
      style={styleStrToObj(
        `display:block;height:${height}px;width:${width}px;stroke:currentColor;fill:currentColor;stroke-width:5.333333333333333;overflow:visible`
      )}
    >
      <path
        d="M573.056 272l308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z"
        p-id="5415"
      ></path>
    </svg>
  );
});

export default IconUpArrow;
