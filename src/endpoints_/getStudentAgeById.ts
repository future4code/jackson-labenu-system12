import { Request, Response } from "express";
import { selectStudentAgeById } from "../data_/selectStudentById"

export const getStudentAgeById = async (req: Request, res: Response): Promise<any> => {
    try {
        const id: string = req.params.id;

        const age: number = await selectStudentAgeById(id);
        
        if (!id) {
            res.statusCode = 404;
            throw new Error("Por favor, insira um id válido.");
        };

        res.status(200).send(age);
    } catch (error) {
        res.status(404).send("Estudante não encontrado!")
    };
};