import React from "react";
import Image from "next/image";
import Link from "next/link";

const Profile = ({ heading, text }) => {
  return (
    <header id="profileMain">
      <div className="profile_content flex gap-4 justify-center">
        <div className="relative">
          <Image src="/codding.jpg" alt="Profile" width={200} height={100} />
        </div>
        <Link href="/analysis" passHref>
          <a>
            <div className="main_content mt-5">
              <h3 className="font-bold text-indigo-700 hover:text-purple-800">
                {heading}
              </h3>
              <p>{text}</p>
            </div>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Profile;
