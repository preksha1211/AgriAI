import {
  Search,
  LayoutGrid,
  List,
} from "lucide-react";

function FieldFilters({
  search,
  setSearch,
  soilFilter,
  setSoilFilter,
  irrigationFilter,
  setIrrigationFilter,
}) {
  return (
    <div className="mb-10 rounded-3xl border border-[#214B3E] bg-[#10281F] p-6 shadow-xl">

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">

        {/* Search */}

        <div className="relative lg:col-span-5">

          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#95D5B2]"
            size={22}
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search fields..."
            className="h-14 w-full rounded-2xl border border-[#214B3E] bg-[#081B14] pl-14 pr-5 text-white outline-none transition-all duration-300 focus:border-[#52B788] focus:ring-2 focus:ring-[#2D6A4F]"
          />

        </div>

        {/* Soil */}

        <div className="lg:col-span-3">

          <select
            value={soilFilter}
            onChange={(e) =>
              setSoilFilter(e.target.value)
            }
            className="h-14 w-full rounded-2xl border border-[#214B3E] bg-[#081B14] px-5 text-white outline-none transition-all duration-300 focus:border-[#52B788] focus:ring-2 focus:ring-[#2D6A4F]"
          >
            <option value="">
              All Soil Types
            </option>

            <option value="Loamy">
              Loamy
            </option>

            <option value="Clay">
              Clay
            </option>

            <option value="Sandy">
              Sandy
            </option>

            <option value="Silty">
              Silty
            </option>

            <option value="Peaty">
              Peaty
            </option>

            <option value="Chalky">
              Chalky
            </option>

          </select>

        </div>

        {/* Irrigation */}

        <div className="lg:col-span-3">

          <select
            value={irrigationFilter}
            onChange={(e) =>
              setIrrigationFilter(e.target.value)
            }
            className="h-14 w-full rounded-2xl border border-[#214B3E] bg-[#081B14] px-5 text-white outline-none transition-all duration-300 focus:border-[#52B788] focus:ring-2 focus:ring-[#2D6A4F]"
          >
            <option value="">
              All Irrigation
            </option>

            <option value="Drip">
              Drip
            </option>

            <option value="Sprinkler">
              Sprinkler
            </option>

            <option value="Flood">
              Flood
            </option>

            <option value="Manual">
              Manual
            </option>

          </select>

        </div>

        {/* Grid/List */}

        <div className="flex items-center justify-center gap-3 lg:col-span-1">

          <button
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2D6A4F] text-white transition hover:bg-[#40916C]"
          >
            <LayoutGrid size={22} />
          </button>

          <button
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#214B3E] bg-[#081B14] text-[#95D5B2] transition hover:bg-[#163A2A]"
          >
            <List size={22} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default FieldFilters;