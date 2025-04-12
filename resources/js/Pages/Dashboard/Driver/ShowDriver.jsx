import LinkButton from "@/Components/LinkButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function ShowDriver({ auth, drivers }) {
  console.log(drivers);
  drivers.sort((a, b) =>
    a.license_plate.number_license_plate.localeCompare(
      b.license_plate.number_license_plate
    )
  );

  return (
    <Authenticated user={auth.user} header="พนักงานขับรถ">
      <Head title="Driver" />
      <div className="flex flex-col justify-end text-center md:flex-row">
        <LinkButton
          href={route("driver.create")}
          className="bg-blue-500 text-white shadow-xs shadow-blue-300 hover:bg-blue-800"
        >
          Create Driver
        </LinkButton>
      </div>
      <table className="w-full text-center shadow-xs">
        <thead className="bg-blue-400">
          <tr>
            <th className="border border-blue-200 p-2 text-lg">
              ชื่อพนักงานขับรถ
            </th>
            <th className="border border-blue-200 p-2 text-lg">ทะเบียน</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver, driverKey) => (
            <tr key={driverKey}>
              <td className="border border-blue-200 p-2">{driver.name}</td>
              <td className="border border-blue-200 p-2">
                {driver.license_plate.number_license_plate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Authenticated>
  );
}
