import css from "./ImageCard.module.css";

const ImageCard = ({
  image: { urls, likes, description },
  onToggle
}) => {
  const imageInfo = {
    likes: likes,
    modal: urls.regular,
    description: description,
  };

  const handleClick = () => {
    onToggle(imageInfo);
  };

  return (
    <div className={css.imageContainer}>
      <img
        src={urls.small}
        alt={description}
        width="400"
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
