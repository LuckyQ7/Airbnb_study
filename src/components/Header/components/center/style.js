import styled from "styled-components";
export const HeaderCenterWrapper = styled.div`
  padding: 0 24px;
  flex: 0 1 auto;
  min-width: 348px;

  .dir {
    text-align: left;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 40px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
    transition: box-shadow 0.2s ease;
    --lilsearch-field_padding-inline: 16px;
    align-items: center;
    color: #222222;
    display: inline-flex;
    max-width: 100%;
    vertical-align: middle;
    width: 300px;
    height: 48px;
    padding-left: 8px;

    .text {
      font-size: 14px;
      line-height: 18px;
      font-weight: 600;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      flex: 1 1 auto;
      padding: 16px;
    }

    .search {
      background-color: ${(props) => props.theme.color.primaryColor};
      border-radius: 50%;
      padding: 10px;
      color: #ffffff;
      height: 32px;
      width: 32px;
      margin: 7px 7px 7px 0;
    }

    ${(props) => props.theme.mixin.boxShadow}
  }
`;
