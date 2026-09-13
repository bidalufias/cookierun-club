import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

type FiltersProps = {
  area: string;
  lateNightOnly: boolean;
  onAreaChange: (area: string) => void;
  onLateNightChange: (value: boolean) => void;
};

export default function Filters({
  area,
  lateNightOnly,
  onAreaChange,
  onLateNightChange,
}: FiltersProps) {
  const areas = useQuery(api.shops.areas);

  return (
    <div className="filters" role="search" aria-label="Filter shops">
      <label className="filter-field">
        <span className="filter-label">Area</span>
        <select
          value={area}
          onChange={(e) => onAreaChange(e.target.value)}
          className="filter-select"
        >
          <option value="All">All areas</option>
          {(areas ?? []).map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </label>

      <label className="filter-checkbox">
        <input
          type="checkbox"
          checked={lateNightOnly}
          onChange={(e) => onLateNightChange(e.target.checked)}
        />
        <span>Late night only</span>
      </label>
    </div>
  );
}
