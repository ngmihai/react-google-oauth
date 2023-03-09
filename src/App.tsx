import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleQAuthLogin from "@/components/GoogleQAuthLogin";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
      <GoogleQAuthLogin />
    </GoogleOAuthProvider>
  );
};

export default App;
