import { motion } from "framer-motion";

function StatCard({
  title,
  value,
  icon: Icon,
  color = "from-[#2D6A4F] to-[#40916C]",
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-[#214B3E]
      bg-gradient-to-br
      from-[#173B28]
      via-[#10281F]
      to-[#081B14]
      p-6
      shadow-2xl
      "
    >
      {/* Glow */}

      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#52B788]/10 blur-3xl" />

      <div className="relative flex items-center justify-between">

        <div>

          <p className="text-sm font-medium uppercase tracking-widest text-[#95D5B2]">
            {title}
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            {value}
          </h2>

        </div>

        <div
          className={`
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-3xl
            bg-gradient-to-br
            ${color}
            shadow-xl
          `}
        >
          <Icon
            size={36}
            className="text-white"
          />
        </div>

      </div>

      <div className="mt-5 h-1 rounded-full bg-[#214B3E]">

        <div className="h-full w-2/3 rounded-full bg-[#52B788]" />

      </div>

    </motion.div>
  );
}

export default StatCard;