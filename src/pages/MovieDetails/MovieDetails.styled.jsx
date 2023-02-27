import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 16px;
  border: 1px solid white;
  background-color: black;
  border-radius: 4px;
  text-decoration: none;
  color: orangered;
  font-weight: 500;

  transition: all 200ms ease-in-out;
  cursor: pointer;
  :hover,
  :focus {
    color: white;
    background-color: orangered;
  }
`;

export const Container = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 10px;
`;

export const AddInfo = styled(NavLink)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 16px;
  border: 1px solid white;
  background-color: black;
  border-radius: 4px;
  text-decoration: none;
  color: orangered;
  font-weight: 500;

  transition: all 200ms ease-in-out;
  cursor: pointer;
  :hover,
  :focus {
    color: white;
    background-color: orangered;
  }
`;
