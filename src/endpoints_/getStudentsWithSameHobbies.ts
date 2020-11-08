import { Request, Response } from "express";
import { selectStudentsWithSameHobbies } from "../data_/selectStudentsWithSameHobbies";

export const getStudentsWithSameHobbies = async (req: Request, res: Response): Promise<any> => {
    try {
        const hobby = req.params.hobby

        const result = await selectStudentsWithSameHobbies(hobby);

        if(!hobby) {
            res.statusCode = 400;
            throw new Error("Por favor, insira um hobby para fazer a procura.");
        };

        res.status(200).send(result)
    } catch (error) {
        res.status(404).send("Alunos com mesmo hobbies não foram encontrados.");
    };
};