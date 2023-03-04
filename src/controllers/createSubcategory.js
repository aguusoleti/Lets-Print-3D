import mongoose from 'mongoose';
import Subcategory from '../models/subcategory.js';


mongoose.connect('mongodb+srv://letsprint:agustiin95@lets-print.tdue4ze.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos!');
    const newCategory = new Subcategory({
      nombre: 'otros',
    });

    newCategory.save()
      .then(() => {
        console.log('Categoría guardada en la base de datos!');
        mongoose.connection.close();
      })
      .catch((error) => {
        console.error(`Error al guardar la categoría: ${error}`);
        mongoose.connection.close();
      });
  })
  .catch((error) => {
    console.error(`Error al conectarse a la base de datos: ${error}`);
  });
