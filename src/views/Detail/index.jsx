import React, { memo, useCallback, useState } from "react";
import { DetailWrapper } from "./style";
import DetailPictures from "./components/Pictures";
import Preview from "../../components/Preview";

const Detail = memo(() => {
  const [showPreview, setShowPreview] = useState(true);

  const handlePreviewClick = useCallback(() => {
    setShowPreview(true);
  }, []);

  const handleClose = useCallback(() => {
    setShowPreview(false);
  }, []);

  return (
    <DetailWrapper>
      <DetailPictures onPreviewClick={handlePreviewClick}></DetailPictures>
      {showPreview && <Preview onClose={handleClose} />}
    </DetailWrapper>
  );
});

export default Detail;
