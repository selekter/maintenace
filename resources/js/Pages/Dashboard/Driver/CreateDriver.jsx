import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function CreateDriver({ auth }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    driverName: "",
  });

  function submit(e) {
    e.preventDefault();

    post(route("driver.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  }
  return (
    <Authenticated user={auth.user} header="Create Driver">
      <Head title="Create Driver" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              CreateDriver
              <form onSubmit={submit}>
                <div className="py-3">
                  <label htmlFor="driverName">Driver Name</label>
                  <input
                    id="driverName"
                    type="text"
                    className="w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    value={data.driverName}
                    onChange={(e) => setData("driverName", e.target.value)}
                    autoFocus
                  />
                  {errors.driverName && <div>{errors.driverName}</div>}
                </div>
                <div className="flex flex-col md:flex-row">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    disabled={processing}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
