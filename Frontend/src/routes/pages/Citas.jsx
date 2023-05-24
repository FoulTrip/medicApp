import React, { useEffect, useState } from 'react'
import './Styles/Citas.css'
import Navigation from '../../components/Navigation'
import Select from 'react-select';
import { Toaster, toast } from 'sonner';

const options = [
    { label: 'Medico General', value: 'Medico General' },
    { label: 'Dentista', value: 'Dentista' },
    { label: 'Psicologia', value: 'Psicologia' },
    { label: 'Maternidad', value: 'Maternidad' }
]

function Citas() {

    const [dates, setDates] = useState('');
    const [identif, setIdentif] = useState('');
    const [userInfo, setUserInfo] = useState('')
    const [valueSelect, setValueSelect] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:9000/api/users');
                const data = await response.json();
                setIdentif(data);
            } catch (error) {
                console.log('Error al obtener datos')
            }
        };

        fetchData();
    }, [])


    const handleSubmit = (ev) => {
        ev.preventDefault();
        const valorInput = dates;
        identif.map(numeroCedula => numeroCedula.numero_documento);
        const datosUsuario = identif.filter(usuario => usuario.numero_documento == valorInput);
        const valorFinal = datosUsuario.some(i => i.numero_documento == valorInput)
        valorFinal ? toast.success('Usuario encontrado') : toast.error('Usuario no encontrado')
        setUserInfo(datosUsuario)
    }

    const handleSelect = ({ value }) => {
        console.log(value);
        setValueSelect(value)
    }

    return (
        <>
            <Navigation />
            <Toaster richColors />
            <main className='MainForm'>
                <h3>Pide tu cita ya!!</h3>
                <p>Pide tu cita desde la comodidad de tu casa, ya no mas filas largas y molestas</p>
                <div className="formulario">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name='identificacion'
                            placeholder='Numero de documento'
                            autoComplete='off'
                            onChange={(ev) => {
                                setDates(ev.target.value)
                            }}
                        />
                        <button type='submit'>Verificar</button>
                    </form>
                    {userInfo.length > 0 && (
                        <div className="resultado">
                            <h5 className='titleResult'>Datos de usuario</h5>
                            <div className='datos'>
                                <div className="text">
                                    <p>Nombre: {userInfo[0].nombre_completo}</p>
                                    <p>Eps: {userInfo[0].eps}</p>
                                    <p>Estado: {userInfo[0].estado_activo ? 'Activo' : 'No activo'}</p>
                                </div>
                                <div className="tipo_cita">
                                    <Select
                                        defaultValue={{ label: 'Selecciona el tipo de cita', value: 'enpty' }}
                                        options={options}
                                        onChange={handleSelect}
                                    />
                                </div>
                                <div className="calendario">
                                    <div className="Box">
                                        <h3>{valueSelect}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main >
        </>
    )
}
export default Citas