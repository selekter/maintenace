import Button from "@/Components/Button";
import InputLabel from "@/Components/InputLabel";
import LinkButton from "@/Components/LinkButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useEffect, useRef } from "react";

export default function CreateReport({ auth, license_plates }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    license_plate: "",
    report: "",
  });

  license_plates.sort((a, b) =>
    a.number_license_plate.localeCompare(b.number_license_plate)
  );

  const licensePlateRef = useRef(null);
  const reportRef = useRef(null);

  function saveReport(e) {
    e.preventDefault();

    if (!data.license_plate) {
      licensePlateRef.current.focus();
      return;
    }
    if (!data.report) {
      reportRef.current.focus();
      return;
    }

    post(route("report.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  }

  console.log(data);

  useEffect(() => {
    if (errors.report) {
      reportRef.current.focus();
    }
  }, [errors]);

  return (
    <Authenticated user={auth.user} header="สร้างรายงานการซ่อม">
      <Head title="Create report" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="shadow-2xs overflow-hidden bg-white sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <form onSubmit={saveReport} className="space-y-6">
                <div>
                  <InputLabel htmlFor="license_plate">ป้ายทะเบียน</InputLabel>
                  <select
                    className="block w-full rounded-xs border border-neutral-300 px-3 py-1 shadow-xs focus:border-indigo-200 focus:outline focus:outline-indigo-500 md:w-1/3"
                    name="license_plate"
                    id="license_plate"
                    required
                    defaultValue=""
                    onChange={(e) => setData("license_plate", e.target.value)}
                  >
                    <option value="" disabled>
                      เลือกป้ายทะเบียน
                    </option>
                    {license_plates.map((plate, key) => (
                      <option key={key} value={plate.id}>
                        {plate.number_license_plate}
                      </option>
                    ))}
                  </select>
                  {errors.license_plate && (
                    <div className="p-2 text-red-500">
                      {errors.license_plate}
                    </div>
                  )}
                </div>
                <div>
                  <InputLabel htmlFor="report">แจ้งซ่อม</InputLabel>
                  <TextInput
                    type="text"
                    id="report"
                    value={data.report}
                    onChange={(e) => setData("report", e.target.value)}
                    required
                    ref={reportRef}
                  />
                  {errors.report && (
                    <div className="text-red-500">{errors.report}</div>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:flex-row">
                  <Button
                    className="bg-blue-500 text-white"
                    disabled={processing}
                  >
                    Save
                  </Button>
                  <LinkButton
                    href={route("report.show")}
                    className="bg-red-500 text-white hover:bg-red-800"
                  >
                    Back
                  </LinkButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
