import { getConnection } from "../databases/database";

const getRequests = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT numero_documento, nombre_completo, eps, estado_activo FROM usuarios')
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addRequests = async (req, res) => {
    try {
        const { numero_documento, nombre_completo, eps, estado_activo} = req.body;
        if ( numero_documento == undefined || nombre_completo == undefined || eps == undefined || estado_activo == undefined ) {
            res.status(400).json({message: "Bad request"})
        }
        const datesSQL = { numero_documento, nombre_completo, eps, estado_activo }; 
        const connection = await getConnection();
        await connection.query("INSERT INTO usuarios SET ?", datesSQL);
        res.json({message: "Usuario agregado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getRequests,
    addRequests
};