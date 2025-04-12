<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use App\Models\LicensePlate;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DriverController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $drivers = Driver::with('licensePlate')->get();
        return Inertia::render('Dashboard/Driver/ShowDriver', ['drivers' => $drivers]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Driver/CreateDriver', ['csrf_token' => csrf_token()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validation = $request->validate([
            'driverName' => 'required',
            'licensePlate' => 'required'
        ]);

        $driver = new Driver();
        $driver->name = $request->driverName;
        $driver->save();

        $plate = new LicensePlate();
        $plate->number_license_plate = $request->licensePlate;
        $plate->driver_id = $driver->id;

        $plate->save();

        return to_route('driver.show');
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
        //
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
