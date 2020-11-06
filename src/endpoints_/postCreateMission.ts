import { Request, Response } from "express";
import { v4 as uuidv4} from 'uuid';
import { createMission } from "../data_/createMission";

export const postCreateMission = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = uuidv4()
        const name = req.body.name
        const start_date = req.body.start_date
        const end_date = req.body.end_date
        const type_class = req.body.type_class
        const module = req.body.module

        await createMission(id, name, start_date, end_date, type_class, module)

        res.status(200).send(`Turma criada com sucesso. ID: ${id}`)
    } catch (error) {
        res.status(400).send(error)
    }
}