import React, { memo } from "react";
import { DetailPicturesWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import { PreviewButton } from "./style";

const DetailPictures = memo((props) => {
  const { onPreviewClick } = props;
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );

  function handleClick() {
    if (onPreviewClick) onPreviewClick();
  }

  return (
    <DetailPicturesWrapper>
      <div className="left">
        <div className="cover">cover1</div>
        <img src={detailInfo?.picture_urls[0]} alt="" />
      </div>
      <div className="right">
        <div className="right-item">
          <div className="cover">cover2</div>
          <img src={detailInfo?.picture_urls[1]} alt="" />
        </div>
        <div className="right-item">
          <div className="cover">cover3</div>
          <img src={detailInfo?.picture_urls[2]} alt="" />
        </div>
        <div className="right-item">
          <div className="cover">cover4</div>
          <img src={detailInfo?.picture_urls[3]} alt="" />
        </div>
        <div className="right-item">
          <div className="cover">cover5</div>
          <img src={detailInfo?.picture_urls[4]} alt="" />
        </div>
      </div>

      <PreviewButton onClick={handleClick}>显示图片</PreviewButton>
    </DetailPicturesWrapper>
  );
});

export default DetailPictures;
