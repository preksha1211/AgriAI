import { motion } from "framer-motion";

function PrimaryButton({
  children,
  icon: Icon,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-3
        rounded-2xl
        bg-gradient-to-r
        from-[#2D6A4F]
        to-[#40916C]
        px-7
        py-3.5
        text-white
        font-semibold
        shadow-lg
        transition-all
        duration-300
        hover:shadow-[#52B788]/40
        hover:brightness-110
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      {Icon && <Icon size={20} />}

      {children}
    </motion.button>
  );
}

export default PrimaryButton;