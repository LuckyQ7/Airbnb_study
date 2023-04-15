import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import fliterData from "../../../../assets/data/filter_data.json";
import classNames from "classnames";
const Filter = memo(() => {
  const [selectList, setSelectList] = useState([]);
  function onFilterClick(filterName) {
    let selectListTemp = [...selectList];
    const index = selectListTemp.findIndex((item) => item === filterName);
    if (index !== -1) {
      selectListTemp.splice(index, 1);
    } else {
      selectListTemp.push(filterName);
    }
    setSelectList(selectListTemp);
  }

  return (
    <FilterWrapper>
      {fliterData.map((item, index) => {
        return (
          <span
            className={classNames({ select: selectList.includes(item) })}
            key={index}
            onClick={(e) => {
              onFilterClick(item);
            }}
          >
            {item}
          </span>
        );
      })}
    </FilterWrapper>
  );
});

export default Filter;
