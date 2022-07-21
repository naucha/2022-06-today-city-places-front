import { useEffect } from "react";
import { useAppSelector } from "../../redux/store/hooks";
import { useNavigate } from "react-router-dom";

const UnloggedRoute = ({ children }: { children: JSX.Element }) => {
  const { logged } = useAppSelector((state) => state.user);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate("/");
    }
  }, [logged, navigate]);

  if (!logged && token != null) {
    return <>"Loading"</>;
  }
  if (!logged && token == null) {
    return children;
  }
  return null;
};

export default UnloggedRoute;
