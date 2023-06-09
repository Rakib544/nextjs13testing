import Link from "next/link";
import TestInput from "./component/input";

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await response.json();
  return (
    <main>
      <h1>Welcome Rakib to Nextjs 13.4 World</h1>
      <Link
        href="/about"
        className="mx-6 px-6 py-3 bg-gray-50 rounded-lg inline-block my-12 border"
      >
        Go to About Page
      </Link>
      <TestInput />
      {result.map((data: any) => (
        <div key={data.id} className="border my-12 px-6 mx-6 py-4 bg-gray-50">
          {data.title}
        </div>
      ))}
    </main>
  );
}
