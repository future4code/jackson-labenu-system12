import { Request, Response } from "express";
import { createTeacher } from "../data/createTeacher";
import { Teacher } from "../types";
import { v4 as uuidv4} from 'uuid'

export const createNewTeacher = async (req: Request, res: Response): Promise<void> => {
    try {

        const id = uuidv4();
        const { name, email, birthDate }: Teacher = req.body;
        
        const [day, month, year] = birthDate.split("/");
        const convertedBirthDate: Date = new Date(`${year}-${month}-${day} (GMT-3)`);
        const sqlDate = convertedBirthDate.toISOString().split("T")[0];

        if (id === "" || name === "" ||email === "" || birthDate === "") {
            res.statusCode = 400;
            throw new Error("Por favor, preencha todos os campos.");
        };

        if (convertedBirthDate > new Date()) {
            res.statusCode = 400;
            throw new Error("Insira uma data de nascimento válida.")
        };

        if(!email.includes("@")) {
            res.statusCode = 400;
            throw new Error("Email inválido.");
        };

        await createTeacher(id, name, email, sqlDate);

        res.status(201).send("Professor criado com sucesso!");
    } catch (error) {
        res.status(400).send(error.message)
    }
}