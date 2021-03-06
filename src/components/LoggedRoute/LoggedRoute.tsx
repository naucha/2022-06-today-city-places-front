import { useEffect } from "react";
import { useAppSelector } from "../../redux/store/hooks";
import { useNavigate } from "react-router-dom";

const LoggedRoute = ({ children }: { children: JSX.Element }) => {
  const { logged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
  }, [logged, navigate]);

  if (logged) {
    return children;
  }
  return null;
};

export default LoggedRoute;
