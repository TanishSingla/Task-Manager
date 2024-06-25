"use client";
import { useState } from "react";
import Columns from "./forms/Column";
import { NewColumnForm } from "./forms/NewColumnForm";

const defaultColumns = [
  { id: "FIRST", name: "T1", index: 0 },
  { id: "SECOND", name: "T2", index: 1 },
  { id: "THIRD", name: "T3", index: 2 },
];

export type CardType = {
  name: string;
  id: string | number;
  index: number;
  columnId: string;
};

const defaultCards = [
  { id: "Abc", name: "task 1", index: 0, columnId: "FIRST" },
  { id: "Abcd", name: "task 5", index: 1, columnId: "FIRST" },
  { id: "def", name: "task 2", index: 1, columnId: "SECOND" },
  { id: "Ghi", name: "task 3", index: 2, columnId: "THIRD" },
];

export default function Board() {
  const [cards, setCards] = useState(defaultCards);
  const [cols, setCols] = useState(defaultColumns);
  return (
    <div className="flex gap-4">
      {defaultColumns.map((col) => (
        <Columns
          key={col.id}
          {...col}
          setCards={setCards}
          cards={cards
            .sort((a, b) => a.index - b.index)
            .filter((c) => c.columnId == col.id)}
        />
      ))}
      <NewColumnForm />
    </div>
  );
}
