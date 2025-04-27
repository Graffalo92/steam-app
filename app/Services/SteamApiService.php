<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class SteamApiService
{
    protected $SteamKey;
    protected $steamlink;
    public function __construct()
    {
        $this->SteamKey = env('STEAM_SECRET');
        $this->steamlink = "http://api.steampowered.com";
    }


    public function getSteamUser(string $steamId) {

        return Http::withUrlParameters([
            'endpoint' => $this->steamlink,
            'feature' => 'ISteamUser',
            'action' => 'GetPlayerSummaries',
            'version' => 'v0002',
        ])->get('{+endpoint}/{feature}/{action}/{version}', ["key" => $this->SteamKey,  "steamids" => $steamId])->json();

    }

    public function getSteamUserGames(string $steamId) {

        return Http::withUrlParameters([
            'endpoint' => $this->steamlink,
            'feature' => 'IPlayerService',
            'action' => 'GetOwnedGames',
            'version' => 'v0001',
        ])->get('{+endpoint}/{feature}/{action}/{version}', ["key" => $this->SteamKey,  "steamid" => $steamId, "include_appinfo" => 1, "include_played_free_games" => 1])->json();

    }
}
