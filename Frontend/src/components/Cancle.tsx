import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CancelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const CancelModal = ({ isOpen, onClose, onConfirm }: CancelModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-background border border-gold text-white dark:text-white rounded-2xl shadow-2xl p-8 w-full max-w-sm"
      >
        <h2 className="text-xl font-bold text-gold mb-4">Cancel Reservation</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Are you sure you want to cancel this reservation? This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-4">
          <Button
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-black transition-all"
            onClick={onClose}
          >
            No, Keep It
          </Button>
          <Button
            className="bg-red-600 text-white hover:bg-red-700 transition-all"
            onClick={onConfirm}
          >
            Yes, Cancel
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default CancelModal;
