import mongoose from "mongoose";







const conectarDB = async () => {
  const URI_DB="mongodb+srv://letsprint:QpK4KXd6w4xP7cgN@lets-print.tdue4ze.mongodb.net/?retryWrites=true&w=majority&appName=Lets-Print"
  try {
    const db = await mongoose.connect(URI_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB conectado en ${db.connection.host}:${db.connection.port}`);
  } catch (error) {
    console.error(`Error al conectar con MongoDB: ${error}`);
    process.exit(1);
  }
};

export default conectarDB;
