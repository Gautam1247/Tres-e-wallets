import { ShieldCheck, Zap, Globe, BadgeCheck } from "lucide-react";
function Landing(){
    return(
    <>
    <div className="bg-slate-50 text-slate-900">
      
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          {/* Replace with your logo */}
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
            T
          </div>
          <span className="text-xl font-semibold">Tres E-wallet</span>
        </div>

        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Log in
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white"></div>

        {/* subtle blockchain grid effect */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_#3b82f6_1px,_transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Fast. Secure. <span className="text-blue-600">Borderless</span> Payments.
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Send and receive money instantly with blockchain-powered security,
            transparent fees, and global accessibility.
          </p>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="p-6 rounded-2xl border border-slate-200 hover:shadow-md transition">
            <ShieldCheck className="text-blue-600 mb-3" size={28} />
            <h3 className="font-semibold mb-1">Bank-grade Security</h3>
            <p className="text-sm text-slate-600">
              End-to-end encryption and blockchain verification.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 hover:shadow-md transition">
            <Zap className="text-blue-600 mb-3" size={28} />
            <h3 className="font-semibold mb-1">Instant Settlements</h3>
            <p className="text-sm text-slate-600">
              Transactions confirmed in seconds globally.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 hover:shadow-md transition">
            <Globe className="text-blue-600 mb-3" size={28} />
            <h3 className="font-semibold mb-1">Global Access</h3>
            <p className="text-sm text-slate-600">
              Send payments anywhere without borders.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 hover:shadow-md transition">
            <BadgeCheck className="text-blue-600 mb-3" size={28} />
            <h3 className="font-semibold mb-1">Transparent Fees</h3>
            <p className="text-sm text-slate-600">
              No hidden charges, full transaction visibility.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-slate-100 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Tres E-wallet. All rights reserved.
      </footer>

    </div>
</>
  );
}
export default Landing;