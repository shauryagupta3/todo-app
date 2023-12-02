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
  return (
    <div className="container flex flex-col h-full justify-between">
      <div>
        <title>Today</title>
        <AddToTask />
        <TaskDisplay id="tom" />
      </div>
      <div>
        <DispQuote />
      </div>
    </div>
  );
}
