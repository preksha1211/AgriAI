import { useEffect, useMemo, useState } from "react";
import {
  Map,
  Plus,
  Sprout,
  Droplets,
  Ruler,
  ChevronRight,
} from "lucide-react";

import PageLayout from "../../components/layout/PageLayout";

import FieldCard from "../../components/fields/FieldCard";
import FieldFilters from "../../components/fields/FieldFilters";
import AddFieldModal from "../../components/fields/AddFieldModal";
import EditFieldModal from "../../components/fields/EditFieldModal";

import PrimaryButton from "../../components/ui/PrimaryButton";
import StatCard from "../../components/ui/StatCard";
import EmptyState from "../../components/ui/EmptyState";
import LoadingSkeleton from "../../components/ui/LoadingSkeleton";

import {
  getFields,
  deleteField,
} from "../../services/fieldService";

function Fields() {

  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [selectedField, setSelectedField] = useState(null);

  const [search, setSearch] = useState("");

  const [soilFilter, setSoilFilter] = useState("");

  const [irrigationFilter, setIrrigationFilter] =
    useState("");

  useEffect(() => {
    fetchFields();
  }, []);

  const fetchFields = async () => {
    try {
      setLoading(true);

      const data = await getFields();

      if (data.success) {
        setFields(data.fields);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this field?"))
      return;

    const data = await deleteField(id);

    if (data.success) {
      fetchFields();
    }
  };

  const handleEdit = (field) => {
    setSelectedField(field);
    setShowEditModal(true);
  };

  const filteredFields = useMemo(() => {

    return fields.filter((field) => {

      const matchesSearch =
        field.fieldName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        field.location
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesSoil =
        !soilFilter ||
        field.soilType === soilFilter;

      const matchesIrrigation =
        !irrigationFilter ||
        field.irrigationType ===
          irrigationFilter;

      return (
        matchesSearch &&
        matchesSoil &&
        matchesIrrigation
      );

    });

  }, [
    fields,
    search,
    soilFilter,
    irrigationFilter,
  ]);

  const totalArea = filteredFields.reduce(
    (sum, field) =>
      sum + Number(field.area),
    0
  );

  const soilTypes =
    new Set(
      filteredFields.map(
        (f) => f.soilType
      )
    ).size;

  const irrigationTypes =
    new Set(
      filteredFields.map(
        (f) => f.irrigationType
      )
    ).size;

  return (

    <PageLayout>

      {/* Breadcrumb */}

      <div className="mb-5 flex items-center gap-2 text-sm text-[#95D5B2]">

        Dashboard

        <ChevronRight size={16} />

        <span className="text-white">
          Fields
        </span>

      </div>

      {/* Header */}

      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-5xl font-bold text-white">
            Fields
          </h1>

          <p className="mt-3 text-lg text-[#B7E4C7]">
            Manage and monitor all your agricultural
            fields from one place.
          </p>

        </div>

        <PrimaryButton
          icon={Plus}
          onClick={() =>
            setShowAddModal(true)
          }
        >
          Add Field
        </PrimaryButton>

      </div>

      {/* Statistics */}

      <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Fields"
          value={filteredFields.length}
          icon={Map}
          color="from-green-500 to-emerald-600"
        />

        <StatCard
          title="Total Area"
          value={`${totalArea} Acres`}
          icon={Ruler}
          color="from-blue-500 to-cyan-600"
        />

        <StatCard
          title="Soil Types"
          value={soilTypes}
          icon={Sprout}
          color="from-yellow-500 to-orange-500"
        />

        <StatCard
          title="Irrigation"
          value={irrigationTypes}
          icon={Droplets}
          color="from-cyan-500 to-sky-600"
        />

      </div>

      {/* Filters */}

      <FieldFilters
        search={search}
        setSearch={setSearch}
        soilFilter={soilFilter}
        setSoilFilter={setSoilFilter}
        irrigationFilter={irrigationFilter}
        setIrrigationFilter={
          setIrrigationFilter
        }
      />

      {/* Section Header */}

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-3xl font-bold text-white">
          My Fields
        </h2>

        <span className="rounded-full bg-[#163A2A] px-5 py-2 text-[#95D5B2]">

          {filteredFields.length} Fields

        </span>

      </div>
            {/* Fields */}

      {loading ? (
        <LoadingSkeleton />
      ) : filteredFields.length === 0 ? (
        <EmptyState
          title="No Fields Found"
          description="Create your first agricultural field to start managing crops."
          buttonText="Add Field"
          onButtonClick={() => setShowAddModal(true)}
        />
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredFields.map((field) => (
            <FieldCard
              key={field._id}
              field={field}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Footer */}

      {filteredFields.length > 0 && (
        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-[#214B3E] bg-[#10281F] p-5 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-lg font-semibold text-white">
              {filteredFields.length} Field
              {filteredFields.length !== 1 ? "s" : ""}
            </p>

            <p className="text-sm text-[#95D5B2]">
              Total Area : {totalArea} Acres
            </p>
          </div>

          <div className="flex items-center gap-3">

            <button
              className="rounded-xl border border-[#214B3E] bg-[#163A2A] px-5 py-2 text-white transition hover:bg-[#214B3E]"
            >
              Previous
            </button>

            <button
              className="rounded-xl bg-gradient-to-r from-[#2D6A4F] to-[#40916C] px-5 py-2 font-semibold text-white"
            >
              1
            </button>

            <button
              className="rounded-xl border border-[#214B3E] bg-[#163A2A] px-5 py-2 text-white transition hover:bg-[#214B3E]"
            >
              Next
            </button>

          </div>

        </div>
      )}

      {/* Add Field */}

      <AddFieldModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSuccess={fetchFields}
      />

      {/* Edit Field */}

      <EditFieldModal
        open={showEditModal}
        onClose={() => setShowEditModal(false)}
        selectedField={selectedField}
        onSuccess={fetchFields}
      />

    </PageLayout>
  );
}

export default Fields;