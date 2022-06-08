import styles from './TablaJornadas.module.css'

export default function TablaJornadas() {
  return (
    <table className='table'>
      <thead>
        <tr>
          <td>Jornada Ambiental</td>
        </tr>
        <tr>
          <td></td>
          <td>Individual</td>
          <td>Paquete 1</td>
          <td>Paquete 2</td>
          <td>Paquete 3</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Visita guiada</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
        </tr>
      </tbody>
    </table>
  )
}
