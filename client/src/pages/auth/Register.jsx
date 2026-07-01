import AuthLayout from "../../components/layout/AuthLayout";

function Register() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Create your AgriAI account to start managing your farm."
    >
      <form className="space-y-5">
        <div>
          <label className="mb-2 block text-sm text-[#B7E4C7]">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-[#214B3E] bg-[#0B241C] px-4 py-3 text-white outline-none focus:border-[#52B788]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-[#B7E4C7]">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-[#214B3E] bg-[#0B241C] px-4 py-3 text-white outline-none focus:border-[#52B788]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-[#B7E4C7]">
            Password
          </label>

          <input
            type="password"
            placeholder="Create a password"
            className="w-full rounded-xl border border-[#214B3E] bg-[#0B241C] px-4 py-3 text-white outline-none focus:border-[#52B788]"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#2D6A4F] py-3 font-semibold text-white transition hover:bg-[#40916C]"
        >
          Create Account
        </button>
      </form>
    </AuthLayout>
  );
}

export default Register;