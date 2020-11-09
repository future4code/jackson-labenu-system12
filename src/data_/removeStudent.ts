import { connection } from "..";

export async function removeStudent(id: string): Promise<any> {
    await connection("students_hobbies")
    .delete()
    .where("student_id", id)
    
    await connection("students")
    .delete()
    .where({id});
};