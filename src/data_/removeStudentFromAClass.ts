import { connection } from "..";

export async function removeStudentFromAClass(studentId: string): Promise<void> {
    await connection("students")
    .update({mission: null})
    .where("id", studentId);
};