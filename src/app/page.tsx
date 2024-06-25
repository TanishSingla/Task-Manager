import { getServerSession } from "next-auth";
import Board from "./components/Board";
import { NewColumnForm } from "./components/forms/NewColumnForm";
import { authOptions } from "@/lib/authOptions";
import Login from "./components/views/Login";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Boards from "./components/Boards";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <Login />;
  }
  return (
    <div>
      <h1 className="text-4xl">Your Boards</h1>
      <Boards />
      <div className="pt-4 mb-4">
        <Link className="primary btn inline-flex gap-2" href={"/new-board"}>
          Create New Board{" "}
          <FontAwesomeIcon className="h-6" icon={faArrowRight} />
        </Link>
      </div>
      {/* <Board /> */}
    </div>
  );
}
