"use client";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <>
      <button
        onClick={() => signOut()}
        className="bg-gray-300 py-2 ml-2 px-4 rounded-md items-center"
      >
        Logout <FontAwesomeIcon  className="ml-1"icon={faArrowRightFromBracket} />
      </button>
    </>
  );
}
