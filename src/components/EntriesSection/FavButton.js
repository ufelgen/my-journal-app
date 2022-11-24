export default function FavButton({
  type,
  className,
  children,
  onToggleFavorite,
  isfavorite,
  id,
}) {
  return (
    <>
      <button
        type={type}
        className={className}
        isfavorite={isfavorite}
        onClick={() => onToggleFavorite(id)}
      >
        {children}
      </button>
    </>
  );
}
