import { connection } from ".."

export const updateAddTeacherToClass = async (id: string, mission: string): Promise<any> => {
    try {
        const pegaProfessor = await connection 
            .select("id")
            .from("students")
            .where("id", id)

        const pegaTurma = await connection
            .select("id")
            .from("mission")
            .where("id", mission)

        if(!pegaTurma.length) {
            throw new Error("Turma não encontrada")
        }

        if(!pegaProfessor.length){
            throw new Error("Professor não encontrado")
        }
        
        const result = await connection("students")
        .update({mission: mission /*aqui é um id*/})
        .where("id", id)

        return result

    } catch (error) {
        return error.message
    }
}