import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import ShopCard from "./ShopCard";

type ShopListProps = {
  area: string;
  lateNightOnly: boolean;
};

export default function ShopList({ area, lateNightOnly }: ShopListProps) {
  const shops = useQuery(api.shops.list, {
    area: area === "All" ? undefined : area,
    lateNightOnly: lateNightOnly || undefined,
  });

  if (shops === undefined) {
    return (
      <div className="shop-list-state" role="status">
        Loading shops…
      </div>
    );
  }

  if (shops.length === 0) {
    return (
      <div className="shop-list-state">
        No shops match these filters. Try another area or clear late night.
      </div>
    );
  }

  return (
    <ul className="shop-list">
      {shops.map((shop) => (
        <li key={shop._id}>
          <ShopCard
            name={shop.name}
            area={shop.area}
            hours={shop.hours}
            knownFor={shop.knownFor}
            mapsUrl={shop.mapsUrl}
            instagram={shop.instagram}
            whatsapp={shop.whatsapp}
            lateNight={shop.lateNight}
          />
        </li>
      ))}
    </ul>
  );
}
