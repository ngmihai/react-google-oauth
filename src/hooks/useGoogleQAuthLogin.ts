import { useEffect, useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import getGoogleUserProfile from "@/api/getGoogleUserProfile";
import { GoogleQAuthUser, GoogleUserProfile } from "@/types/googleQAuthTypes";
import { AxiosError } from "axios";
import useLocalStorage from "./useLocalStorage";

const useGoogleQAuthLogin = () => {
  const [savedLoginData, setSavedLoginData] =
    useLocalStorage<GoogleQAuthUser | null>("loginData", null);
  const [user, setUser] = useState<GoogleQAuthUser | null>(
    () => savedLoginData
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<GoogleUserProfile | null>(null);
  const [error, setError] = useState<string>();

  const login = useGoogleLogin({
    onSuccess: (response) => setUser(response),
    onError: (error) =>
      setError(`Login Failed: ${error?.error_description || ""}`),
    onNonOAuthError: (nonOAuthError) => {
      console.log(nonOAuthError);
      setLoading(false);
    },
  });

  const logOut = () => {
    googleLogout();
    setUser(null);
    setProfile(null);
  };

  const getUserProfile = async (userAccesToken: string) => {
    try {
      const { data } = await getGoogleUserProfile(userAccesToken);
      setProfile(data);
    } catch (error) {
      setError(
        `Login Request Failed: ${(error as Error | AxiosError).message}`
      );
    }

    setLoading(false);
  };

  const handleLogin = () => {
    if (user) {
      return;
    }

    setLoading(true);
    login();
  };

  const handleLogout = () => {
    if (!user) {
      return;
    }

    setSavedLoginData(null);
    logOut();
  };

  useEffect(() => {
    if (user) {
      setLoading(true);
      setSavedLoginData(user);
      getUserProfile(user.access_token);
    }
  }, [user]);

  return {
    login: handleLogin,
    logOut: handleLogout,
    profile,
    loading,
    error,
    isLoggedIn: !!user && !!profile,
  };
};

export default useGoogleQAuthLogin;
