import { connection } from "..";

export async function createStudentHobby(
    id: string,
    student_id: string,
    hobby: string
): Promise<void> {
    try {
        await connection
        .insert({id, student_id, hobby})
        .into("students_hobbies");
    } catch (error) {
        console.log(error);
    };
};