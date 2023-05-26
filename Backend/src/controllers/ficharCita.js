import { getConnection } from '../databases/database'

const getCita = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT nombre_paciente, fecha_cita, hora_cita, nombre_doctor FROM citasmedicas');
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addCita = async (req, res) => {
    try {
        const { nombre_paciente, fecha_cita, hora_cita, nombre_doctor } = req.body;
        if ( nombre_paciente == undefined || fecha_cita == undefined || hora_cita == undefined || nombre_doctor == undefined ) {
            res.status(400).json({message: "Bad request"})
        }
        const datesSQL = { nombre_paciente, fecha_cita, hora_cita, nombre_doctor };
        const connection = await getConnection();
        await connection.query("INSERT INTO citasmedicas SET ?", datesSQL);
        res.json({message: "Cita agendada"})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const citas = {
    getCita,
    addCita
};