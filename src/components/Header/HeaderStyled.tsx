import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  width: 70vw;
  align-items: center;
  font-size: 1.4em;
  text-align: center;
  letter-spacing: 0.2em;
  padding: 0.4em;
  cursor: pointer;
  position: absolute;
  z-index: 4;
  color: var(--red);
  background-color: var(--bg-primary);

  .top__nav {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 70vw;
    padding: 0.4em;
  }
`;

export default HeaderStyled;
