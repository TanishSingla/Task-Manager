'use client'
import { FormEvent } from "react";

export function NewColumnForm() {
  function handleNewColumn(e:FormEvent) {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).querySelector('input');
    const columnName = input?.value;
    alert('Column '+ columnName);
  }

  return (
    <>
      <form onSubmit={handleNewColumn} action="" className="max-w-xs">
        <label className="block">
          <span className="text-gray-600 block">Column name:</span>
          <input type="text" placeholder="Enter new column name" />
        </label>
        <button type="submit" className="block w-full mt-2">
          Create Column
        </button>
      </form>
    </>
  );
}
