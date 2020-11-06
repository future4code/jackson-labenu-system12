import {connection} from '..'

export const createStudent = async (
    id: string,
    name: string,
    email: string,
    birth_date: string,
): Promise<void> => {
    try {
        await connection
       .insert({id, name, email, birth_date})
       .into("students")        
    } catch (error) {
        return error
    }
};