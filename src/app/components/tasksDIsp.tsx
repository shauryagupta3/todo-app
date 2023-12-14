"use client";
import { useEffect, useState } from "react";
import DeleteButton from "../components/deleteButton";
import { getData } from "@/app/components/server";

interface task {
  _id: number;
  name: string;
  deadline: string;
}

export default function TaskDisplay(props: { id: string }) {
  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState<task[]>([]);
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const TodayDate: string = `${day}-${month}-${year}`;
  const TomDate: string = `${day + 1}-${month}-${year}`;

  useEffect(() => {
    setShowTask(true);
    async function getDataforDisplay() {
      const tasksFromAPI = await getData();
      const task_to_display = tasksFromAPI.filter(
        (e) => e.deadline === TodayDate
      );
      setTasks(task_to_display);
    }
    getDataforDisplay();
  }, []);

  if (!showTask) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {tasks.map((e) => (
        <div className="flex w-full justify-between" key={e._id}>
          <label htmlFor="">
            {e.name} {e._id}
          </label>
          <div>
            <DeleteButton id={e._id} />
            <input type="checkbox" name={e.name} id="" />
          </div>
        </div>
      ))}
    </>
  );
}
