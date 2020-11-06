import { connection } from ".."

export const createMission = async (
    id: string,
    name: string,
    start_date: Date,
    end_date: Date,
    type_class: string,
    module: string
):Promise<void> => {
    try {
        await connection
            .insert({id, name, start_date, end_date, type_class, module})
            .into("mission")
            
    } catch (error) {
        return error
    }
}