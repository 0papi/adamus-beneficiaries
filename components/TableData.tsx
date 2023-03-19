import { Table } from "@mantine/core";
import data from "../fake.json";
import { getAllStudents } from "@/services/studentServices";
import { useEffect } from "react";

export default function TableData() {
  const elements = data.data;
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.completed}</td>
      <td>{element.activePhone}</td>
      <td>{element.honor}</td>
    </tr>
  ));




  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Completed</th>
          <th>Active Phone</th>
          <th>Honor</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
