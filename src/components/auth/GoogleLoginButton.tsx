"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

import { googleLogin } from "@/lib/auth";

export default function GoogleLoginButton() {
  const router = useRouter();

  const handleGoogleSuccess = async (
    credentialResponse: any
  ) => {
    try {
      const credential =
        credentialResponse.credential;

      const data = await googleLogin(
        credential
      );

      if (!data.token) {
        alert("Google login failed");
        return;
      }

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "role",
        data.role
      );

      localStorage.setItem(
        "username",
        data.username
      );

      switch (data.role) {
        case "admin":
          router.push("/dashboard");
          break;

        case "employee":
          router.push(
            "/employee/dashboard"
          );
          break;

        case "customer":
          router.push(
            "/customer/detailsPage"
          );
          break;

        default:
          router.push("/");
      }

    } catch (error) {
      console.error(error);
      alert("Google login failed");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleGoogleSuccess}
      onError={() => {
        console.log(
          "Google Login Failed"
        );
      }}
    />
  );
}