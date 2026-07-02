import { Search } from "lucide-react";

function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
}) {
  return (
    <div className="relative w-full">
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#95D5B2]"
      />

      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[#214B3E] bg-[#163A2A] py-3 pl-12 pr-4 text-white outline-none transition duration-300 focus:border-[#52B788] focus:ring-2 focus:ring-[#52B788]/30"
      />
    </div>
  );
}

export default SearchInput;