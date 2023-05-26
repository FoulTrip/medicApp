import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes';
import ficharCitas from './routes/ficharCita';

const port = 9000;
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use("/api/users", router);
app.use("/api/citas", ficharCitas);

app.listen(port, () => {
    console.log(`Server in port: ${port}`);
});