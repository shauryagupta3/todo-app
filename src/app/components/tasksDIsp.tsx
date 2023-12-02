"use client";
import { useEffect, useState } from "react";
import DeleteButton from "../components/deleteButton";
import { getData} from "@/app/components/server";

interface quote {
  quote: String;
  character: String;
  anime: string;
}
interface task {
  id: number;
  name: string;
  deadline: string;
  done: boolean;
  type: string;
}

export default function TaskDisplay(props: { id: string }) {
  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState<task[]>([]);
  var task_to_display:task[] = []
  useEffect(() => {
    console.log(props.id);
    setShowTask(true);
    async function getDataforDisplay() {
      const new_data1 = await getData();
      if (props.id == "habit") {
        var new_data: task[] = new_data1.habit;
        if (new_data.length == 0) return null;
        task_to_display = new_data
      } else {
        var new_data: task[] = new_data1.task;
        if (new_data.length == 0) return null;
        task_to_display = new_data?.filter(
          (task) =>task.deadline === props.id && task.done === false
        )
      }
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
        <div className="flex w-full justify-between" key={e.id}>
          <label htmlFor="">
            {e.name} {e.id}
          </label>
          <div>
            <DeleteButton id={e.id} />
            <input type="checkbox" name={e.name} id="" />
          </div>
        </div>
      ))}
    </>
  );
}
