import React, { memo } from "react";
import { RoomItemWrapper } from "./style";
import RoomItem from "../RoomItem";

const SectionRoom = memo((props) => {
  const { data, itemWidth = "25%" } = props;
  return (
    <RoomItemWrapper>
      {data?.list?.slice(0, 8).map((item) => {
        return <RoomItem itemWidth={itemWidth} data={item} key={item.id} />;
      })}
    </RoomItemWrapper>
  );
});

export default SectionRoom;
