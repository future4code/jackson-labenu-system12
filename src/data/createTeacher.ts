import { connection } from '../index'

export async function createTeacher(
    id: string,
    name: string,
    email: string,
    birth_date: string, 
): Promise<void> {
    try { 
        await connection
        .insert({id, name, email, birth_date})
        .into("teacher")  
    } catch (error) {
        console.log(error);
    };
};