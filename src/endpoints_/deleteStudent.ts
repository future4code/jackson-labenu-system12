import { Request, Response } from "express";
import { removeStudent } from "../data_/removeStudent";

export const deleteStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;

        let message = "Estudante excluído!";

        if (!id) {
            res.statusCode = 400;
            message = "Insira o ID do estudante.";
            throw new Error(message);
        };

        await removeStudent(id);

        res.send(message);
    } catch (error) {
        res.send({message: error.message});
    };
};