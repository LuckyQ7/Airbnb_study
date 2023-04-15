import styled from "styled-components";

export const DetailPicturesWrapper = styled.div`
  height: 50vh;
  display: flex;
  min-height: 30vw;
  position: relative;
  > div {
    flex: 1;
    position: relative;
  }

  .left {
    &:hover {
      > .cover {
        opacity: 0;
      }
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #222;
    .right-item {
      width: 50%;
      position: relative;
      flex-shrink: 0;
      height: 50%;

      &:nth-child(1) {
        border-right: 1px solid #222;
        border-bottom: 1px solid #222;
      }

      &:nth-child(2) {
        border-bottom: 1px solid #222;
      }

      &:nth-child(3) {
        border-right: 1px solid #222;
      }

      &:hover {
        > .cover {
          opacity: 0;
        }
      }
    }
  }

  .cover,
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .cover {
    opacity: 0;
    background-color: #222;
    z-index: 9;
  }

  &:hover {
    .cover {
      opacity: 0.5;
    }
  }
`;

export const PreviewButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  border: 1px solid #222;
  background-color: #fff;
  padding: 8px 15px;
  border-radius: 5px;
  color: #555;
  z-index: 99;

  &:active {
    background-color: #e7e7e7;
  }

  ${(props) => props.theme.mixin.boxShadow}
`;
