'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

import '../styles/carrousel.css';  // Si tu es dans un dossier 'src/app'


export default function Home() {
  const [posts, setPosts] = useState([]);

  // Liste des images
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
  ];

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
  }, []);

  return (
    <div>
      {/* Liste des articles avec images associées */}
      <h1>Voici les articles</h1>
      <ul className="post-list">
        {posts.map((post, index) => (
          <li key={post.id} className="post-item">
            {/* Associer une image basée sur l'index modulo le nombre d'images */}
            <Image 
              src={images[index % images.length]} 
              alt={`Image for ${post.title}`} 
              width={500} 
              height={300} 
            />
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
