import { Table } from "@mantine/core";


import Link from "next/link";
import { IStudentReturn } from "@/types";

export default function TableData({data} : {data:IStudentReturn[]}) {
  const elements = data;
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td className="phone:hidden">{element.yearCompleted}</td>
      <td className="phone:hidden">{element.activePhone}</td>
      <td className="phone:hidden">{element.honors}</td>
      <td>
        <Link href={`/students/${element.slug}`} className="text-indigo-500 underline">View</Link>
      </td>
    </tr>
  ));




  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th className="phone:hidden">Completed</th>
          <th className="phone:hidden">Phone</th>
          <th className="phone:hidden">Honor</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
