import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import db from "@/db";
import type { todos } from "@prisma/client";

export default async function TodosList() {
  const todos = await db.todos.findMany();

  return (
    <Table>
      <TableCaption>A list of todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Completed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo:todos) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.name}</TableCell>
            <TableCell>{todo.completed ? 'Yes' : 'No'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total todos</TableCell>
          <TableCell className="text-right">{todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
