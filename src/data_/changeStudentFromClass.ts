import { connection } from "..";

export async function changeStudentFromClass(id: string, mission: string): Promise<void> {
    await connection("students")
    .update("mission", mission)
    .where({id});
};