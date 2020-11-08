import { Request, Response } from "express";
import { selectTeacherInAClass } from "../data_/selectTeacherInAClass";

export const getTeacherInAClass = async (req: Request, res: Response): Promise<any> => {
    try {
        const missionId = req.params.missionId;

        const result = await selectTeacherInAClass(missionId);

        if (!missionId) {
            res.statusCode = 400;
            throw new Error("Por favor, insira o ID da missão.");
        };

        res.status(200).send(result)
    } catch (error) {
        res.status(404).send("Estudantes não encontrados.");
    };
};