import React, { memo, useEffect } from "react";
import { HomeWrapper } from "./style";
import HomeBanner from "./components/Banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "../../store/modules/home";
import Section from "./components/Section";
import Section2 from "./components/Section2";

const Home = memo(() => {
  const dispatch = useDispatch();

  const { goodPriceInfo, hightScoreInfo, discountInfo, hotRecommendInfo } =
    useSelector(
      (state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        hightScoreInfo: state.home.hightScoreInfo,
        discountInfo: state.home.discountInfo,
        hotRecommendInfo: state.home.hotRecommendInfo,
      }),
      shallowEqual
    );

  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {hotRecommendInfo._id && <Section2 data={hotRecommendInfo}></Section2>}
        {discountInfo._id && <Section2 data={discountInfo}></Section2>}
        <Section data={goodPriceInfo}></Section>
        <Section data={hightScoreInfo}></Section>
      </div>
    </HomeWrapper>
  );
});

export default Home;
