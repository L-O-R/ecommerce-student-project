import Button from "../../components/common/Button.jsx";
import user from "../../assets/images/userimg.png";
import { Link } from "react-router-dom";
import orders from "../../data/orderhistory.json";
import DashboardSidebar from "../../components/user/DashboardSidebar.jsx";

const Dashboard = () => {
  return (
    <div className="layout flex gap-6 p-10">
      <DashboardSidebar />
      <div className="flex flex-col gap-8 flex-1">
        <div className="flex gap-7 w-full ">
          <div className="flex-1 border rounded-2xl border-gray-200 flex flex-col items-center justify-center py-8">
          {/* <div className="w-[380px] border rounded-2xl border-gray-200 flex flex-col items-center justify-center"> */}
            <img src={user} alt="user" className="w-20 h-20 rounded-full" />
            <h2 className="text-gray-900 font-semibold text-xl mt-3">
              Dianne Russell
            </h2>
            <p className="text-gray-500">Customer</p>

            <Button className="text-green-600">
              Edit Profile
            </Button>
          </div>
           <div className="flex-1 border rounded-2xl border-gray-200 flex flex-col p-6 gap-4">
          {/* <div className="w-[380px]  border rounded-2xl border-gray-200 flex flex-col p-6 gap-4"> */}
            <h2 className="text-gray-400 font-semibold text-sm">
              BILLING ADDRESS
            </h2>

            <div className="flex flex-col gap-2">
              <h2 className="text-gray-900 font-semibold">
                Dianne Russell
              </h2>

              <p className="text-gray-500">
                4140 Parker Rd. Allentown, New Mexico 31134
              </p>

              <p className="text-gray-900">
                dainne.ressell@gmail.com
              </p>

              <Link to={"tel:6715550110"}>
                (671) 555-0110
              </Link>
            </div>

            <Button className="text-green-600 w-max">
              Edit Address
            </Button>
          </div>

        </div>

        {/* Order History Table */}
        <div className="border border-gray-200 rounded-2xl p-6">
          <div className="flex justify-between mb-4">
            <h2 className="font-semibold text-lg">
              Recent Order History
            </h2>

            <span className="text-green-600 cursor-pointer">
              View All
            </span>
          </div>

          <table className="w-full text-sm">
            <thead className="text-gray-7 bg-gray-05">
              <tr>
                <th className="text-left py-2">ORDER ID</th>
                <th className="text-left py-2">DATE</th>
                <th className="text-left py-2">TOTAL</th>
                <th className="text-left py-2">STATUS</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {orders.slice(0, 6).map((order) => (
                <tr key={order.id}>
                  <td className="py-3">{order.id}</td>
                  <td>{order.date}</td>
                  <td>
                    {order.total} ({order.products} Products)
                  </td>
                  <td>{order.status}</td>
                  <td className="text-green-600 cursor-pointer">
                    View Details
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;