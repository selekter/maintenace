import LinkButton from "@/Components/LinkButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function ShowDriver({ auth, reports }) {
  return (
    <Authenticated user={auth.user} header="Driver">
      <Head title="Report" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 space-y-2">
              <div className="flex flex-col md:flex-row justify-end text-center">
                <LinkButton
                  className="bg-blue-500 hover:bg-blue-800 shadow shadow-blue-300 text-white"
                  href={route("report.create")}
                >
                  Create report
                </LinkButton>
              </div>
              <table className="table-auto w-full text-center shadow">
                <thead className="bg-blue-400">
                  <tr>
                    <th className="border text-xl">ป้ายทะเบียน</th>
                    <th className="border text-xl" colSpan={2}>
                      แจ้งซ่อม
                    </th>
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
                          <td className="border text-lg p-4">
                            <ul>
                              {plate.report.map((repair, repairKey) => (
                                <li key={repairKey}>{repair.report_repair}</li>
                              ))}
                            </ul>
                          </td>
                          <td className="border w-24 md:w-60">
                            <div className="flex justify-center flex-col md:flex-row gap-2">
                              <LinkButton
                                className="bg-yellow-500 hover:bg-yellow-800"
                                href={plate.number_license_plate}
                              >
                                แก้ไข
                              </LinkButton>
                              <LinkButton className="bg-red-500 hover:bg-red-800 text-white">
                                ลบ
                              </LinkButton>
                            </div>
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
