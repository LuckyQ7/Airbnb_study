import React, { memo, useRef, useState } from "react";
import { RoomItemWrapper } from "./style";
import { Rating, Box } from "@mui/material";
import { Carousel } from "antd";
import IconLeft from "../../assets/svg/icon-left";
import IconRight from "../../assets/svg/icon-right";
import Indicator from "../../components/Indicator";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { data, itemWidth, itemClickHandle } = props;
  const carouselRef = useRef(null);

  const [index, setIndex] = useState(0);
  function indicatorChange(isLeft) {
    let newIndex = isLeft ? index - 1 : index + 1;
    if (newIndex < 0) newIndex = data?.picture_urls?.length - 1;
    if (newIndex > data?.picture_urls?.length - 1) newIndex = 0;
    setIndex(newIndex);
  }
  function onLeftClick() {
    indicatorChange();
    carouselRef.current.prev();
  }
  function onRightClick() {
    indicatorChange();
    carouselRef.current.next();
  }

  function renderImage() {
    return (
      <div className="cover">
        <img src={data.picture_url} alt="" />
      </div>
    );
  }
  function renderPictures() {
    return (
      data?.picture_urls && (
        <div>
          <div className="slider">
            <div className="control">
              <div className="btn left" onClick={onLeftClick}>
                <IconLeft width="25" height="25"></IconLeft>
              </div>
              <div className="btn right" onClick={onRightClick}>
                <IconRight width="25" height="25"></IconRight>
              </div>

              <div className="indicator">
                <Indicator index={index}>
                  {data?.picture_urls?.map((item, idx) => {
                    return (
                      <span
                        className={classNames({
                          indicatorItem: true,
                          active: index === idx,
                        })}
                        key={idx}
                      ></span>
                    );
                  })}
                </Indicator>
              </div>
            </div>
          </div>
          <Carousel dots={false} ref={carouselRef}>
            {data?.picture_urls?.map((item, index) => {
              return (
                <div className="cover" key={index}>
                  <img key={index} src={item} alt="" />
                </div>
              );
            })}
          </Carousel>
        </div>
      )
    );
  }

  function onItemClick() {
    if (itemClickHandle) itemClickHandle(data);
  }
  return (
    <RoomItemWrapper
      describeTextColor={data.verify_info.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={onItemClick}
    >
      <div className="room-item-inner">
        {data?.picture_urls ? renderPictures() : renderImage()}
        <div className="describe">{data.verify_info.messages.join(" · ")}</div>
        <div className="name">{data.name}</div>
        <div className="price">{data.price_format}/晚</div>
        <div className="rating">
          <Rating
            name="read-only"
            value={data.star_rating ?? 5}
            readOnly
            size="small"
            sx={{ color: data.star_rating_color }}
            precision={0.1}
          />
          <Box sx={{ ml: 1 }}>{data.bottom_info?.content}</Box>
        </div>
      </div>
    </RoomItemWrapper>
  );
});

export default RoomItem;
