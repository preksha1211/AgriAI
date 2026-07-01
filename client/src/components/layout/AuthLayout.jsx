function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-[#081C15] flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-[#214B3E] bg-[#163A2A] p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#52B788]">
            AgriAI
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-white">
            {title}
          </h2>

          <p className="mt-2 text-[#B7E4C7]">
            {subtitle}
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}

export default AuthLayout;