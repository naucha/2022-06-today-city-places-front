import { useNavigate } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { useAppDispatch } from "../../redux/store/hooks";
import { NavlinkStyled } from "../../styles/NavlinkStyled";
import Button from "../Button/ButtonStyled";

import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const logout = () => {
    if (token) {
      localStorage.clear();
    }
    dispatch(logoutActionCreator());

    navigate("/login");
  };

  return (
    <HeaderStyled>
      <div>
        <h1>TODAY CITY PLACES</h1>
        {token ? <Button onClick={logout}>Logout</Button> : ""}
      </div>
      {token ? (
        <nav className="top__nav">
          <NavlinkStyled to={"/home"}>Home</NavlinkStyled>
          <NavlinkStyled to={"/home"}>About</NavlinkStyled>
        </nav>
      ) : (
        ""
      )}
    </HeaderStyled>
  );
};

export default Header;
