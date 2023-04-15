import React, { memo, useState } from "react";
import { TabsWrapper, ButtonWrapper } from "./style";
import ScrollView from "../ScrollView";
const Tabs = memo((props) => {
  const { data, tabClick } = props;
  const [tabName, setTabName] = useState(data?.[0]);
  
  const onTabClick = (tabName) => {
    setTabName(tabName);
    tabClick(tabName);
  };

  return (
    <TabsWrapper>
      <ScrollView>
        {data?.map((item, index) => {
          return (
            <ButtonWrapper
              onClick={() => onTabClick(item)}
              active={tabName === item}
              key={index}
            >
              {item}
            </ButtonWrapper>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

export default Tabs;
