import { useRouter } from "next/router"

export default function SingleStudentPage(){

    const router = useRouter()
    console.log(router.query)
    return (
        <div>
            <h2>Student Data here</h2>
        </div>
    )
}