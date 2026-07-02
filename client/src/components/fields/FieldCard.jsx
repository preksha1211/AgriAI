import { motion } from "framer-motion";
import {
  MapPin,
  Sprout,
  Droplets,
  Ruler,
  Pencil,
  Trash2,
} from "lucide-react";

const fieldImages = [
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1200&auto=format&fit=crop",
];

function FieldCard({
  field,
  onEdit,
  onDelete,
}) {
  const image =
    fieldImages[
      field.fieldName.length % fieldImages.length
    ];

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: .25,
      }}
      className="overflow-hidden rounded-3xl border border-[#214B3E] bg-[#10281F] shadow-xl"
    >
      {/* IMAGE */}

      <div className="relative h-56 overflow-hidden">

        <img
          src={image}
          alt={field.fieldName}
          className="h-full w-full object-cover transition duration-500 hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute right-5 top-5 rounded-full bg-emerald-500 px-4 py-1 text-sm font-semibold text-white">
          Active
        </div>

        <div className="absolute bottom-5 left-5">

          <h2 className="text-2xl font-bold text-white">
            {field.fieldName}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-[#D8F3DC]">

            <MapPin size={18} />

            {field.location}

          </div>

        </div>

      </div>

      {/* BODY */}

      <div className="space-y-4 p-5">

        <div className="flex items-center justify-between rounded-xl bg-[#163A2A] p-3">

          <div className="flex items-center gap-3">

            <Sprout
              className="text-green-400"
              size={20}
            />

            Soil

          </div>

          <span className="text-white">
            {field.soilType}
          </span>

        </div>

        <div className="flex items-center justify-between rounded-xl bg-[#163A2A] p-3">

          <div className="flex items-center gap-3">

            <Droplets
              className="text-sky-400"
              size={20}
            />

            Irrigation

          </div>

          <span className="text-white">
            {field.irrigationType}
          </span>

        </div>

        <div className="flex items-center justify-between rounded-xl bg-[#163A2A] p-3">

          <div className="flex items-center gap-3">

            <Ruler
              className="text-yellow-400"
              size={20}
            />

            Area

          </div>

          <span className="text-white">
            {field.area} Acres
          </span>

        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">

          <button
            onClick={() => onEdit(field)}
            className="rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <div className="flex items-center justify-center gap-2">
              <Pencil size={18} />
              Edit
            </div>
          </button>

          <button
            onClick={() => onDelete(field._id)}
            className="rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            <div className="flex items-center justify-center gap-2">
              <Trash2 size={18} />
              Delete
            </div>
          </button>

        </div>

      </div>
    </motion.div>
  );
}

export default FieldCard;