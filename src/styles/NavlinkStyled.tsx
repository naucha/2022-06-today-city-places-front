import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavlinkStyled = styled(NavLink)`
  font-size: 1em;
  font-weight: 600;
  text-decoration: none;
  color: var(--fc-primary);

  &:hover {
    color: var(--blue);
  }
`;
