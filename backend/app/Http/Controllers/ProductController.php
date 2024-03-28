<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function getProductList() {
        $products = Product::get();

        return response()->json([
            'items' => $products,
            'message' => "get ProductList OK",
        ]);
    }
}
