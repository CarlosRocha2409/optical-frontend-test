import { useMutation } from "react-query";
import { toast } from "react-toastify";
import postLogin from "../api/postLogin";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();
  const { data, mutate, isLoading } = useMutation(postLogin, {
    onSuccess: (data) => {
      toast.success("Successfully logged in");
      localStorage.setItem("token", data.jwt);
      localStorage.setItem("userId", (jwtDecode(data.jwt) as any).id);
      navigate("/dashboard");
    },
  });
  return {
    data,
    mutate,
    isLoading,
  };
}