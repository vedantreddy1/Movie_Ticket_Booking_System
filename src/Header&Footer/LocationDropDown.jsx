import { MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";

const cities = ["Bhopal", "Indore", "Hyderabad"];

const LocationDropdown = () => {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("Hyderabad");

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-md
                   text-sm hover:bg-slate-700 transition"
      >
        <MapPin size={16} className="text-yellow-400" />
        <span>{city}</span>
        <ChevronDown size={16} />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 mt-2 w-40 bg-slate-900
                        rounded-md shadow-lg border border-slate-700"
        >
          {cities.map((c) => (
            <div
              key={c}
              onClick={() => {
                setCity(c);
                setOpen(false);
              }}
              className="px-4 py-2 text-sm cursor-pointer
                         hover:bg-yellow-400 hover:text-black"
            >
              {c}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default LocationDropdown;