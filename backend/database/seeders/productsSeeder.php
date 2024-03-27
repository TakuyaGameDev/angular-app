<?php

namespace Database\Seeders;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class productsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $menu = Product::create([
            'kind_id' => 1,
            'name' => 'テスト商品1',
            'price' => 1000,
            'no' => 99999999
        ]);
    }
}
