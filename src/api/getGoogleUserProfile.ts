import axios, { AxiosResponse } from "axios";
import { GoogleUserProfile } from "@/types/googleQAuthTypes";

const getGoogleUserProfile = async (
  userAccessToken: string
): Promise<AxiosResponse<GoogleUserProfile>> => {
  return axios.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userAccessToken}`,
    {
      headers: {
        Authorization: `Bearer ${userAccessToken}`,
        Accept: "application/json",
      },
    }
  );
};

export default getGoogleUserProfile;
