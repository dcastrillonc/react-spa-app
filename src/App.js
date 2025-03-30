import React from 'react';
//Importar componente que contiene la lógica para mostrar y filtrar las publicaciones
import PostList from './containers/PostList'; 

//Componente principal o raíz de la aplicación
const App = () => {
  return (
    <div className="App bg-gray-100 min-h-screen">
      {/* Encabezado de la aplicación */}
      <header className="App-header bg-blue-600 text-white py-4">
        {/* Título principal de la página */}
        <h1 className="text-4xl font-semibold text-center">Lista de publicaciones</h1>
      </header>
      {/* Contenedor principal del contenido */}
      <main className="container mx-auto py-8 px-4">
        {/* Renderizar el componente PostList que maneja la lógica y muestras las publicaciones */}
        <PostList/>
      </main>
    </div>
  );
};

export default App;