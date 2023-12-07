import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=4');
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <PhotoList>
        {photos.map(photo => (
          <PhotoItem key={photo.id}>
            <PhotoImage src={photo.thumbnailUrl} alt={photo.title} />
            <PhotoTitle>{photo.title}</PhotoTitle>
          </PhotoItem>
        ))}
      </PhotoList>
    </Container>
  );
};

export default App;

const Container = styled.div`
  text-align: center;
`;

const PhotoList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const PhotoItem = styled.li`
  flex: 0 1 30%;
  max-width: 300px;
  margin: 1.5%;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const PhotoTitle = styled.p`
  margin-top: 8px;
  font-weight: 400;
`;

const PhotoImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;