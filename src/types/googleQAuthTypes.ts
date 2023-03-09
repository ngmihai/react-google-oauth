import { TokenResponse } from "@react-oauth/google";

export type GoogleQAuthUser = Omit<
  TokenResponse,
  "error" | "error_description" | "error_uri"
>;

export type GoogleUserProfile = {
  email: string;
  famility_name: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
};
