import React, { memo } from "react";
import { HomeBannerWrapper } from "./style";

const Banner = memo(() => {
  return (
    <HomeBannerWrapper>
      <div className="banner"></div>
    </HomeBannerWrapper>
  );
});

export default Banner;
