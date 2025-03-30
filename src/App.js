import React from 'react';
//Importar componente que contiene la lógica para mostrar y filtrar las publicaciones
import PostList from './containers/PostList'; 

//Componente principal o raíz de la aplicación
const App = () => {
  return (
    <div className="App">
      {/* Encabezado de la aplicación */}
      <header className="App-header">
        {/* Título principal de la página */}
        <h1 className="display-4">Lista de publicaciones</h1>
      </header>
      {/* Contenedor principal del contenido */}
      <main className="container py-5">
        {/* Renderizar el componente PostList que maneja la lógica y muestras las publicaciones */}
        <PostList/>
      </main>
    </div>
  );
};

export default App;