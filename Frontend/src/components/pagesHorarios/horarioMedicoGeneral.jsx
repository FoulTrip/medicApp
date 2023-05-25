import React, { useState } from 'react'
import Select from 'react-select';
import { Toaster, toast } from 'sonner';
import './Style/medicoGeneral.css'

const optionsMedic = [
  { label: 'Sofia Garcia', value: 'Sofia Garcia' },
  { label: 'Lucas Rodríguez', value: 'Lucas Rodríguez' },
  { label: 'Isabella López', value: 'Isabella López' },
  { label: 'Noah Martínez', value: 'Noah Martínez' }
]

const days = [
  { label: 'Lunes', value: 'lunes' },
  { label: 'Martes', value: 'martes' },
  { label: 'Miercoles', value: 'miercoles' },
  { label: 'Jueves', value: 'jueves' },
  { label: 'Viernes', value: 'viernes' },
  { label: 'Sabado', value: 'sabado' }
]

function HorarioMedicoGeneral() {

  const [medic, setMedic] = useState('')
  const [day, setDay] = useState('')
  const [hour, setHour] = useState('')

  const medicSelect = ({ value }) => {
    setMedic(value)
  }

  const daySelect = ({ value }) => {
    setDay(value)
  }

  const hourSelect = ({ value }) => {
    setHour(value)
  }

  return (
    <>
      <Toaster richColors />
      <div className='horario'>
        <div className="select">
          <Select className='boxSelect'
            defaultValue={{ label: 'Elige tu medico', value: 'enpty' }}
            options={optionsMedic}
            onChange={medicSelect}
          />
          <Select className='boxSelect'
            defaultValue={{ label: 'Elige el dia', value: 'enpty' }}
            options={days}
            onChange={daySelect}
          />
          <Select className='boxSelect'
            defaultValue={{ label: 'Elige la hora', value: 'enpty' }}
            onChange={hourSelect}
          />
        </div>
      </div>
    </>
  )
}

export default HorarioMedicoGeneral