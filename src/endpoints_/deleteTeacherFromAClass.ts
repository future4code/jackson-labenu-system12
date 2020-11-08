import { Request, Response } from "express";
import { removeTeacherFromAClass } from "../data_/removeTeacherFromAClass";

export const deleteTeacherFromAClass = async (req: Request, res: Response): Promise<void> => {
    try {
        const teacherId = req.params.teacherId;

        if(!teacherId) {
            res.statusCode = 400;
            throw new Error("Insira um ID de professor(a) válido");
        };

        await removeTeacherFromAClass(teacherId);

        res.status(200).send("Professor(a) removido da turma!");
    } catch (error) {
        res.status(404).send("Professor(a) não encontrado.");
    };
};