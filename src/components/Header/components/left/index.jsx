import React, { memo } from "react";
import { HeaderLeftWrapper } from "./style";
import IconLogo from "@/assets/svg/icon-logo";
import { useNavigate } from "react-router-dom";
const HeaderLeft = memo(() => {
  const navigate = useNavigate();
  function onLogoClick() {
    navigate("/home");
  }
  return (
    <HeaderLeftWrapper>
      <div className="logo" onClick={onLogoClick}>
        <IconLogo />
      </div>
    </HeaderLeftWrapper>
  );
});

export default HeaderLeft;
