import styled from "styled-components";

export const HeaderLeftWrapper = styled.div`
  flex: 1;
  display: flex;
  algin-items: center;
  color: ${(props) => props.theme.color.primaryColor};

  .logo {
    cursor: pointer;
  }
`;
