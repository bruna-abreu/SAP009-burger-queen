import React from 'react';
import { useNavigate } from 'react-router-dom';

const Btn = ({ text, path, image, buttonClassName, btnTextClassName, imageClassName, isActive, ...restProps }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <button onClick={handleClick} className={`${buttonClassName} ${isActive ? 'ativo' : ''}`} {...restProps}>
      <div className={`${btnTextClassName} ${isActive ? 'laranja' : ''}`}>{text}</div>
      <div className={imageClassName}>{image && <img src={image} alt="Imagem do botão" />}</div>
    </button>
  );
};

export default Btn;

