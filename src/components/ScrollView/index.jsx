import React, { memo, useRef, useState } from "react";
import { useEffect } from "react";
import { ScrollViewWrapper } from "./style";
import IconRight from "../../assets/svg/icon-right";
import IconLeft from "../../assets/svg/icon-left";

const ScrollView = memo((props) => {
  const [index, setIndex] = useState(0);
  const [isShowRight, setIsShowRight] = useState(false);
  const [isShowLeft, setIsShowLeft] = useState(false);
  const scrollviewRef = useRef(null);
  let discoutWidth = useRef(0);

  function onArrowClick(isRight) {
    const newIndex = isRight ? index + 1 : index - 1;
    const currentWidth = scrollviewRef.current.children[newIndex].offsetLeft;
    scrollviewRef.current.style.transform = `translateX(${-currentWidth}px)`;
    setIndex(newIndex);
    setIsShowRight(discoutWidth.current > currentWidth);
    setIsShowLeft(currentWidth > 0);
  }

  useEffect(() => {
    const clientWidth = scrollviewRef.current.clientWidth;
    const scrollWidth = scrollviewRef.current.scrollWidth;
    discoutWidth.current = scrollWidth - clientWidth;
    setIsShowRight(discoutWidth.current > 0);
  }, [scrollviewRef]);

  return (
    <ScrollViewWrapper>
      {isShowLeft && (
        <div
          className="left"
          onClick={() => {
            onArrowClick(false);
          }}
        >
          <IconLeft />
        </div>
      )}

      {isShowRight && (
        <div
          className="right"
          onClick={() => {
            onArrowClick(true);
          }}
        >
          <IconRight />
        </div>
      )}

      <div className="scroll-hidden">
        <div className="scroll-content" ref={scrollviewRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

export default ScrollView;
