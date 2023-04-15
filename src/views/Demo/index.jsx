import React, { memo, useState } from "react";
import Indicator from "../../components/Indicator";
import { DemoWrapper } from "./style";
const Demo = memo(() => {
  const btns = ["aaa", "bbb", "ccc", "ddd", "eee", "fff"];
  const [index, setIndex] = useState(0);
  function onClick(isLeft) {
    let newIndex = isLeft ? index - 1 : index + 1;
    if (newIndex < 0) newIndex = btns.length - 1;
    if (newIndex > btns.length - 1) newIndex = 0;
    setIndex(newIndex);
  } 
  return (
    <DemoWrapper>
      <div>
        <button
          onClick={(e) => {
            onClick(true);
          }}
        >
          上一个
        </button>
        <button
          onClick={(e) => {
            onClick(false);
          }}
        >
          下一个
        </button>
      </div>
      <Indicator index={index}>
        {btns.map((item, index) => {
          return <button key={index}>{item}</button>;
        })}
      </Indicator>
    </DemoWrapper>
  );
});

export default Demo;
