import React, { memo, useCallback, useState } from "react";
import { Section2Wrapper } from "./style";
import SectionRoom from "../../../../components/SectionRoom";
import SectionRoomTitle from "../../../../components/SectionRoomTitle";
import Tabs from "../../../../components/Tabs";
import SectionFooter from "../../../../components/SectionFooter";

const Section2 = memo((props) => {
  const { data } = props;
  const nameList = data?.dest_address?.map((item) => item.name);
  const [activeName, setActiveName] = useState(nameList?.[0]);
  const tabClickHandle = useCallback(function (tabName) {
    setActiveName(tabName);
  }, []);

  return (
    <Section2Wrapper>
      <SectionRoomTitle
        title={data.title}
        subtitle={data.subtitle}
      ></SectionRoomTitle>

      <Tabs data={nameList} tabClick={tabClickHandle}></Tabs>
      <SectionRoom
        data={{ list: data.dest_list?.[activeName] }}
        itemWidth="33.333%"
      ></SectionRoom>

      <SectionFooter name={activeName}></SectionFooter>
    </Section2Wrapper>
  );
});

export default Section2;
