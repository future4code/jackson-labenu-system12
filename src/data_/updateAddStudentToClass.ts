import { connection } from ".."

export const updateAddStudentToClass = async (id: string, mission: string): Promise<any> => {

    try {   
        const pegaEstudante = await connection 
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

        if(!pegaEstudante.length){
            throw new Error("Estudante não encontrado")
        }  

        // deve ser recebido o id da mission
        const result = await connection("students")
        .update({mission: mission /*aqui é um id*/})
        .where("id", id)

        return result

    } catch (error) {
        return error.message
    }
}