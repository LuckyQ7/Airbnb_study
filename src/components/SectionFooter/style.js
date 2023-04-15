import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
    display: flex;
    align-items: center;
    .text{
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 30px;
        margin-right: 5px;
        &:hover{
            text-decoration: underline;
        }

     &.special{
        color: ${props => props.theme.color.secondaryColor};
        font-size: 17px;
        font-weight: 700;
     }
    }
`