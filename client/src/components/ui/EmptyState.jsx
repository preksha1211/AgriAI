import { motion } from "framer-motion";

function EmptyState({
  icon: Icon,
  title,
  description,
  buttonText,
  onButtonClick,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center rounded-3xl border border-dashed border-[#2D6A4F] bg-[#163A2A] px-10 py-20 text-center"
    >
      {Icon && (
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#214B3E]">
          <Icon size={45} className="text-[#52B788]" />
        </div>
      )}

      <h2 className="text-3xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-[#95D5B2]">
        {description}
      </p>

      {buttonText && (
        <button
          onClick={onButtonClick}
          className="mt-8 rounded-2xl bg-[#2D6A4F] px-7 py-3 font-semibold text-white hover:bg-[#40916C]"
        >
          {buttonText}
        </button>
      )}
    </motion.div>
  );
}

export default EmptyState;