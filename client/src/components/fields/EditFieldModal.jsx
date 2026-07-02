import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import Modal from "../ui/Modal";
import PrimaryButton from "../ui/PrimaryButton";

import { updateField } from "../../services/fieldService";

function EditFieldModal({
  open,
  onClose,
  selectedField,
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

  useEffect(() => {
    if (selectedField) {
      setFormData({
        fieldName: selectedField.fieldName || "",
        location: selectedField.location || "",
        area: selectedField.area || "",
        soilType: selectedField.soilType || "",
        irrigationType: selectedField.irrigationType || "",
      });
    }
  }, [selectedField]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await updateField(
        selectedField._id,
        formData
      );

      if (data.success) {
        toast.success("Field updated successfully");

        onSuccess();
        onClose();
      } else {
        toast.error(data.message || "Update failed");
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
      title="Edit Field"
    >
      <form
        onSubmit={handleSubmit}
        className="grid gap-5 md:grid-cols-2"
      >
        {/* Field Name */}

        <div className="space-y-2">
          <label className="text-sm text-[#95D5B2]">
            Field Name
          </label>

          <input
            name="fieldName"
            value={formData.fieldName}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-[#214B3E] bg-[#081B14] p-4 text-white outline-none focus:border-[#52B788]"
          />
        </div>

        {/* Location */}

        <div className="space-y-2">
          <label className="text-sm text-[#95D5B2]">
            Location
          </label>

          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-[#214B3E] bg-[#081B14] p-4 text-white outline-none focus:border-[#52B788]"
          />
        </div>

        {/* Area */}

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

        {/* Soil */}

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
            <option value="Loamy">Loamy</option>
            <option value="Clay">Clay</option>
            <option value="Sandy">Sandy</option>
            <option value="Silty">Silty</option>
            <option value="Peaty">Peaty</option>
            <option value="Chalky">Chalky</option>
          </select>
        </div>

        {/* Irrigation */}

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm text-[#95D5B2]">
            Irrigation Type
          </label>

          <select
            name="irrigationType"
            value={formData.irrigationType}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-[#214B3E] bg-[#081B14] p-4 text-white outline-none focus:border-[#52B788]"
          >
            <option value="">Select Irrigation</option>
            <option value="Drip">Drip</option>
            <option value="Sprinkler">Sprinkler</option>
            <option value="Flood">Flood</option>
            <option value="Manual">Manual</option>
          </select>
        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-4 pt-2 md:col-span-2">
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
            {loading ? "Updating..." : "Update Field"}
          </PrimaryButton>
        </div>
      </form>
    </Modal>
  );
}

export default EditFieldModal;