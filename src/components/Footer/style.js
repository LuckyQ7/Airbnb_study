import styled from "styled-components";

export const FooterWrapper = styled.div`
  border-top: 1px solid #eee;
  padding-top: 30px;
  margin-top: 200px;

  .footer-content {
    width: 1032px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding-bottom: 30px;

    .name {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 15px;
    }

    ul {
      color: #7e7f7b;
      font-size: 14px;
      padding: 0;
      li {
        list-style: none;
        margin-bottom: 5px;

        a {
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .statement {
    width: 1032px;
    margin: 0 auto;
    text-align: center;
    color: #7e7f7b;
    padding: 30px 0;
  }
`;
