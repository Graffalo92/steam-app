<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Rules\CheckSteamUser;
use App\Services\SteamApiService;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request, SteamApiService $steamApiService): RedirectResponse
    {
        $request->validate([
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'steam_id' => ['required', 'string', 'max:255', new CheckSteamUser()],
        ]);

        $steam_response = $steamApiService->getSteamUser($request->steam_id);

        $user = User::create([
            'name' => $steam_response['response']['players'][0]['personaname'],
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'steam_id' => $request->steam_id,
            'avatar_url' =>  $steam_response['response']['players'][0]['avatarmedium'],
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
