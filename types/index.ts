import { IStudentData } from "@/services/studentServices";

export interface IStudentReturn  extends IStudentData{
    slug: string
}