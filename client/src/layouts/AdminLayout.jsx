import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminNavbar from "../components/admin/AdminNavbar";

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
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