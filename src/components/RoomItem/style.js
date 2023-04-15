import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: ${(props) => props.itemWidth};
  padding: 8px;
  border-radius: 5px;

  .room-item-inner {
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;
    position: relative;

    .cover {
      width: 100%;
      position: relative;
      padding: 66.66% 8px 0;
      overflow: hidden;
      border-radius: 5px;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }

    .describe {
      color: ${(props) => props.describeTextColor};
      padding: 5px 0;
    }

    .name {
      color: #484848;
      font-weight: 600;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }

    .price {
      padding: 5px 0;
      color: #76767b;
    }

    .rating {
      display: flex;
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      .control {
        padding: 66.66% 8px 0;
        position: relative;
        z-index: 20;
        &:hover {
          .btn {
            display: flex;
          }
        }

        > .btn {
          width: 50px;
          position: absolute;
          height: 100%;
          top: 0;
          color: #fff;
          z-index: 20;
          display: none;
          justify-content: center;
          align-items: center;
        }
        > .left {
          left: 0;
          background: linear-gradient(
            to left,
            transparent 0%,
            rgba(0, 0, 0, 0.2) 100%
          );
        }
        > .right {
          right: 0;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.2) 100%
          );
        }
      }
    }

    .indicator {
      position: absolute;
      bottom: 10px;
      width: 30%;
      overflow: hidden;
      left: 0;
      right: 0;
      margin: 0 auto;
      overflow: hidden;

      .indicatorItem {
        width: 6px;
        height: 6px;
        background-color: #fff;
        border-radius: 50%;
        margin-right: 7px;
        &.active {
          width: 10px;
          height: 10px;
        }

        &.s {
          width: 5px;
          height: 5px;
        }

        &.m {
          width: 6px;
          height: 6px;
        }

        &.l {
          width: 7px;
          height: 7px;
        }
      }
    }
  }
`;
