import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  position: relative;

  .scroll-hidden {
    overflow: hidden;
    .scroll-content {
      display: flex;
      transition: all 200ms ease;
    }
  }

  .left,
  .right {
    position: absolute;
    top: 10px;
    background-color: #fff;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    color: #222;
  }

  .left {
    left: -20px;
  }
  .right {
    right: -20px;
  }
`;
