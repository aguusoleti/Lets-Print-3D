import jwt from "jsonwebtoken";

const generarJWT = (id) => {
    //.sing para crear un nuevo jwt, y le paso un objeto({nombre, la secretkey, cuando expira})
    const JWT_SECRET="Esto es una prueba"
    return jwt.sign({id}, JWT_SECRET, {
        expiresIn: "30d",
    })
}

export default generarJWT;