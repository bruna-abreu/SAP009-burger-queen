import React from 'react';
import { useNavigate } from 'react-router-dom';

const Btn = ({ text, path, image, buttonClassName, imageClassName, ...restProps }) => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <button onClick={handleClick} className={buttonClassName} {...restProps}>
      <div className="btnText">{text}</div>
      <div className={imageClassName}>
        {image && <img src={image} alt="Imagem do botão" />}
      </div>
    </button>
  );
};

export default Btn;
