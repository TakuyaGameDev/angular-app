<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function getUsers(){
        $users = User::first();
        return response()->json([
            'users' => $users,
            'message' => "connection success",
        ]);
    }

    public function login(Request $request) {
        $account_id = $request->account_id;
        $password = $request->password;

        $loginUser = User::select('id','email', 'name')->where([
            ['email','=',$account_id],
            ['password','=',$password]
        ])->first();

        return response()->json([
            'loginUser' => $loginUser,
            'message' => 'login connection!'
        ]);
    }
}
