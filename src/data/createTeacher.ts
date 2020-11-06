import { connection } from '../index'

export async function createTeacher(
    id: string,
    name: string,
    email: string,
    birthDate: string, 
): Promise<void> {
    try { 
        await connection.raw(`
            INSERT INTO teacher (id, name, email, birth_date)
            VALUES ("${id}", "${name}", "${email}", "${birthDate}");
        `);
    } catch (error) {
        console.log(error);
    };
};