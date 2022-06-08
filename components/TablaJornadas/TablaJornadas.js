import styles from './TablaJornadas.module.css'

export default function TablaJornadas() {
  return (
    <table className={styles.table}>
      <thead className='thead'>
        <tr>
          <td colSpan={5} className={styles.table_header}>Jornada Ambiental</td>
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
        <tr>
          <td>Herramientas de trabajo</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
        </tr>
        <tr>
          <td>Mentor</td>
          <td></td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
        </tr>
        <tr>
          <td>Actividades y dinámicas</td>
          <td></td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
        </tr>
        <tr>
          <td>Centros de hidratación</td>
          <td></td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
        </tr>
        <tr>
          <td>Paquete Monarca</td>
          <td></td>
          <td></td>
          <td>x</td>
          <td>x</td>
        </tr>
        <tr>
          <td>Box Lunch</td>
          <td></td>
          <td></td>
          <td></td>
          <td>x</td>
        </tr>
        <tr>
          <td>Playera</td>
          <td></td>
          <td></td>
          <td></td>
          <td>x</td>
        </tr>
        <tr>
          <td>Actividades y dinámicas</td>
          <td></td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
        </tr>
        <tr>
          <td><br /><br /></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>Gratis</td>
          <td>$ 50.00</td>
          <td>$ 200.00</td>
          <td>$ 350.00</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Min. 10 personas</td>
          <td>Min. 10 personas</td>
          <td>Min. 10 personas</td>
        </tr>
      </tbody>
    </table>
  )
}
