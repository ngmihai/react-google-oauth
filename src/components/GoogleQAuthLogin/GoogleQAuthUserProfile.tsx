import clsx from "clsx";
import { GoogleUserProfile } from "@/types/googleQAuthTypes";

type GoogleQAuthUserProfileProps = {
  profile: GoogleUserProfile;
  className?: string;
};

const GoogleQAuthUserProfile = ({
  profile,
  className,
}: GoogleQAuthUserProfileProps) => {
  return (
    <div className={clsx("flex flex-col", className)}>
      <img
        src={profile.picture}
        alt="User image"
        referrerPolicy="no-referrer"
        className="self-center w-[96px] h-[96px] mb-2"
      />
      <p>
        Name: <span className="font-semibold">{profile.name}</span>
      </p>
      <p>
        Email Address: <span className="font-semibold">{profile.email} </span>
      </p>
      <p>
        Email verified:
        <span className="font-semibold">
          {profile.verified_email ? "Yes" : "No"}
        </span>
      </p>
    </div>
  );
};

export default GoogleQAuthUserProfile;
