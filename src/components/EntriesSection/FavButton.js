export default function FavButton({
  type,
  className,
  children,
  onToggleFavorite,
  isFavorite,
  id,
}) {
  return (
    <>
      <button
        type={type}
        className={className}
        isFavorite={isFavorite}
        onClick={() => onToggleFavorite(id)}
      >
        {children}
      </button>
    </>
  );
}
