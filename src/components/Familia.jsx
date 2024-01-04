const familia = [
  {
    nombre: 'Morty Smith',
    parentesco: 'nieto',
    edad: 14
  },
  {
    nombre: 'Beth Sanchez',
    parentesco: 'hija',
    edad: 32
  },
  {
    nombre: 'Summer Smith',
    parentesco: 'nieta',
    edad: 16
  }
] 


export default function Familia() {
  return (
    <div>
      {familia.map((familiar, index) => (
        <div key={index}>
          <h2>nombre {familiar.nombre}</h2>
          <p>parentesco {familiar.parentesco}</p>
          <p>edad {familiar.edad}</p>
        </div>
      ))}
    </div>
  )  

}