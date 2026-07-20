import DashboardCard from "../../components/admin/DashboardCard";

function AdminDashboard() {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <DashboardCard
          title="Total Sales"
          value="Rs.125,000"
        />

        <DashboardCard
          title="Products"
          value="124"
          color="text-blue-600"
        />

        <DashboardCard
          title="Orders"
          value="86"
          color="text-purple-600"
        />

        <DashboardCard
          title="Customers"
          value="52"
          color="text-orange-600"
        />

      </div>

    </div>
  );
}

export default AdminDashboard;