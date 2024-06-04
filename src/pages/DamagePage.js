import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
`;

const UploadInput = styled.input`
  display: none;
`;

const UploadLabel = styled.label`
  padding: 1rem 2rem;
  font-size: 1rem;
  border-color: #695eff !important;
  color: white;
  background-color: #020014;
  border: 2px solid #120e38;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #120e38;
    border-color: #695eff;
    color: white;
  }
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 300px;
  margin-bottom: 1rem;
`;

const ResultText = styled.p`
  margin-top: 1rem;
  font-weight: bold;
  color: white !important;
`;

const DamagePage = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
    // Simulate result for demonstration
    setResult(file.name.includes('damage') ? 'Damage Detected' : 'Damaged');
  };

  return (
    <Container>
      <Title>Upload an Image to Detect Damage</Title>
      <UploadInput type="file" id="image-upload" onChange={handleImageChange} accept="image/*" />
      <UploadLabel htmlFor="image-upload">Upload Image</UploadLabel>
      {image && <ImagePreview src={image} alt="Uploaded" />}
      {result && <ResultText>{result}</ResultText>}
    </Container>
  );
};

export default DamagePage;
