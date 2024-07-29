import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function ShowDriver({ auth, drivers }) {
  return (
    <Authenticated user={auth.user} header="Driver">
      <Head title="Driver" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <table className="w-full text-center shadow">
                <thead className="bg-blue-400">
                  <tr>
                    <th className="border text-xl">ชื่อพนักงานขับรถ</th>
                    <th className="border text-xl">ทะเบียนที่ขับ</th>
                  </tr>
                </thead>
                <tbody>
                  {drivers.map((driver, driverKey) => (
                    <tr key={driverKey}>
                      <td className="border text-lg">{driver.name}</td>
                      <td className="border text-lg">
                        {driver.license_plate.number_license_plate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
