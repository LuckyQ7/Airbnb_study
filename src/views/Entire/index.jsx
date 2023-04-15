import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import Rooms from "./components/Rooms";
import { useDispatch } from "react-redux";
import { fetchEntireDataAction } from "../../store/modules/entire";

const Entire = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntireDataAction());
  }, [dispatch]);

  return (
    <EntireWrapper>
      <Filter />
      <Rooms />
      <Pagination />
    </EntireWrapper>
  );
});

export default Entire;
