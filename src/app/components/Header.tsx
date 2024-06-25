import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <header className="bg-gray-200 p-4 px-8">
        <div className="flex justify-between items-center">
          <a href="Logo" className="Logo">
            Task.M
          </a>

          <div>
            {session && (
              <>
                Hello {session.user?.name}
                <LogoutButton />
              </>
            )}
            {!session && (
              <>
                <LoginButton />
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
