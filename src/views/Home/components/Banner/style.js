import styled from "styled-components";
import HomeBannerImage from "@/assets/img/homeBanner.jpg";

export const HomeBannerWrapper = styled.div`
  background: #1d1f1a;

  .banner {
    background: url(${HomeBannerImage}) center;
    height: 480px;
    background-size: auto 480px;
    background-repeat: no-repeat;
  }
`;
