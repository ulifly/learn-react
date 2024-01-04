const productos = [
  {producto: 'tomate', esFruta: true, id: 1 },
  {producto: 'manzana', esFruta: true, id: 2 },
  {producto: 'pera', esFruta: true, id: 3 },
  {producto: 'sandia', esFruta: true, id: 4 },
  {producto: 'cebolla', esFruta: false, id: 5 },
  {producto: 'arroz', esFruta: false, id: 6 },
  {producto: 'leche', esFruta: false, id: 7 },
  {producto: 'cafe', esFruta: false, id: 8 },
  {producto: 'huevos', esFruta: false, id: 9 },
]

export default function Lista() {
  const listaDeProductos = productos.map((producto) => 
  <li 
    style={{color: producto.esFruta ? 'green': 'blue' 
  }}
  >
    {producto.producto}
  </li>
  );
  return (
    <ul>{listaDeProductos}</ul>
  )
}