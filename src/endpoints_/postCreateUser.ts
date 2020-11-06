import { Request, Response } from "express";
import { v4 as uuidv4} from 'uuid';
import { createStudent } from "../data_/createStudent";

export const postCreateUser = async (req: Request, res: Response) => {
    try {
        const id = uuidv4()
        const name = req.body.name
        const email = req.body.email
        const birth_date = req.body.birth_date
        const mission_id = uuidv4()

        await createStudent(id, name, email, birth_date, mission_id)

        res.status(200).send("Estudante adicionado com sucesso!")
        
    } catch (error) {
        res.send(error)
    }
}