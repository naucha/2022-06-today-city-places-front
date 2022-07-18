import { useEffect } from "react";
import { useAppSelector } from "../../redux/store/hooks";
import { useNavigate } from "react-router-dom";

const AntiGateKeeper = ({ children }: { children: JSX.Element }) => {
  const { logged } = useAppSelector((state) => state.user);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (logged || token) {
      navigate("/");
    }
  }, [logged, navigate, token]);

  if (!logged || !token) {
    return children;
  }
  return null;
};

export default AntiGateKeeper;
