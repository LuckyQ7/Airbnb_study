import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;

  .MuiPaginationItem-page {
    &.Mui-selected {
      background-color: #222;
      color: #fff;
    }
  }
`;
