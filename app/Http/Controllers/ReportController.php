<?php

namespace App\Http\Controllers;

use App\Models\LicensePlate;
use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reports = LicensePlate::has('report')->with('report')->get();
        return Inertia::render('Dashboard/Report/ShowReport', ['reports' => $reports]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $license_plates = LicensePlate::get();
        return Inertia::render('Dashboard/Report/CreateReport', ['license_plates' => $license_plates, 'csrf_token' => csrf_token()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'license_plate' => 'required',
            'report' => 'required'
        ]);

        $existingPlate = LicensePlate::where('id', $validated['license_plate'])->first();

        if ($existingPlate) {
            $report = new Report();
            $report->report_repair = $validated['report'];
            $report->license_plate_id = $existingPlate->id;
            $report->save();

            return to_route('report.show');
        } else {
            return Redirect::back()->withErrors(['license_plate' => 'ไม่พบเลขทะเบียนในระบบ'])->withInput();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $licensePlate = LicensePlate::find($id);
        return Inertia::render('Dashboard/Report/EditReport', ['license_plate' => $licensePlate]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
