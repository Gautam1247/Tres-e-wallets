import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();
  const [showBalance, setShowBalance] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
            T
          </div>
          <span className="text-xl font-semibold">Tres E-wallet</span>
        </div>

        <button
          onClick={handleLogout}
          className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Log out
        </button>
      </nav>

      {/* MAIN CONTENT */}
      <div className="w-full h-screen px-6 py-8 grid grid-cols-3 gap-6">

        {/* LEFT PANEL — 30% */}
        <div className="mt-2 col-span-1 bg-white rounded-2xl shadow-sm p-6">

          {/* PROFILE */}
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full mb-4 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>

            <h2 className="text-xl font-semibold">Student Name</h2>
            <p className="text-sm text-slate-600">Course: B.Tech</p>
            <p className="text-sm text-slate-600">Branch: CSE</p>
            <p className="text-sm text-slate-600">Roll No: 123456</p>
            <p className="text-sm text-slate-600">ERP ID: ERP12345</p>
          </div>

          {/* CHECK BALANCE */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowBalance(!showBalance)}
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Check Balance
            </button>

            {showBalance && (
              <p className="mt-3 text-lg font-semibold text-blue-600">
                ₹ 2,450.00
              </p>
            )}
          </div>

          {/* TRANSACTION HISTORY */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Transaction History</h3>

            <div className="text-sm text-slate-600 space-y-2">
              <p>Paid ₹200 — Cafeteria</p>
              <p>Received ₹500 — Friend</p>
              <p>Paid ₹150 — Printing</p>
            </div>
          </div>

        </div>

        {/* RIGHT PANEL — 70% */}
        <div className="mt-2 col-span-2 bg-white rounded-2xl shadow-sm p-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <button className="py-6 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl text-lg font-semibold hover:from-green-500 hover:to-green-700 transition">
              Send
            </button>

            <button className="py-6 bg-gradient-to-r from-blue-400 to-cyan-600 text-white rounded-xl text-lg font-semibold hover:from-blue-500 hover:to-cyan-700 transition">
              Receive
            </button>

            <button className="py-6 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-xl text-lg font-semibold hover:from-purple-500 hover:to-purple-700 transition">
              Split Bill
            </button>

            <button className="py-6 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-xl text-lg font-semibold hover:from-orange-500 hover:to-orange-700 transition">
              Event Generation
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
