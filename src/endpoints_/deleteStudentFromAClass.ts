import { Request, Response } from "express";
import { removeStudentFromAClass } from "../data_/removeStudentFromAClass";

export const deleteStudentFromAClass = async (req: Request, res: Response): Promise<void> => {
    try {
        const studentId = req.params.studentId;

        if(!studentId) {
            res.statusCode = 400;
            throw new Error("Insira um ID de estudante válido");
        }

        await removeStudentFromAClass(studentId);

        res.status(200).send("Estudante removido da turma!");
    } catch (error) {
        res.status(404).send("Estudante não encontrado.");
    };
};