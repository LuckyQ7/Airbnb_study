import React, { memo, useState, useEffect } from "react";
import { HeaderRightWrapper } from "./style";
import IconLocal from "@/assets/svg/icon-local";
import IconMenu from "@/assets/svg/icon-menu";
import IconAvatar from "@/assets/svg/icon-avatar";
const HeaderRight = memo(() => {
  const [showPanel, setPanel] = useState(false);

  useEffect(() => {
    function windowClickHandle(e) {
      setPanel(false);
    }
    window.addEventListener("click", windowClickHandle, true);
    return () => {
      window.removeEventListener("click", windowClickHandle, true);
    };
  }, []);

  function profileClickHandle() {
    setPanel(!showPanel);
  }
  return (
    <HeaderRightWrapper>
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <span>
          <IconLocal />
        </span>
      </div>

      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <div className="avatar">
          <IconAvatar />
        </div>
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item">登录</div>
            </div>
            <div className="bottom">
              <div className="item">来爱彼迎发布房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </HeaderRightWrapper>
  );
});

export default HeaderRight;
