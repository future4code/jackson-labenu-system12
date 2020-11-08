import { connection } from "..";

export async function selectTeacherInAClass(missionId: string): Promise<any> {
    try {
        const result = await connection.raw(`
            SELECT t.name AS teacher_name, m.name AS mission_name
            FROM teacher t
            INNER JOIN mission m
            ON t.mission = m.id
            WHERE m.id = "${missionId}";
        `)
        
        return result[0];
    } catch (error) {
        console.log(error);
    };
};