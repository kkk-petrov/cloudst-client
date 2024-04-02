import { useAuthStore } from "@/store/auth.store";
import { type ReactNode, Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../UI/Loader/Loader";

interface Props {
  children: ReactNode;
}

export const Protected = ({ children }: Props) => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore(s => s.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/auth");
    }
  }, []);

  return isAuthenticated() ? (
    <Suspense fallback={<Loader />}>{children}</Suspense>
  ) : (
    <Loader />
  );
};
