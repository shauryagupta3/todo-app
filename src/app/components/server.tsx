interface data {
  task: [];
  habit: [];
}

interface quote {
  quote: String;
  character: String;
  anime: string;
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function getData() {
  const response = await fetch("http://localhost:3001/api/tasks");
  const data = await response.json();
  console.log(data.tasks);
  return data as data;
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
