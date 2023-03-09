import useGoogleQAuthLogin from "@/hooks/useGoogleQAuthLogin";
import { ReactComponent as GoogleIcon } from "@/assets/google-icon.svg";
import Button from "../Button";
import Card from "../Card";
import GoogleQAuthUserProfile from "./GoogleQAuthUserProfile";

const GoogleQAuthLogin = () => {
  const { login, logOut, profile, loading, error, isLoggedIn } =
    useGoogleQAuthLogin();

  const getTitle = () => {
    if (loading) {
      return "Loading...";
    }

    return !isLoggedIn
      ? "Log in to your account"
      : `Hi, ${profile?.given_name}`;
  };

  return (
    <>
      {error && (
        <Card className="bg-red-300">
          <h1 className="text-red-600 font-semibold text-lg">{error}</h1>
        </Card>
      )}
      <Card>
        <h1 className="text-3xl font-medium mb-2 text-center">{getTitle()}</h1>
        {isLoggedIn && (
          <>
            {profile && (
              <GoogleQAuthUserProfile profile={profile} className="mb-2" />
            )}
            <Button onClick={logOut}>Log out</Button>
          </>
        )}
        {!isLoggedIn && !loading && (
          <Button
            onClick={() => login()}
            icon={<GoogleIcon className="h-6 w-6" />}
          >
            Sign in with Google
          </Button>
        )}
      </Card>
    </>
  );
};

export default GoogleQAuthLogin;
