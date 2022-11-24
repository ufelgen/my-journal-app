export default function FavButton({
  type,
  className,
  children,
  onToggleFavorite,
  id,
}) {
  return (
    <>
      <button
        type={type}
        className={className}
        onClick={() => onToggleFavorite(id)}
      >
        {children}
      </button>
    </>
  );
}
