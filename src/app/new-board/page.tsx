"use client";

import { redirect } from "next/navigation";
import { createBoard } from "../actions/boardAction";

export default function NewBoardPage() {
  async function handleNewBoard(formData: FormData) {
    const boardName = formData.get("name")?.toString() || "";
    const { id } = await createBoard(boardName);
    console.log(id);
    redirect(`/boards/${id}`);
  }
  return (
    <>
      <div>
        <form action={handleNewBoard} className="max-w-xs block ">
          <h1 className="text-xl mb-2"> Create New Board</h1>
          <input type="text" name="name" placeholder="Board Name here" />
          <button type="submit" className="mt-2 w-full">
            Create Board
          </button>
        </form>
      </div>
    </>
  );
}
