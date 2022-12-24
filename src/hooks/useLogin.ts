import { useMutation } from "react-query";
import { toast } from "react-toastify";
import postLogin from "../api/postLogin";
import jwtDecode from "jwt-decode";

export default function useLogin() {
  const { data, mutate, isLoading } = useMutation(postLogin, {
    onSuccess: (data) => {
      toast.success("Successfully logged In");
      localStorage.setItem("token", data.jwt);
      localStorage.setItem("userId", (jwtDecode(data.jwt) as any).id);
      window.location.href = "/dashboard";
    },
  });
  return {
    data,
    mutate,
    isLoading,
  };
}
