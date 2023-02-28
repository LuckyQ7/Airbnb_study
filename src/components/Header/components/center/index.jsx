import React, { memo } from "react";
import { HeaderCenterWrapper } from "./style";
import IconSearch from "@/assets/svg/icon-search";
const HeaderCenter = memo(() => {
  return (
    <HeaderCenterWrapper>
      <div className="dir">
        <div className="text">搜索房源和体验</div>
        <div className="search">
          <IconSearch />
        </div>
      </div>
    </HeaderCenterWrapper>
  );
});

export default HeaderCenter;
