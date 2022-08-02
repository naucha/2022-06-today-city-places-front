import styled from "styled-components";

interface Props {
  text?: string;
  color?: string;
}

const HeadingSectionStyled = styled.h2<Props>`
  color: var(--red);
  font-size: 1.4em;
  letter-spacing: 2px;
  color: var(--fc-secondary);
`;

const HeadingSection = (props: any) => {
  return <HeadingSectionStyled>{props.name}</HeadingSectionStyled>;
};

export default HeadingSection;
