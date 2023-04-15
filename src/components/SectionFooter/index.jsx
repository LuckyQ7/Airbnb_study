import React, { memo } from "react";
import { SectionFooterWrapper } from "./style";
import IconRight from "../../assets/svg/icon-right";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo((props) => {
  const { name = "" } = props;
  let text = "查看更多";
  if (name) text = `查看更多${name}房源`;
  let special = classNames({ special: text !== "查看更多", text });
  const navigate = useNavigate();

  function onFooterClick() {
    navigate("/entire");
  }

  return (
    <SectionFooterWrapper onClick={onFooterClick}>
      <div className={special}>{text}</div>
      <IconRight></IconRight>
    </SectionFooterWrapper>
  );
});

export default SectionFooter;
