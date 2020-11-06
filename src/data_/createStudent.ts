import {connection} from '..'

export const createStudent = async (
    id: string,
    name: string,
    email: string,
    birth_date: string,
): Promise<void> => {
    const newStudent= await connection.raw(`
        INSERT INTO students (id, name, email, birth_date)
        VALUES ("${id}", "${name}","${email}","${birth_date}");
    `);

    return newStudent;
};