import styled from "styled-components";

export const PreviewWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #333;
  z-index: 99;

  display: flex;
  flex-direction: column;

  .top {
    height: 68px;
    color: #fff;
    position: relative;
    overflow: hidden;
    > .icon {
      position: absolute;
      right: 40px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }

  .content {
    position: relative;
    flex: 1;

    display: flex;
    justify-content: center;

    overflow: hidden;

    .arrowBtn {
      .btn {
        color: #fff;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      }

      > .left {
        left: 0;
      }

      > .right {
        right: 0;
      }
      z-index: 99;
    }

    > .img {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        height: 100%;
        user-select: none;
      }

      .fade-enter {
        transform: translateX(${(props) => (props.isNext ? "100%" : "-100%")});
        opacity: 0;
      }

      .fade-enter-active {
        opacity: 1;
        transform: translateX(0);
        transition: all 0.2s ease;
      }

      .fade-exit {
        opacity: 1;
      }

      .fade-exit-active {
        opacity: 0;
        transition: all 0.2s ease;
      }
    }
  }

  .bottom {
    height: 88px;
  }
`;
