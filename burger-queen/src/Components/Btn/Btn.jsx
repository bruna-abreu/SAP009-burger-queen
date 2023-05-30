import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomButton = ({ text, path, image, ...restProps }) => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <button onClick={handleClick} {...restProps}>
      {text}
      {image && <img src={image} alt="Imagem do botão" />}
    </button>
  );
};

export default CustomButton;
