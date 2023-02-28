import React, { memo } from "react";
import { RoomItemWrapper } from "./style";
import { Rating } from "@mui/material";

const RoomItem = memo((props) => {
  const { data } = props;
  return (
    <RoomItemWrapper
      describeTextColor={data.verify_info.text_color || "#39576a"}
    >
      <div className="room-item-inner">
        <div className="cover">
          <img src={data.picture_url} alt="" />
        </div>

        <div className="describe">{data.verify_info.messages.join(" · ")}</div>
        <div className="name">{data.name}</div>
        <div className="price">{data.price_format}/晚</div>
        <div>
          <Rating
            name="read-only"
            value={data.star_rating ?? 5}
            readOnly
            size="small"
            sx={{ color: data.star_rating_color }}
            precision={0.1}
          />
          {data.bottom_info?.content}
          <span></span>
        </div>
      </div>
    </RoomItemWrapper>
  );
});

export default RoomItem;
