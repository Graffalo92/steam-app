<?php

namespace App\Rules;

use App\Services\SteamApiService;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class CheckSteamUser implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $check = new SteamApiService();

        $response = $check->getSteamUser($value);

        if (! is_array($response) || empty($response['response'])) {
            $fail('Could not reach Steam API.');
            return;
        }

        $players = $response['response']['players'] ?? [];
        if (count($players) === 0) {
            $fail('No Steam user found for that ID.');
            return;
        }


        if($response['response']['players'][0]['steamid'] != $value) {
            $fail('Steam id is wrong');
        }
    }
}
