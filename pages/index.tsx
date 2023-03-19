import { useDisclosure } from "@mantine/hooks";
import React, { useCallback, useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/FirebaseServices";
import { Modal, Input, Checkbox, ActionIcon } from "@mantine/core";
import TableData from "@/components/TableData";
import { createStudent, IStudentData } from "@/services/studentServices";
import ActivityIndicator from "@/components/ActivityIndicator";
import { IStudentReturn } from "@/types";
import { Filler } from "@/components/Filler";


const NOTES = ['You are a graduate', 'You were a beneficiary of the Adamus Scholarship Program']

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false)
  const [studentLoading, setStudentLoading] = useState(false)

  const [studentsList, setStudentsList] = useState<any[]>([])
  const [refreshData, setRefreshData] = useState(false)

  // Call this function whenever you need to refresh the data
const handleRefreshData = () => {
  setRefreshData((prev) => !prev);
};


  const [studentData, setStudentData] = useState({
    name: "",
    course: "",
    honors: "",
    activePhone: "",
    yearCompleted: "",
    schoolAttended: ""
  })

  const getStudentsList = useCallback( async() => {
    setStudentLoading(true)
      const querySnapshot = await getDocs(collection(db, "students"));
      const studentData : any[] = []
      querySnapshot.forEach((doc) => {
            studentData.push({
              slug: doc.id,
              ...doc.data()
            })
      });
      setStudentsList(studentData)

      setStudentLoading(false)
        
  }, [])

  
  useEffect(() => {
    (async () => {
     await getStudentsList();
     setStudentLoading(false)
    })();
  }, [getStudentsList, refreshData])

  const handleStudentCreate = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    
    
    // validate form data and throw error if there is no data
    if(studentData.name.trim().length === 0 ||studentData.course.trim().length === 0 || studentData.honors.trim().length === 0 || studentData.activePhone.trim().length === 0 || studentData.schoolAttended.trim().length === 0 || studentData.yearCompleted.trim().length === 0){
      window.alert('All fields are required')
    } else {
     setLoading(true)

     try {
       await createStudent({...studentData})
       setLoading(false)
       close()
       handleRefreshData()
     } catch (error) {
      close()
      setLoading(false)
      console.log(error)
      window.alert('Error creating student try again later')
     }
    }
  }

  return (
    <div className="py-4">
      <div className="flex items-center justify-between pb-8 border-b border-gray-400 w-full mb-4 phone:flex-col phone:items-start">
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

      {
        studentLoading && <ActivityIndicator />
      }

      {
        studentsList.length === 0 && !studentLoading  && <Filler onClick={open} subTitle="There are no beneficiaries in this repository" buttonTitle="Add your name"/>
      }

     {studentsList.length !== 0 &&  <TableData data={studentsList as IStudentReturn[]}/>}

      <div className="mt-8 border-t pt-4 border-gray-400">
        <h2 className="font-bold text-lg mb-2">Please take note of the following before adding your data</h2>

        {
          NOTES.map((note) => (
            <div key={note} className="flex items-center space-x-4">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

                <p>{note}</p>
            </div>
          ))
        }
      </div>




      <Modal
        opened={opened}
        onClose={close}
        title="Add Your Name to the Repository"
      >
        <form className="flex items-start flex-col space-y-2 w-full" onSubmit={(e) => handleStudentCreate(e)}>
          <div className="w-full">
            <label htmlFor="name" className="mb-2 block">
              Name
            </label>
            <Input title="name" aria-label="name" placeholder="Eric Kwaw" onChange={(e) => setStudentData((prev) => ({
              ...prev,
              name: e.target.value
            }))}/>
          </div>
          <div className="w-full">
            <label htmlFor="course" className="mb-2 block">
              Course
            </label>
            <Input
              title="course"
              aria-label="course"
              placeholder="BA Political Science Studies"
              onChange={(e) => setStudentData((prev) => ({
                ...prev,
                course: e.target.value
              }))}
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
              onChange={(e) => setStudentData((prev) => ({
                ...prev,
                honors: e.target.value
              }))}
            />
          </div>
          <div className="w-full">
            <label htmlFor="phone" className="mb-2 block">
              Active Phone
            </label>
            <Input title="phone" aria-label="phone" placeholder="0249884952"
            onChange={(e) => setStudentData((prev) => ({
              ...prev,
              activePhone: e.target.value
            }))}
             />
          </div>
          <div className="w-full">
            <label htmlFor="completed" className="mb-2 block">
              Year Completed
            </label>
            <Input
              title="completed"
              aria-label="completed"
              placeholder="2012"
              onChange={(e) => setStudentData((prev) => ({
                ...prev,
                yearCompleted: e.target.value
              }))}
            />
          </div>
          <div className="w-full">
            <label htmlFor="school" className="mb-2 block">
              School Attended
            </label>
            <Input
              title="school"
              aria-label="school"
              placeholder="Kwame Nkrumah University of Science and Technology"
              onChange={(e) => setStudentData((prev) => ({
                ...prev,
                schoolAttended: e.target.value
              }))}
            />
          </div>

          <div>
            <Checkbox label="I agree that my data is accurate" checked readOnly/>
          </div>

          <button className="bg-indigo-500 flex items-center justify-center px-4 py-2 text-white rounded-md w-full" type="submit">
            {loading ? <ActivityIndicator /> : "Add Your Name"}
          </button>
        </form>
      </Modal>
    </div>
  );
}
