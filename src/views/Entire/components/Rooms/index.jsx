import React, { memo, useCallback } from "react";
import { RoomsWrapper } from "./style";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import RoomItem from "../../../../components/RoomItem";
import { updateDetailInfo } from "../../../../store/modules/detail";
import { useNavigate } from "react-router-dom";

const Rooms = memo(() => {
  const { entireInfo, isLoading } = useSelector(
    (state) => ({
      entireInfo: state.entire.entireInfo,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );

  const navgiate = useNavigate();
  const dispatch = useDispatch();
  const itemClickHandle = useCallback(
    (data) => {
      dispatch(updateDetailInfo(data));
      navgiate("/detail");
    },
    [dispatch, navgiate]
  );

  return (
    <RoomsWrapper>
      {!!entireInfo.totalCount && <h2>{entireInfo.totalCount}多处住所</h2>}
      <div className="roomsList">
        {entireInfo?.list?.map((item, index) => {
          return (
            <RoomItem
              itemClickHandle={itemClickHandle}
              key={index}
              data={item}
              itemWidth={"20%"}
            />
          );
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

export default Rooms;
