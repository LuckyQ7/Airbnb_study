import React, { memo } from "react";
import { SectionWrapper } from "./style";
import SectionRoom from "../../../../components/SectionRoom";
import SectionRoomTitle from "../../../../components/SectionRoomTitle";
import SectionFooter from "../../../../components/SectionFooter";

const Section = memo((props) => {
  const { data } = props;

  return (
    <SectionWrapper>
      <SectionRoomTitle title={data.title} subtitle={data.subtitle} />
      <SectionRoom data={data} />
      <SectionFooter></SectionFooter>
    </SectionWrapper>
  );
});

export default Section;
