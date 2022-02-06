import styled from "styled-components";

export const StyledMyCart = styled.div`
position: relative;
top: -3em;
float: right;
`;
export const StyledButton = styled.button`
border: none !important;
background: none !important;
color: #333 !important; ;
`;
export const StyledMyCartImg = styled.img`
  width: 70%;
  position: relative;
  left: 1em;
  top: -0.4em;
`;

export const StyledTD = styled.td`
  position: relative;
  > p {
   
   font-size:0.8rem;
  }
  &:nth-child(2){
  line-height:0.5rem;
  }

`;

export const StyledCross = styled.td`
  position: relative;
  left: 5em;
  top: -1em;
`;
export const StyledTotalTD = styled.td`
  position: relative;
  left: 1.4em;
`;

export const StyledPriceSPAN = styled.span`
  position: relative;
  left: 19em;
`;
export const StyledCartTD = styled.td`
position: relative;
top: 1.5em;
left: -15em;
`;

export const StyledViewBTN = styled.button`
  border: 1px solid lightgray;
  background: #fff;
  width: 8em;
  height: 2.5rem;
  position: relative;
  top: 1em;
  left: 5em;
`;
export const StyledTDCHK = styled.td`
  position: relative;
  top: 3em;
  left: -1em;
`;
export const StyledChkButton = styled.button`
  background: #333;
  color: #fff;
  height: 2.5rem;
  width: 8em;
  position: relative;
    top: -0.5em;
`;
export const StyledMycart = styled.div`
width: 35%;
border-color: lightgray;
position: absolute;
left: 54em;
background: #fff;
top: 4em;
border: 1px solid gray;
border-top: none;
height: 50%;
z-index: 999;
overflow-y: scroll;
overflow-x: hidden;
`;

export const StyledP = styled.h4`
text-align:center
`
