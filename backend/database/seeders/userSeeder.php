<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class userSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $menu = User::create([
            'name' => 'テストユーザー1',
            'email' => 'test1@test.com',
            'password' => 'test1_password'
        ]);
    }
}
