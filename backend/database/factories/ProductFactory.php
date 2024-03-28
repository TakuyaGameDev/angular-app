<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;
use DateTime;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'kind_id' => $this->faker->randomNumber(8),
            'name' => $this->faker->name(),
            'price' => $this->faker->randomNumber(8),
            'no' => $this->faker->randomNumber(8),
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ];
    }
}
