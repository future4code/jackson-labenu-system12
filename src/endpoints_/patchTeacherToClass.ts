import { Request, Response } from "express";
import { updateAddTeacherToClass } from "../data_/updateAddTeacherToClass";

export const patchTeacherToClass = async (req: Request, res: Response): Promise<void> => {
    try {
        if(!req.body.id){
            throw new Error("Coloque o id do professor que será adicionado")
        }

        if(!req.body.mission){
            throw new Error("Coloque o id da turma em que ele será adicionado")
        }

        const result = await updateAddTeacherToClass(req.body.id, req.body.mission)

        console.log(result)
        
        if(result === "Professor não encontrado") {
            throw new Error(result)
        }

        if(result === "Turma não encontrada"){
            throw new Error(result)
        }

        res.status(200).send("Adicionado a turma com sucesso")
    } catch (error) {
        res.status(400).send(error.message)
    }
}