import { signIn } from "next-auth/react";

export const login = async (username: string, password: string) => {
    try {
      signIn("credentials", { username, password });
      return { message: "Login success", type: "success" };
    } catch (e) {
      console.log(e);
      return { message: "Invalid Credentials", type: "error" };
    }
  };