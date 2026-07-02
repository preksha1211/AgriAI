import { motion } from "framer-motion";

function PageLayout({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-transparent"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-6
          py-7
          lg:px-8
          xl:px-10
        "
      >
        {children}
      </div>
    </motion.main>
  );
}

export default PageLayout;