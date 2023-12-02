"use client";

import React, { useEffect, useState } from "react";
import { postTask } from "./server";
export function AddToTask() {
  
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("tod");
  const [task, setTask] = useState("task");
  const handleAddTasks = async (e: any) => {

    e.preventDefault();
    console.log(name);
    console.log(deadline);
    console.log(task);
    const newtask = {
      name: name,
      deadline: deadline,
      done: false,
      type: task,
    };
    const response = await postTask(newtask);
    console.log(response);
    const timestamp = new Date().getTime();
    window.location.href = `${window.location.href}?timestamp=${timestamp}`;
  };
  useEffect(() => {
    show
      ? document.getElementById("dropdown-form")?.classList.add("show")
      : document.getElementById("dropdown-form")?.classList.remove("show");
  }, [show]);

  return (
    <>
      <div className="w-full box-border bg-white text-black rounded-xl py-2">
        <button
          onClick={() => {
            setShow(!show);
          }}
          className="w-full"
        >
          add task
        </button>
      </div>
      <form
        id="dropdown-form"
        className="box-border py-4 bg-stone-900 hidden flex-col items-center rounded-xl"
      >
        <input
          type="text"
          placeholder="add task"
          className="bg-transparent border-solid border-white border-b w-5/6"
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <fieldset className="flex w-full justify-between">
          <label>Deadline :</label>
          <div className="flex w-2/3 lg:w-1/6 justify-around">
            <div>
              <input
                type="radio"
                name="deadline"
                value="tod"
                onChange={(e) => setDeadline(e.target.value)}
                defaultChecked
              />
              <label htmlFor="">today</label>
            </div>
            <div>
              <input
                type="radio"
                value="tom"
                onChange={(e) => setDeadline(e.target.value)}
                name="deadline"
              />
              <label htmlFor="">Tomorrow</label>
            </div>
          </div>
        </fieldset>
        <fieldset className="flex w-full justify-between">
          <label>Type :</label>
          <div className="flex w-2/3 lg:w-1/6 justify-around">
            <div>
              <input
                type="radio"
                value="task"
                name="Type"
                onChange={(e) => setTask(e.target.value)}
                defaultChecked
              />
              <label htmlFor="">Task</label>
            </div>
            <div>
              <input
                type="radio"
                value="habit"
                onChange={(e) => setTask(e.target.value)}
                name="Type"
              />
              <label htmlFor="">Habit</label>
            </div>
          </div>
        </fieldset>
        <button
          type="submit"
          className="py-1 w-1/2 box-border bg-white text-black rounded-xl"
          onClick={handleAddTasks}
        >
          Add
        </button>
      </form>
    </>
  );
}
