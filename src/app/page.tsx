import TodosList from "@/components/todos-list";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<div>Loading...</div>}>
        <TodosList />
      </Suspense>
    </main>
  );
}
