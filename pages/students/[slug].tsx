import { useRouter } from "next/router"
import { useCallback, useState, useEffect } from "react";
import { getDoc, doc, collection } from "firebase/firestore";
import { db } from "@/FirebaseServices";
import { IStudentData } from "@/services/studentServices";


export default function SingleStudentPage(){
  const [studentsList, setStudentsList] = useState<IStudentData>()
  const [notfound, setNotFound] = useState(false)
  const router = useRouter()
  const slug = router.query?.slug as string




    const getStudentsList = useCallback( async() => {
        const docRef = doc(db, "students", router.query?.slug as string);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            console.log('documentData', docSnap.data())
            setStudentsList(docSnap.data() as IStudentData)
        } else {
            setNotFound(true)
        }
    }, [router.query?.slug])
  
    
    useEffect(() => {
      (async () => {
       await getStudentsList();
      })();
    }, [getStudentsList])

    
    function formatName(name:string) {
        if(name){
        const parts = name.split('-');
        const firstName = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
        const lastName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
        return `${firstName} ${lastName}`;
        }
    }

    return (
        <div className="py-4">
            
            <h2 className="pb-8 border-b border-gray-400 font-bold text-lg mb-4">{`${formatName(slug && slug)}'s`} Details</h2>
            {!studentsList && notfound && <h2>Beneficiary is not in the repository</h2>}

            {studentsList && !notfound &&  <ul className="flex items-start flex-col space-y-2">
                    <li className="flex items-center space-x-4">
                        <span className="font-bold">Name:</span>
                        <span>{studentsList?.name}</span>
                    </li>
                    <li className="flex items-center space-x-4">
                        <span className="font-bold">Phone:</span>
                        <span>{studentsList?.activePhone}</span>
                    </li>
                    <li className="flex items-center space-x-4">
                        <span className="font-bold">Program of Study:</span>
                        <span>{studentsList?.course}</span>
                    </li>
                    
                    <li className="flex items-center space-x-4">
                        <span className="font-bold">Honors:</span>
                        <span>{studentsList?.honors}</span>
                    </li>
                    <li className="flex items-center space-x-4">
                        <span className="font-bold">Year Completed:</span>
                        <span>{studentsList?.yearCompleted}</span>
                    </li>
                    
                </ul>

                }
            <button className="bg-indigo-500 flex items-center justify-center px-4 py-2 text-white rounded-md mt-4" onClick={() => router.push('/')}>
            Go Back Home
          </button>
            
        </div>
    )
}

  