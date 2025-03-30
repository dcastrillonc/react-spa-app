import React from 'react';

//Este componente recibe un objeto post que contiene la información de una publicación
const PostCard = ({ post }) => {
  return (
    //Contenedor principal
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-30">
      <div className="card-body">
        {/* Título de la publicación */}
        <h3 className="text-xl font-semibold text-blue-600 mb-4">{post.title}</h3>
        {/* Descripción de la publicación */}
        <p className="text-gray-700">{post.body}</p>
      </div>
    </div>
  );
};

export default PostCard;
