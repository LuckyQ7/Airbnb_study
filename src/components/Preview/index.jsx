import React, { memo, useState } from "react";
import { useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { PreviewWrapper } from "./style";
import IconClose from "../../assets/svg/icon-close";
import IconLeft from "../../assets/svg/icon-left";
import IconRight from "../../assets/svg/icon-right";

const Preview = memo((props) => {
  const { onClose } = props;
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function onCloseClick() {
    onClose();
  }

  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );

  const [index, setIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);

  function onArrowClick(isLeft) {
    let newIndex = isLeft ? index - 1 : index + 1;
    if (newIndex < 0) newIndex = detailInfo.picture_urls.length - 1;
    if (newIndex > detailInfo.picture_urls.length - 1) newIndex = 0;
    setIsNext(newIndex > index);
    setIndex(newIndex);
  }

  return (
    <PreviewWrapper isNext={isNext}>
      <div className="top">
        <div className="icon" onClick={onCloseClick}>
          <IconClose className="icon" height="30" width="30" />
        </div>
      </div>
      <div className="content">
        <div className="arrowBtn">
          <div className="btn left" onClick={(e) => onArrowClick(true)}>
            <IconLeft height="100" width="100" />
          </div>
          <div className="btn right" onClick={(e) => onArrowClick(false)}>
            <IconRight height="100" width="100" />
          </div>
        </div>

        <div className="img">
          <SwitchTransition mode="in-out">
            <CSSTransition key={index} classNames="fade" timeout={200}>
              <img src={detailInfo?.picture_urls[index]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="bottom">bottom</div>
    </PreviewWrapper>
  );
});

export default Preview;
