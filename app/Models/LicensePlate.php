<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class LicensePlate extends Model
{
    use HasFactory;

    public function driver(): BelongsTo
    {
        return $this->belongsTo(Driver::class);
    }

    public function report(): HasMany
    {
        return $this->hasMany(Report::class);
    }
}
