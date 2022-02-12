<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
// use Tymon\JWTAuth\Contracts\JWTAuth;
use JWTAuth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    //
    public function login(Request $request){
         $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed',
        ]);    

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        if(! $token = JWTAuth::attempt($validator->validated())){
            return response()->json(['error' => 'unauthorized']);
        }

        return $this->createNewToken($token);
    }

    public function register(){
        
    }

    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'user' => auth()->user()
        ]);
    }
}
