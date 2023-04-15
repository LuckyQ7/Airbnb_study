import styled from "styled-components";

export const FilterWrapper = styled.div`
  padding: 20px 20px;
  border-bottom: 1px solid #e7e7e7;
  span {
    border: 1px solid #e7e7e7;
    padding: 10px 15px;
    display: inline-block;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
    color: #777;
    user-select: none;
    font-weight: 700;

    ${(props) => props.theme.mixin.boxShadow}

    &.select {
      background-color: ${(props) => props.theme.color.secondaryColor};
      color: #fff;
    }
  }
`;
