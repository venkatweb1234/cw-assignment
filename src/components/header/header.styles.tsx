import styled from "styled-components";
import plates from "../../media/plates-header.jpg";
export const StyledDiv = styled.div`
  background-image: url(${plates});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 311px;
  > div {
    margin: 0 auto;
    width: 50%;
    background-color: #333;
    color: #fff;
    height:100%;
    padding: 90px 30px 90px 30px;
    text-align:center;
  }
`;
