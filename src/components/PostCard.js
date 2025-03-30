import React from 'react';

//Este componente recibe un objeto post que contiene la información de una publicación
const PostCard = ({ post }) => {
  return (
    //Contenedor principal
    <div className="card mb-3 shadow-lg rounded-lg">
      <div className="card-body">
        {/* Título de la publicación */}
        <h3 className="card-title text-primary">{post.title}</h3>
        {/* Descripción de la publicación */}
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  );
};

export default PostCard;
