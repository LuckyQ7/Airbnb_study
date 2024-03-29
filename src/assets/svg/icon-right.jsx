import React, { memo } from "react";
import { styleStrToObj } from "./utils/index";

const IconRight = memo((props) => {
  const { width = 12, height = 12 } = props;
  return (
    <svg
      t="1678511255562"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2750"
      style={styleStrToObj(
        `display:block;fill:none;height:${height}px;width:${width}px;stroke:currentColor;stroke-width:5.333333333333333;overflow:visible;color:currentcolor`
      )}
    >
      <path
        d="M644.896 514.656c-4.647-3.465-7.707-5.211-10.102-7.614-111.882-111.777-223.68-223.642-335.584-335.395-11.498-11.482-17.601-24.432-14.060-40.893 6.549-30.444 42.724-43.056 66.702-23.206 2.638 2.179 5.006 4.691 7.43 7.116 122.147 122.131 244.29 244.268 366.434 366.411 22.218 22.218 22.236 44.944 0.033 67.143-122.749 122.755-245.548 245.451-368.185 368.316-12.166 12.191-26.062 17.589-42.734 13.327-28.957-7.395-40.247-42.511-21.462-65.828 2.323-2.881 5.046-5.457 7.668-8.083 111.214-111.228 222.435-222.459 333.706-333.634 2.407-2.404 5.469-4.166 10.148-7.66z"
        p-id="2751"
        fill="currentColor"
      ></path>
    </svg>
  );
});

export default IconRight;
