import { Request, Response } from "express";
import { v4 as uuidv4} from 'uuid';
import { createMission } from "../data_/createMission";

export const postCreateMission = async (req: Request, res: Response): Promise<void> => {
    try {
        

        const [day, month, year] = req.body.start_date.split("/")
        const [end_day, end_month, end_year] = req.body.end_date.split("/")

        const id = uuidv4()
        let name = req.body.name
        const start_date: Date = new Date(`${year}-${month}-${day}`)
        const end_date: Date = new Date(`${end_year}-${end_month}-${end_day}`)
        const type_class = req.body.type_class
        const module = req.body.module
        const numberModule = Number(module)

        if(!numberModule){
            throw new Error("Verifique o módulo da turma. Deve ser um numero entre 1 a 7.")
        }

        if(numberModule < 1 || numberModule > 7){
            throw new Error("Defina o módulo em que a turma está.")
        }

        if (
            !name ||
            !start_date ||
            !end_date 
        ) {
            throw new Error("Preencha todos os campos.")            
        }

        if (type_class !== "noturna") {
            if(type_class !== "integral"){
                throw new Error("Defina o tipo da turma. Escolha entre integral ou noturna.")
            }
        }

        if(type_class === "noturna") {
            name = `${req.body.name} na-night`
        }

        await createMission(id, name, start_date, end_date, type_class, module)

        res.status(200).send(`Turma criada com sucesso. ID: ${id}`)
    } catch (error) {
        res.status(400).send(error.message);
    }
}