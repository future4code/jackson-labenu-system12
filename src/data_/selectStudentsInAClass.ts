import { connection } from "..";

export async function selectStudentInAClass(missionId: string): Promise<any> {
    try {
        const result = await connection.raw(`
            SELECT s.name AS student_name, m.name AS mission_name
            FROM students s
            INNER JOIN mission m
            ON s.mission = m.id
            WHERE m.id = "${missionId}";
        `)
        
        return result[0];
    } catch (error) {
        console.log(error);
    };
};