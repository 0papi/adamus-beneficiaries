import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { Modal, Input, Checkbox } from "@mantine/core";
import TableData from "@/components/TableData";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);

  // const [studentData, setStudentData] = useState({})

  return (
    <div className="py-4">
      <div className="flex items-center justify-between pb-8 border-b border-gray-400 w-full mb-4">
        <h2 className="text-lg font-bold py-2">
          List of beneficiaries of the Adamus Scholarship
        </h2>

        <button
          className="bg-indigo-500 px-4 py-2 text-white rounded-md"
          onClick={open}
        >
          Add Your Name
        </button>
      </div>

      <TableData />

      <Modal
        opened={opened}
        onClose={close}
        title="Add Your Name to the Repository"
      >
        <form className="flex items-start flex-col space-y-2 w-full">
          <div className="w-full">
            <label htmlFor="name" className="mb-2 block">
              Name
            </label>
            <Input title="name" aria-label="name" placeholder="Eric Kwaw" />
          </div>
          <div className="w-full">
            <label htmlFor="course" className="mb-2 block">
              Course
            </label>
            <Input
              title="course"
              aria-label="course"
              placeholder="BA Political Science Studies"
            />
          </div>
          <div className="w-full">
            <label htmlFor="honors" className="mb-2 block">
              Honors
            </label>
            <Input
              title="honors"
              aria-label="honors"
              placeholder="first class honors"
            />
          </div>
          <div className="w-full">
            <label htmlFor="phone" className="mb-2 block">
              Active Phone
            </label>
            <Input title="phone" aria-label="phone" placeholder="0249884952" />
          </div>
          <div className="w-full">
            <label htmlFor="completed" className="mb-2 block">
              Year Completed
            </label>
            <Input
              title="completed"
              aria-label="completed"
              placeholder="0249884952"
            />
          </div>
          <div className="w-full">
            <label htmlFor="school" className="mb-2 block">
              School
            </label>
            <Input
              title="school"
              aria-label="school"
              placeholder="0249884952"
            />
          </div>

          <div>
            <Checkbox label="I agree that my data is accurate" checked />
          </div>

          <button className="bg-indigo-500 px-4 py-2 text-white rounded-md w-full">
            Add My Name
          </button>
        </form>
      </Modal>
    </div>
  );
}
