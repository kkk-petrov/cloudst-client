import { useAuthStore } from "@/store/store";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../UI/Loader/Loader";

interface Props {
  children: ReactNode
}

export const Protected = ({ children }: Props) => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore(state => !!state.token);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : <Loader />;
};

