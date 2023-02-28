import styled from "styled-components";
export const HeaderRightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  .btns {
    display: flex;
    algin-items: center;
    font-size: 14px;
    font-weight: 600;
    margin-right: 8px;
    span {
      background: transparent;
      border: 0;
      cursor: pointer;
      margin: 0;
      text-align: inherit;
      padding: 12px;
      &:hover {
        background-color: #f7f7f7;
        border-radius: 22px;
      }
    }
  }

  .profile {
    display: flex;
    align-items: center;
    background: transparent;
    cursor: pointer;
    margin: 0;
    text-align: inherit;
    background-color: #fff;
    border: 1px solid #dddddd;
    border-radius: 21px;
    padding: 5px 5px 5px 12px;
    position: relative;

    .avatar {
      color: #717171;
      flex: 0 0 30px;
      height: 30px;
      overflow: hidden;
      position: relative;
      width: 30px;
      z-index: 1;
      margin-left: 12px;
    }

    ${(props) => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      width: 240px;
      top: 50px;
      border: 1px solid #dddddd;
      right: 0;
      border-radius: 15px;
      padding: 5px 0;
      background: #fff;
      user-select: none;
      .item {
        height: 40px;
        line-height: 30px;
        padding-left: 20px;

        &:hover {
          background-color: #f7f7f7;
        }
      }

      .top {
        border-bottom: 1px solid #dddddd;
        .register {
          font-weight: 600;
        }
      }

      .bottom {
        padding-top: 10px;
      }
    }
  }
`;
