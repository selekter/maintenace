import Button from "@/Components/Button";
import InputLabel from "@/Components/InputLabel";
import LinkButton from "@/Components/LinkButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useEffect, useRef } from "react";
import Swal from "sweetalert2";

export default function CreateDriver({ auth, csrf_token }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    driverName: "",
    licensePlate: "",
  });

  const driverNameRef = useRef(null);
  const licenseRef = useRef(null);

  function submit(e) {
    e.preventDefault();

    console.log(data);

    if (!data.driverName) {
      driverNameRef.current.focus();
      return;
    }

    if (!data.licensePlate) {
      licenseRef.current.focus();
      return;
    }

    post(route("driver.store"), {
      _token: csrf_token + "-.-",
      preserveScroll: true,
      onSuccess: () => {
        reset(),
          Swal.fire({
            title: "บันทึกข้อมูลสำเร็จ",
            icon: "success",
            text: "บันทึกข้อมูลเรียบร้อยแล้ว",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
      },
    });
  }

  useEffect(() => {
    if (errors.driverName) {
      driverNameRef.current.focus();
    } else if (errors.licensePlate) {
      licenseRef.current.focus();
    } else {
      driverNameRef.current.focus();
    }
  }, [errors]);

  return (
    <Authenticated user={auth.user} header="Create Driver">
      <Head title="Create Driver" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-white shadow-2xs sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <h1 className="text-2xl font-bold">สร้างพนักงานขับรถ</h1>
              <form onSubmit={submit}>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  <div className="py-2">
                    <InputLabel htmlFor="driverName">
                      ชื่อพนักงานขับรถ
                    </InputLabel>
                    <input
                      id="driverName"
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-1 shadow-xs focus:border-indigo-200 focus:outline focus:outline-indigo-500"
                      value={data.driverName}
                      onChange={(e) => setData("driverName", e.target.value)}
                      ref={driverNameRef}
                      required
                    />
                    {errors.driverName && (
                      <div className="text-red-500">{errors.driverName}</div>
                    )}
                  </div>
                  <div className="py-2">
                    <InputLabel htmlFor="licensePlate">ป้ายทะเบียน</InputLabel>
                    <input
                      id="licensePlate"
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-1 shadow-xs focus:border-indigo-200 focus:outline focus:outline-indigo-500"
                      value={data.licensePlate}
                      onChange={(e) => setData("licensePlate", e.target.value)}
                      ref={licenseRef}
                      required
                    />
                    {errors.licensePlate && (
                      <div className="text-red-500">{errors.licensePlate}</div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 md:flex-row">
                    <Button
                      type="submit"
                      className="bg-blue-500 text-white hover:bg-blue-800"
                      disabled={processing}
                    >
                      Submit
                    </Button>
                    <LinkButton
                      href={route("driver.show")}
                      className="bg-red-500 text-white hover:bg-red-800"
                    >
                      Back
                    </LinkButton>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
