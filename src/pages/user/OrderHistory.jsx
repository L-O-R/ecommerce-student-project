import DashboardSidebar from "../../components/user/DashboardSidebar";
import orders from "../../data/orderhistory.json";

const OrderHistory = () => {
    return (
        <div className="flex gap-6 p-10">

            {/* Sidebar */}
            <DashboardSidebar />

            {/* Order Table */}
            <div className="flex-1 border border-gray-200 rounded-xl p-6">

                <h2 className="text-lg font-semibold mb-4">
                    Order History
                </h2>

                <table className="w-full text-sm">

                    <thead className="bg-gray-100 text-gray-500">
                        <tr>
                            <th className="text-left py-3 px-2">ORDER ID</th>
                            <th className="text-left py-3 px-2">DATE</th>
                            <th className="text-left py-3 px-2">TOTAL</th>
                            <th className="text-left py-3 px-2">STATUS</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>

                        {orders.map((order) => (
                            <tr key={order.id}>

                                <td className="py-3 px-2">{order.id}</td>

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
    );
};

export default OrderHistory;