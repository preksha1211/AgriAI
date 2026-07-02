import { motion } from "framer-motion";

function SectionCard({
  title,
  subtitle,
  children,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`rounded-3xl border border-[#214B3E] bg-[#163A2A] p-6 shadow-lg ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-2xl font-bold text-white">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="mt-2 text-[#95D5B2]">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {children}
    </motion.div>
  );
}

export default SectionCard;