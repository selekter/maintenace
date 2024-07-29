import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

function Index() {
  const data = [
    {
      LicensePlate: "71-0840",
      Report: ["เปลี่ยนน้ำมันเฟื่องท้าย"],
    },
    {
      LicensePlate: "70-6969",
      Report: ["เปลี่ยนน้ำมันเครื่อง", "ปรับมุมกล้องใหม่"],
    },
  ];
  return (
    <MainLayout header="Home Index">
      <Head title="Maintain" />
      <div className="p-5">
        <table className="shadow w-full text-center text-xl bg-white">
          <thead className="bg-blue-400">
            <tr>
              <th className="p-2">ป้ายทะเบียน</th>
              <th className="p-2">แจ้งซ่อม</th>
            </tr>
          </thead>
          <tbody>
            {data.map((maintain, maintainIndex) => (
              <tr key={maintainIndex} className="hover:bg-neutral-200">
                <td className="p-2 border">{maintain.LicensePlate}</td>
                <td className="p-2 border">
                  <ul>
                    {maintain.Report?.map((report, reportIndex) => (
                      <li key={reportIndex}>{report}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}

export default Index;
