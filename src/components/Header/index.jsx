import React, { memo } from "react";

import HeaderLeft from "./components/left";
import HeaderCenter from "./components/center";
import HeaderRight from "./components/right";

import { HeaderWrapper } from "./style";
import "./style";

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

export default Header;
