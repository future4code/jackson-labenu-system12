import { Request, Response } from "express";
import { updateAddStudentToClass } from "../data_/updateAddStudentToClass";

export const patchStudentToClass = async (req: Request, res: Response): Promise<void> => {
    // deve receber o id do estudante que será adicionado.
    // e o id da mission que ele será adicionado.

    try {
        if(!req.body.id){
            throw new Error("Coloque o id do estudante que será adicionado")
        }

        if(!req.body.mission){
            throw new Error("Coloque o id da turma em que ele será adicionado")
        }

        const result = await updateAddStudentToClass(req.body.id, req.body.mission)

        console.log(result)
        
        if(result === "Estudante não encontrado") {
            throw new Error(result)
        }

        if(result === "Turma não encontrada"){
            throw new Error(result)
        }

        res.status(200).send("alterado com sucesso")
    } catch (error) {
        res.status(400).send(error.message)
    }
}