type ShopCardProps = {
  name: string;
  area: string;
  hours: string;
  knownFor: string;
  mapsUrl: string;
  instagram?: string;
  whatsapp?: string;
  lateNight: boolean;
};

export default function ShopCard({
  name,
  area,
  hours,
  knownFor,
  mapsUrl,
  instagram,
  whatsapp,
  lateNight,
}: ShopCardProps) {
  return (
    <article className="shop-card">
      <div className="shop-card-top">
        <h2 className="shop-name">{name}</h2>
        {lateNight && <span className="badge">Late night</span>}
      </div>
      <p className="shop-area">{area}</p>
      <p className="shop-hours">
        <span className="meta-label">Hours</span> {hours}
      </p>
      <p className="shop-known">
        <span className="meta-label">Known for</span> {knownFor}
      </p>
      <div className="shop-links">
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
          Maps
        </a>
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        )}
        {whatsapp && (
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        )}
      </div>
    </article>
  );
}
