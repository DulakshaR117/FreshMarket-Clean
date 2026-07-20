import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiBox,
  FiLayers,
  FiShoppingBag,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi";

const menuItems = [
  {
    name: "Dashboard",
    icon: <FiGrid />,
    path: "/admin",
  },
  {
    name: "Products",
    icon: <FiBox />,
    path: "/admin/products",
  },
  {
    name: "Categories",
    icon: <FiLayers />,
    path: "/admin/categories",
  },
  {
    name: "Orders",
    icon: <FiShoppingBag />,
    path: "/admin/orders",
  },
  {
    name: "Customers",
    icon: <FiUsers />,
    path: "/admin/customers",
  },
  {
    name: "Analytics",
    icon: <FiBarChart2 />,
    path: "/admin/analytics",
  },
];

function AdminSidebar() {
  return (
    <aside className="w-64 bg-green-700 text-white min-h-screen p-6">

      <h1 className="text-3xl font-bold mb-10">
        FreshMarket
      </h1>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/admin"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-white text-green-700"
                  : "hover:bg-green-600"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>

    </aside>
  );
}

export default AdminSidebar;
