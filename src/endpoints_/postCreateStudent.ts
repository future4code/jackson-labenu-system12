import { Request, Response } from "express";
import { v4 as uuidv4} from 'uuid';
import { createStudent } from "../data_/createStudent";
import { Student } from "../types";

export const postCreateStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = uuidv4()
        const { name, email, birth_date }: Student = req.body;

        const [day, month, year] = birth_date.split("/");
        const convertedBirthDate: Date = new Date(`${year}-${month}-${day} (GMT-3)`);
        const sqlDate: string = convertedBirthDate.toISOString().split("T")[0];

        if (id === "" || name === "" ||email === "" || birth_date === "") {
            res.statusCode = 400;
            throw new Error("Por favor, preencha todos os campos.");
        };

        if (convertedBirthDate > new Date()) {
            res.statusCode = 400;
            throw new Error("Insira uma data de nascimento válida.")
        };

        if(!email.includes("@")) {
            res.statusCode = 400;
            throw new Error("E-mail inválido.");
        };

        await createStudent(id, name, email, sqlDate);

        res.status(200).send("Estudante adicionado com sucesso!");
    } catch (error) {
        res.status(400).send(error.message);
    };
};