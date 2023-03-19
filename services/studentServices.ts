// this is where i will carry out all logic relating to firebase
import { doc, collection, getDocs, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/FirebaseServices";

export interface IStudentData {
    name: string;
    course: string;
    honors: string;
    activePhone: string;
    yearCompleted: string;
    schoolAttended: string;
}

export async function createStudent({activePhone, course,honors,name, schoolAttended,yearCompleted} : IStudentData){
    return setDoc(doc (db, "students", slug(name)), {
        name,
        honors,
        schoolAttended,
        activePhone,
        course,
        yearCompleted,
    })
}


export async function getStudent(slug:string){
    return getDoc(doc(db, "students", slug))
}

function slug(name:string){
    return `${name.replace(/\s+/g, "-").toLowerCase()}`
}

export async function getAllStudents(){
  const querySnapshot = await getDocs(collection(db, "students"));
  querySnapshot.forEach((doc) => {
        const studentData = []
        studentData.push(doc.data())
    return studentData
  });
}