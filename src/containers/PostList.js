import React, { useState, useEffect } from 'react';
//Hacer peticiones HTTP e interactuar con la API pública
import axios from 'axios';
//Importar componente para mostrar las publicaciones
import PostCard from '../components/PostCard';

const PostList = () => {
  //Estado para almacenar todas las publicaciones
  const [posts, setPosts] = useState([]);
  //Estado para almacenar las publicaciones filtradas
  const [filteredPosts, setFilteredPosts] = useState([]);
  //Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  //useEffect permite sincronizar un componente con la API y hacerle la petición
  useEffect(() => {
    //Realizar la petición GET a la API JSONPlaceholder para obtener las publicaciones
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        //Guardar todas las publicaciones y las filtradas en el estado correspondiente
        setPosts(response.data);
        setFilteredPosts(response.data);
      })
      .catch(error => {
        //Manejo de errores en caso de que la petición falle
        console.error('Error fetching data: ', error);
      });
  }, []);

  //Función para manejar el cambio en la sección de búsqueda para el filtrado
  const handleSearch = (event) => {
    //Actualizar el término de búsqueda
    setSearchTerm(event.target.value); 
    const filtered = posts.filter(post =>
      //Filtrar por título
      post.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    //Actualizar el estado con las publicaciones filtradas
    setFilteredPosts(filtered);
  };

  return (
    <div>
      {/*Campo de búsqueda para filtrar las publicaciones por título en tiempo real*/}
      <input
        type="text"
        className="w-full p-3 mb-6 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Filtrar por título"
        value={searchTerm}
        onChange={handleSearch} //Llamar a la función cuando se escriba
      />
      {/*Muestras las publicaciones filtradas*/}
      <div className="space-y-6">
        {filteredPosts.map(post => (
          //Renderizar cada publicación
          <PostCard key={post.id} post={post} />
      ))}
      </div>
    </div>
  );
};

export default PostList;