import { Request, Response } from "express";
import { changeStudentFromClass } from "../data_/changeStudentFromClass";

export const putChangeStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const mission = req.body;

        let message = "A turma do estudante foi atualizada."

        if (!id || !mission) {
            res.statusCode = 400;
            message = "ID e nome da missão são obrigatórios.";
            throw new Error(message);
        };

        await changeStudentFromClass(id, mission);

        res.status(200).send(message);
    } catch (error) {
        res.status(404).send({message: error.message});
    };
};