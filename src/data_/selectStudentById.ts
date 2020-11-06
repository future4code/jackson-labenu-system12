import { connection } from "..";
import { Student } from "../types";

export async function selectStudentAgeById(id: string): Promise<any> {
    try {
        const result: Student[] = await connection.raw(`
            SELECT TRUNCATE((DATEDIFF(CURDATE(), birth_date) / 365), 0) as age
            FROM students
            WHERE id = "${id}";
        `)

        return result[0];
    } catch (error) {
        console.log(error);
    };
};
