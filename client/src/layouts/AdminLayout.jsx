import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/layout/admin/AdminSidebar";
import AdminNavbar from "../components/layout/admin/AdminNavbar";

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <AdminSidebar />

      <div className="flex-1">

        <AdminNavbar />

        <main className="p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;