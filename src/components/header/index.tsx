import { StyledDiv } from "./header.styles";

const Header = () => {
  return (
    <>
      <StyledDiv>
        <div>
          <h4>Plates</h4>
          <hr />
          <p data-testid ='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            purus pulvinar, placerat turpis ac, interdum metus. In eget massa
            sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl,
            sit amet mattis dolor.
          </p>
          </div>
      </StyledDiv>
    </>
  );
};

export default Header;
