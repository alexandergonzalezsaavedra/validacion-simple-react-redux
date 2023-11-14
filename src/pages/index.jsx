import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { useState } from "react"
import dataUser from '../service/user/user.login.json'
import { setTokenUser } from '../reducer/log/logSlice'
import { setUser } from '../reducer/user/userSlice'
const Login = () => {
    const dispatch = useDispatch()
    const rand = () => Math.random(0).toString(36).substr(2);
    const token = (length) => (rand() + rand() + rand() + rand()).substr(0, length);
    let initialState = {
        correo: "",
        contrasenia: ""
    }
    const [input, setInput] = useState(initialState)
    let { correo, contrasenia } = input
    const handleChange = (e) => {
        const { type, name, checked, value } = e.target
        setInput((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    const limpiar = () => {
        setInput(initialState)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let validar = dataUser.usuarios.find(user => user.correo === correo && user.contrasena === contrasenia)
        console.log(validar)
        if (correo === "") {
            return Swal.fire({
                title: '¡Error!',
                text: 'El campo de correo esta vacio',
                icon: 'warning',
                confirmButtonText: 'Cerrar'
            })
        }
        else {
            limpiar()
        }
        if (contrasenia === "") {
            return Swal.fire({
                title: '¡Error!',
                text: 'El campo de contraseña esta vacio',
                icon: 'warning',
                confirmButtonText: 'Cerrar'
            })
        }
        else {
            limpiar()
        }
        if (validar) {
            return (
                <>
                    {dispatch(setTokenUser({ token: token(40) }))}
                    {dispatch(setUser({
                        correo: validar.correo,
                        fullname: validar.fullname,
                    }))}
                    {console.log('Usuario valido 😁👍')}
                </>
            )
        }
        else {
            limpiar()
        }
        if (!validar) {
            return Swal.fire({
                title: '¡Error!',
                text: 'El usuario no existe en la base de datos, verifique sus credenciales',
                icon: 'error',
                confirmButtonText: 'Cerrar'
            })
        }
        else {
            limpiar()
        }
    }
    return (
        <section className="login">
            <div className="container py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-6">
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col-sm-12">
                                    <label htmlFor="correo">
                                        Correo:
                                    </label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        name="correo"
                                        id="correo"
                                        placeholder="correo"
                                        onChange={handleChange}
                                        value={correo}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12">
                                    <label htmlFor="contrasenia">
                                        Contraseña:
                                    </label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="contrasenia"
                                        id="contrasenia"
                                        placeholder="Contraseña"
                                        onChange={handleChange}
                                        value={contrasenia}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12">
                                    <button className="btn btn-outline-primary rounded-0">
                                        Ingresar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login