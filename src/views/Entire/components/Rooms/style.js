import styled from "styled-components";

export const RoomsWrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  position: relative;
  h2 {
    font-size: 22px;
    font-weight: 700;
    color: #222;
  }
  .roomsList {
    display: flex;
    flex-wrap: wrap;
  }

  > .cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
