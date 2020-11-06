import {connection} from '..'

export const createStudent = async (
    id: string,
    name: string,
    email: string,
    birth_date: Date,
    mission_id: string
): Promise<void> => {
    const newStudent= await connection.raw(`
        INSERT INTO students(id, name, email, birth_date, mission)
        VALUES ("${id}", "${name}","${email}","${birth_date}","${mission_id}");
    `)

    return newStudent
}