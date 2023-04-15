import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";
const Indicator = memo((props) => {
  const { index } = props;
  const indicatorRef = useRef(null);
  useEffect(() => {
    const contentWidth = indicatorRef.current.clientWidth;
    const contentScrollWidth = indicatorRef.current.scrollWidth;
    // 当前索引的元素
    const item = indicatorRef.current.children[index];
    // 当前元素左边距离父元素左边的距离
    const itemLeft = item.offsetLeft;
    // 当前索引元素的宽度
    const itemWidth = item.offsetWidth;
    // 当前元素居中要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;
    if (distance < 0) distance = 0;
    const totalDistance = contentScrollWidth - contentWidth;
    if (distance > totalDistance) distance = totalDistance;
    indicatorRef.current.style.transform = `translate(${-distance}px)`;
  }, [index]);
  return (
    <IndicatorWrapper ref={indicatorRef}>{props.children}</IndicatorWrapper>
  );
});

export default Indicator;
