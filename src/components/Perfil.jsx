const user = {
    nombre: 'Rick Sanchez',
    imagen: 'https://i.pinimg.com/280x280_RS/4a/da/a8/4adaa8fa66de90018c2a233c4f80e2e5.jpg',
    imageSize: '90'
};

export default function profile () {
    return (
        <div className="profile">
            <h2>
              {user.nombre}
            </h2>
            <img src={user.imagen} alt={user.nombre} width={user.imageSize} height={user.imageSize}/>
        </div>
    );
}
