const ImageModal = ({ text, imageUrl }) => {
  return (
    <a href={imageUrl} target="_blank" rel="noopener noreferrer">
      <h3>{text}</h3>
    </a>
  );
};

export default ImageModal;