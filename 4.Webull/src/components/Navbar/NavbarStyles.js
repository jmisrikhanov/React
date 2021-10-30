import Img from "../../assets/logo.svg";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  z-index: 20;
  background: #fff;
`;

export const NavbarWrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 128px;
  height: 22px;
  background: url(${Img}) 0 45% no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
`;

export const Nav = styled.nav`
  flex: 1;
  position: relative;
  padding: 50px;
`;

export const NavLink = styled(Link)`
  color: #000;
  padding: 0 15px;
  font-size: 16px;
  line-height: 80px;
  font-weight: 700;
  text-decoration: none;
`;

export const Search = styled.div`
  right: 235px;
  position: absolute;
`;

export const SearchWrap = styled.div`
  width: 220px;
  height: 36px;
  position: relative;
  box-sizing: border-box;
  background: rgb(179, 191, 201, 0.15);
  line-height: 33px;
  padding-left: 37px;
  border-radius: 19px;
`;

export const Input = styled.input`
  color: #000;
  width: 196px;
  border: transparent;
  font-size: 12px;
  background: transparent;
  outline: none;

  &::placeholder {
    color: #d1d8de;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.div`
  width: 110px;
  color: #fff;
  cursor: pointer;
  height: 36px;
  font-size: 16px;
  box-sizing: border-box;
  background: #007cff;
  text-align: center;
  line-height: 36px;
  border-radius: 21px;
`;
