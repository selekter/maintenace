import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function EditReport({ auth, licensePlate }) {
  console.log(licensePlate);

  return (
    <Authenticated user={auth.user} header="แก้ไขแจ้งซ่อม">
      <Head title="Edit Report" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-white shadow-2xs sm:rounded-lg">
            <div className="space-y-2 p-6 text-gray-900">
              <div>EditReport</div>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}

export default EditReport;
