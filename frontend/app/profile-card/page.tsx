import type { Metadata } from "next";
import profileThumbnail from "../../public/profile-thumbnail.png";
import ProfileCard from "../_components/profile-card";
import IconButton from "../_components/icon-button";
import {
  RiTwitterXFill,
  RiInstagramFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";

export const metadata: Metadata = {
  title: "Profile Card | UI Component Library | Jason Long",
};

export default function ProfileCardPage() {
  return (
    <div className="flex flex-1 justify-center items-start py-[200px] px-4 bg-gradient-haze">
      <ProfileCard
        blurb="I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer."
        contactHref="/"
        imageAlt="Headshot of Sarah Dole"
        imageSrc={profileThumbnail}
        name="Sarah Dole"
        role="Front End Engineer @ Microsoft"
      >
        <div className="flex flex-row justify-center gap-x-4">
          <IconButton
            Icon={RiGithubFill}
            href="/"
            classes="icon--btn--md icon--btn--tertiary"
          />
          <IconButton
            Icon={RiLinkedinBoxFill}
            href="/"
            classes="icon--btn--md icon--btn--tertiary"
          />
          <IconButton
            Icon={RiInstagramFill}
            href="/"
            classes="icon--btn--md icon--btn--tertiary"
          />
          <IconButton
            Icon={RiTwitterXFill}
            href="/"
            classes="icon--btn--md icon--btn--tertiary"
          />
        </div>
      </ProfileCard>
    </div>
  );
}
