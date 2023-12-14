interface quote {
  quote: String;
  character: String;
  anime: string;
}

interface task {
  _id: number;
  name: string;
  deadline: string;
}

export async function getData() {
  const response = await fetch(
    "http://localhost:3001/api/tasks/6571a3b05caf7cfc92230637"
  );
  const data = await response.json();
  return data as task[];
}

export async function postTask(obj: {}) {
  const res = await fetch("http://localhost:3001/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then((res) => res.text());
  return res;
}

export async function deleteTask(id: number) {
  const res = await fetch(`http://localhost:3001/api/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.text());
  return res;
}

export async function getQuote() {
  const response = await fetch(`http://localhost:3001/api/quotes/random`);
  const data = await response.json();
  return data as quote | null;
}
