"use client";
import React, { useEffect, useState } from "react";
import { deleteTask } from "./server";

export default function DeleteButton(props: any) {
  console.log(props.id);
  const [delTask, setDelete] = useState(false);

  useEffect(() => {
    async function handleClick() {
      // e.preventDefault();
      const res = await deleteTask(props.id);
      console.log(res);
      window.location.reload()
    }

    if (delTask) handleClick();
  }, [delTask]);

  return (
    <button
      onClick={() => setDelete(!delTask)}
      id={props.id}
      className="mr-4"
      type="button"
    >
      delete
    </button>
  );
}
