<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        User::create([
            'first_name'=> 'Hala',
            'last_name'=> 'salim',
            'email' => 'admin@app.com',
            'password' => Hash::make('123'),
        ]);
    }
}
