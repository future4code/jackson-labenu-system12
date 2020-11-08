import { connection } from "..";

export async function selectStudentsWithSameHobbies(
    hobby: string
): Promise<any> {
    try {
        const result = await connection.raw(`
            SELECT s.name AS student_name, sh.hobby AS student_hobby 
            FROM students s
            INNER JOIN students_hobbies sh
            ON s.id = sh.student_id
            WHERE sh.hobby LIKE "%${hobby}%";
        `);

        return result[0];
    } catch (error) {
        console.log(error);
    };
};