function SectionCard({ title, children, className = "" }) {
  return (
    <div
      className={`bg-[#163A2A] border border-[#214B3E] rounded-2xl p-6 ${className}`}
    >
      <h2 className="text-lg font-semibold text-white mb-5">{title}</h2>

      {children}
    </div>
  );
}

export default SectionCard;