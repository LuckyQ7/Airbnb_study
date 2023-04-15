import React, { memo } from "react";
import { Pagination as MuiPagination } from "@mui/material";
import { PaginationWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchEntireDataAction } from "../../../../store/modules/entire.js";

const Pagination = memo(() => {
  const dispatch = useDispatch();
  const { entireInfo } = useSelector(
    (state) => ({
      entireInfo: state.entire.entireInfo,
    }),
    shallowEqual
  );

  const count = Math.ceil(entireInfo.totalCount / 20) || 0;
  function handleChange(event, page) {
    window.scrollTo(0, 0);
    dispatch(fetchEntireDataAction(page));
  }

  return (
    <PaginationWrapper>
      {!!count && (
        <MuiPagination count={count} onChange={handleChange}></MuiPagination>
      )}
    </PaginationWrapper>
  );
});

export default Pagination;
