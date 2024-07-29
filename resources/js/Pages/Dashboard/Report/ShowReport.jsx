import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function ShowDriver({ auth, reports }) {
  return (
    <Authenticated user={auth.user} header="Driver">
      <Head title="Report" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <table className="w-full text-center shadow">
                <thead className="bg-blue-400">
                  <tr>
                    <th className="border text-xl">ป้ายทะเบียน</th>
                    <th className="border text-xl">แจ้งซ่อม</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.length > 0 ? (
                    <>
                      {reports.map((plate, plateKey) => (
                        <tr key={plateKey}>
                          <td className="border text-lg">
                            {plate.number_license_plate}
                          </td>
                          <td className="border text-lg">
                            <ul>
                              {plate.report.map((repair, repairKey) => (
                                <li key={repairKey}>{repair.report_repair}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <tr>
                      <td colSpan={2} className="border text-lg text-red-500">
                        ไม่มีการแจ้งซ่อม
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
