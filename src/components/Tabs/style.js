import styled from "styled-components";

export const TabsWrapper = styled.div`
    /* display: flex; */
    /* margin-right:-15px; */
`

export const ButtonWrapper = styled.button`
    background-color:${(props => (props.active ? props.theme.color.secondaryColor : "#fff"))} ;
    color: ${(props => (props.active ? '#fff' : "black"))} ;
    border:1px solid #d7d7d7;
    padding:15px;
    margin-right:15px;
    border-radius:3px;
    white-space: nowrap;
    cursor:pointer;
    flex-basis: 120px;
    flex-shrink:0;
    ${(props) => props.theme.mixin.boxShadow}
`   