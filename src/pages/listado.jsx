import { useSelector } from 'react-redux'
import listadoPerros from "../service/cart/list.dogs.json"
const Listado = () => {
    const { fullname } = useSelector(state => state.user)
    let display = listadoPerros.perros.map((perro, i) => {
        let { img, nombre } = perro
        return (
            <div className="col-sm-4" key={i}>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img} className="img-fluid rounded-start" alt={nombre} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Raza:</h5>
                                <p className="card-text">
                                    {nombre}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="container py-5">
            <h1>
                Hola {fullname}
            </h1>
            <h3>Listado de razas de perros</h3>
            <hr />
            <div className='row'>
                {display}
            </div>
        </div>
    )
}

export default Listado
