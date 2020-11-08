import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid'
import { createStudentHobby } from "../data_/createStudentHobby";

export const createNewStudentHobby = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = uuidv4();
        const { student_id, hobby } = req.body;

        if (!student_id) {
            throw new Error("Por favor, insira um ID válido");
        };

        if (hobby === "") {
            throw new Error("Preencha o campo de hobby.");
        };

        createStudentHobby(id, student_id, hobby);

        res.status(201).send("Hobby criado com sucesso!");
    } catch (error) {
        res.status(400).send("Não foi possível criar este hobby. Tente novamente.");
    };
};