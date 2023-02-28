import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: 25%;
  padding: 8px;
  boder-radius: 5px;

  .room-item-inner {
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;
    .cover {
      width: 100%;
      position: relative;
      padding: 66.66% 8px 0;
      overflow: hidden;
      boder-radius: 5px;
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
  }
`;
