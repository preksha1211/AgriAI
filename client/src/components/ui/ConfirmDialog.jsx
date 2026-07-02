import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle } from "lucide-react";

function ConfirmDialog({
  open,
  title = "Confirm Action",
  message = "Are you sure?",
  onCancel,
  onConfirm,
}) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="w-full max-w-md rounded-3xl border border-[#214B3E] bg-[#163A2A] p-8"
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
            <AlertTriangle className="text-red-500" size={32} />
          </div>

          <h2 className="text-center text-2xl font-bold text-white">
            {title}
          </h2>

          <p className="mt-3 text-center text-[#95D5B2]">
            {message}
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={onCancel}
              className="flex-1 rounded-xl border border-[#214B3E] py-3 text-white"
            >
              Cancel
            </button>

            <button
              onClick={onConfirm}
              className="flex-1 rounded-xl bg-red-600 py-3 text-white hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ConfirmDialog;