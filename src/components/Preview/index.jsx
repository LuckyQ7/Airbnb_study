import React, { memo, useState } from "react";
import { useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import classNames from "classnames";

import { PreviewWrapper } from "./style";
import IconClose from "../../assets/svg/icon-close";
import IconLeft from "../../assets/svg/icon-left";
import IconRight from "../../assets/svg/icon-right";
import IconDownArrow from "../../assets/svg/icon-down-arrow";
import IconUpArrow from "../../assets/svg/icon-up-arrow";
import Indicator from "../../components/Indicator";

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

  function onIndicatorClick(idx) {
    setIsNext(idx > index);
    setIndex(idx);
  }

  const [isShowIndicator, setIsShowIndicator] = useState(true);

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
      <div className="bottom">
        <div className="info">
          <div className="desc">
            <div>
              <span className="count">
                {index + 1}/{detailInfo?.picture_urls.length}
              </span>
              <span>room apartment图片{index + 1}</span>
            </div>

            <div
              className="toggle"
              onClick={() => setIsShowIndicator(!isShowIndicator)}
            >
              <span>隐藏照片列表 </span>
              {isShowIndicator ? (
                <IconDownArrow width="22" height="22" />
              ) : (
                <IconUpArrow width="22" height="22" />
              )}
            </div>
          </div>

          <div className={classNames("list", { hide: !isShowIndicator })}>
            <Indicator index={index}>
              {detailInfo?.picture_urls.map((item, idx) => {
                return (
                  <div
                    className={classNames("item", { active: index === idx })}
                    key={idx}
                    onClick={() => onIndicatorClick(idx)}
                  >
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </PreviewWrapper>
  );
});

export default Preview;
