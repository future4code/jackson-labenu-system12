import { connection } from "..";

export async function removeTeacherFromAClass(teacherId: string): Promise<void> {
    await connection("teacher")
    .update({mission: null})
    .where("id", teacherId);
};