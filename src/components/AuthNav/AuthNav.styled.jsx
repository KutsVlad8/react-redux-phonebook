import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationItem = styled(NavLink)`
  color: white;
  text-decoration: none;

  padding: 5px;
  border-radius: 2px;
  margin-left: 8px;
  &.active {
    // background-color: white;
    color: lightseagreen;
  }
`;
