import { AddToTask } from "../components/addtotask";
import DeleteButton from "../components/deleteButton";
import DispQuote from "../components/quote";
import { getQuote, getData, deleteTask } from "@/app/components/server";
import TaskDisplay from "../components/tasksDIsp";

interface quote {
  quote: String;
  character: String;
  anime: string;
}
interface task {
  id: string;
  name: string;
  deadline: string;
  done: boolean;
  type: string;
}

export default async function Page() {
  const new_data1 = await getData();
  const new_data: task[] = new_data1.task;
  const task_to_display = new_data?.filter(
    (task) =>
      task.deadline === "tod" && task.done === false && task.type === "task"
  );

  const quote = await getQuote();

  return (
    <div className="container flex flex-col h-full justify-between">
      <div>
        <title>Today</title>
        <AddToTask />
        <TaskDisplay id="habit" />
      </div>
      <div>
        <DispQuote />
      </div>
    </div>
  );
}
