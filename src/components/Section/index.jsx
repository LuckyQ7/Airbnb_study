import React, { memo } from "react";
import { SectionWrapper } from "./style";

const Section = memo((props) => {
  const { title, subtitle } = props;
  return (
    <SectionWrapper>
      <h2 className="title">{title}</h2>
      {subtitle && <h2 className="subtitle">{subtitle}</h2>}
    </SectionWrapper>
  );
});

export default Section;
