import { motion } from "framer-motion";

function PageHeader({
  title,
  subtitle,
  icon: Icon,
  buttonText,
  onButtonClick,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-8 flex flex-col gap-5 rounded-3xl border border-[#214B3E] bg-[#163A2A] p-8 lg:flex-row lg:items-center lg:justify-between"
    >
      <div className="flex items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2D6A4F]">
          {Icon && <Icon size={30} className="text-white" />}
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white">
            {title}
          </h1>

          <p className="mt-2 text-[#95D5B2]">
            {subtitle}
          </p>
        </div>
      </div>

      {buttonText && (
        <button
          onClick={onButtonClick}
          className="rounded-2xl bg-[#2D6A4F] px-6 py-3 font-semibold text-white transition hover:bg-[#40916C]"
        >
          {buttonText}
        </button>
      )}
    </motion.div>
  );
}

export default PageHeader;