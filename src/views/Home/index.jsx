import React, { memo, useEffect } from "react";
import { HomeWrapper } from "./style";
import HomeBanner from "./components/Banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchGoodPriceInfo } from "../../store/modules/home";
import Section from "../../components/Section";
import RoomItem from "./components/RoomItem";

const Home = memo(() => {
  const dispatch = useDispatch();

  const goodPriceInfo = useSelector(
    (state) => state.home.goodPriceInfo,
    shallowEqual
  );
  console.log(goodPriceInfo);
  useEffect(() => {
    dispatch(fetchGoodPriceInfo());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <Section title={goodPriceInfo.title} subtitle={"副标题"} />
          <div className="room-list">
            {goodPriceInfo?.list?.slice(0, 8).map((item) => {
              return <RoomItem data={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
