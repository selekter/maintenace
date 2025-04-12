import Button from "@/Components/Button";
import LinkButton from "@/Components/LinkButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function ShowDriver({ auth, reports }) {
  console.log(reports);

  const removeReport = (id) => (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "success",
    });
  };

  return (
    <Authenticated user={auth.user} header="แจ้งซ่อม">
      <Head title="Report" />
      <div className="flex flex-col justify-end text-center md:flex-row">
        <LinkButton
          className="bg-blue-500 text-white shadow-xs shadow-blue-300 hover:bg-blue-800"
          href={route("report.create")}
        >
          Create report
        </LinkButton>
      </div>
      <table className="w-full table-auto text-center shadow-xs">
        <thead className="border bg-blue-400">
          <tr>
            <th className="border border-blue-200 p-2 text-xl">ป้ายทะเบียน</th>
            <th className="border border-blue-200 p-2 text-xl" colSpan={2}>
              แจ้งซ่อม
            </th>
          </tr>
        </thead>
        <tbody>
          {reports.length > 0 ? (
            <>
              {reports.map((plate, plateKey) => (
                <tr key={plateKey}>
                  <td className="border border-blue-200 text-lg">
                    {plate.number_license_plate}
                  </td>
                  <td className="border border-blue-200 p-4 text-lg">
                    <ul>
                      {plate.report.map((repair, repairKey) => (
                        <li key={repairKey}>{repair.report_repair}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="w-24 border border-blue-200 md:w-60">
                    <div className="flex flex-col justify-center gap-2 md:flex-row">
                      <LinkButton
                        className="bg-yellow-500 hover:bg-yellow-800"
                        href={route("report.edit", plate.id)}
                      >
                        แก้ไข
                      </LinkButton>
                      <Button
                        onClick={removeReport(plate.id)}
                        className="bg-red-500 text-white hover:bg-red-800"
                      >
                        ลบ
                      </Button>
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
    </Authenticated>
  );
}
