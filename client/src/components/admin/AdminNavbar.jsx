import { FiBell, FiUser } from "react-icons/fi";

function AdminNavbar() {
  return (
    <header className="bg-white shadow px-8 py-5 flex justify-between items-center">

      <h2 className="text-2xl font-bold">
        Admin Dashboard
      </h2>

      <div className="flex items-center gap-6">

        <button className="text-2xl">
          <FiBell />
        </button>

        <div className="flex items-center gap-3">
          <div className="bg-green-600 w-10 h-10 rounded-full flex items-center justify-center text-white">
            <FiUser />
          </div>

          <div>
            <p className="font-semibold">
              Administrator
            </p>

            <p className="text-sm text-gray-500">
              admin@freshmarket.com
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}

export default AdminNavbar;
