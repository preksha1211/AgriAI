import { useState } from "react";
import { toast } from "react-hot-toast";

import Modal from "../ui/Modal";
import PrimaryButton from "../ui/PrimaryButton";

import { createField } from "../../services/fieldService";

function AddFieldModal({
  open,
  onClose,
  onSuccess,
}) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fieldName: "",
    location: "",
    area: "",
    soilType: "",
    irrigationType: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormData({
      fieldName: "",
      location: "",
      area: "",
      soilType: "",
      irrigationType: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await createField(formData);

      if (data.success) {
        toast.success("Field added successfully");

        resetForm();
        onSuccess();
        onClose();
      } else {
        toast.error(data.message || "Unable to create field");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Add New Field"
    >
      <form
        onSubmit={handleSubmit}
        className="grid gap-5 md:grid-cols-2"
      >
        <div className="space-y-2">
          <label className="text-sm text-[#95D5B2]">
            Field Name
          </label>

          <input
            name="fieldName"
            value={formData.fieldName}
            onChange={handleChange}
            placeholder="North Farm"
            required
            className="w-full rounded-2xl border border-[#214B3E] bg-[#081B14] p-4 text-white outline-none focus:border-[#52B788]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#95D5B2]">
            Location
          </label>

          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Jaipur"
            required
            className="w-full rounded-2xl border border-[#214B3E] bg-[#081B14] p-4 text-white outline-none focus:border-[#52B788]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#95D5B2]">
            Area (Acres)
          </label>

          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-[#214B3E] bg-[#081B14] p-4 text-white outline-none focus:border-[#52B788]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#95D5B2]">
            Soil Type
          </label>

          <select
            name="soilType"
            value={formData.soilType}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-[#214B3E] bg-[#081B14] p-4 text-white outline-none focus:border-[#52B788]"
          >
            <option value="">Select Soil</option>
            <option>Loamy</option>
            <option>Clay</option>
            <option>Sandy</option>
            <option>Silty</option>
            <option>Peaty</option>
            <option>Chalky</option>
          </select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm text-[#95D5B2]">
            Irrigation
          </label>

          <select
            name="irrigationType"
            value={formData.irrigationType}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-[#214B3E] bg-[#081B14] p-4 text-white outline-none focus:border-[#52B788]"
          >
            <option value="">Select Irrigation</option>
            <option>Drip</option>
            <option>Sprinkler</option>
            <option>Flood</option>
            <option>Manual</option>
          </select>
        </div>

        <div className="flex justify-end gap-4 md:col-span-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl border border-[#214B3E] px-6 py-3 text-white transition hover:bg-[#163A2A]"
          >
            Cancel
          </button>

          <PrimaryButton
            type="submit"
            disabled={loading}
          >
            {loading ? "Saving..." : "Create Field"}
          </PrimaryButton>
        </div>
      </form>
    </Modal>
  );
}

export default AddFieldModal;