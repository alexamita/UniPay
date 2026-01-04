import { ArrowRight } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100 flex flex-col items-center justify-center p-4 font-sans text-slate-800">
      {/* Header Section */}
      <header className="text-center max-w-2xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
          A unified utility and property management platform.
        </h1>
        <p className="text-lg text-slate-600 font-medium max-w-xl mx-auto">
          Simple, reliable, and built for you.
        </p>
      </header>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full px-4">
        {/* Tenant Card */}
        <div className="group bg-white rounded-2xl p-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_20px_40px_-12px_rgba(99,102,241,0.1)]">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
            I'm a Tenant
          </h2>
          <p className="text-slate-500 mb-8 leading-relaxed text-base">
            Pay your utility bills, view receipts, and manage your payments
            effortlessely.
          </p>
          <a
            href="#"
            className="mt-auto flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors"
          >
            Access Tenant App{" "}
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Manager Card */}
        <div className="group bg-white rounded-2xl p-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#00306f]/30 hover:shadow-[0_20px_40px_-12px_rgba(0,48,111,0.1)]">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
            I'm a Manager
          </h2>
          <p className="text-slate-500 mb-8 leading-relaxed text-base">
            Manage properties, upload bills, reconcile payments, and track all
            your tenants.
          </p>
          <a
            href="#"
            className="mt-auto flex items-center text-[#00306f] font-semibold group-hover:text-[#00204a] transition-colors"
          >
            Access Manager Dashboard{" "}
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
