import Button from "@/Components/Button";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useEffect, useRef } from "react";

export default function CreateReport({ auth, license_plates }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    license_plate: "",
    report: "",
  });

  const licensePlateRef = useRef(null);
  const reportRef = useRef(null);

  function saveReport(e) {
    e.preventDefault();

    post(route("report.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  }

  useEffect(() => {
    if (errors.license_plate) {
      licensePlateRef.current.focus();
    } else if (errors.report) {
      reportRef.current.focus();
    }
  }, [errors]);

  return (
    <Authenticated user={auth.user} header="Create report">
      <Head title="Create report" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <form onSubmit={saveReport} className="space-y-6">
                <div>
                  <InputLabel htmlFor="license_plate">ป้ายทะเบียน</InputLabel>
                  <input
                    id="license_plate"
                    type="text"
                    className="w-full rounded border border-neutral-300"
                    value={data.license_plate}
                    onChange={(e) => setData("license_plate", e.target.value)}
                    ref={licensePlateRef}
                  />
                  {errors.license_plate && (
                    <div className="text-red-500 p-2">
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
                    ref={reportRef}
                  />
                  {errors.report && (
                    <div className="text-red-500">{errors.report}</div>
                  )}
                </div>
                <div className="flex flex-col md:flex-row">
                  <Button
                    className="bg-blue-500 text-white"
                    disabled={processing}
                  >
                    Save
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
