import HorarioMedicoGeneral from './pagesHorarios/horarioMedicoGeneral'
import HorarioDentista from './pagesHorarios/HorarioDentista'
import HorarioPsicologia from './pagesHorarios/HorarioPsicologia'
import HorarioMaternidad from './pagesHorarios/HorarioMaternidad'


function FilterCitas(props) {

    const filterProp = () => {
        const medicoGeneral = 'Medico General'
        const dentista = 'Dentista'
        const psicologia = 'Psicologia'
        const maternidad = 'Maternidad'

        if (props.valueSelect == medicoGeneral) {
            return <HorarioMedicoGeneral />
        } else if (props.valueSelect == dentista) {
            return <HorarioDentista />
        } else if (props.valueSelect == psicologia) {
            return <HorarioPsicologia />
        } else if (props.valueSelect == maternidad) {
            return <HorarioMaternidad />
        }
    }

    return (
        <>
            {filterProp()}
        </>
    )
}

export default FilterCitas