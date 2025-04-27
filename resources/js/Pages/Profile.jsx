import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Profile({ user }) {
    //console.log(user);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="max-w-full mx-auto py-10 pr-12">
                <div className="flex items-center space-x-6">
                    <img
                        src={user.avatar_url || '/default-avatar.png'}
                        alt="Profile Avatar"
                        className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">{user.name}</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Joined: {new Date(user.created_at).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }).replace(',', '')}</p>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Games</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {user.games && user.games.length > 0 ? (
                        user.games.every((game) => game.playtime_forever === 0) ? (
                            // Edge case: All games have 0 playtime
                            user.games.map((game, index) => (
                                <div key={index} className="flex flex-row px-4 py-2 bg-white dark:bg-gray-800 rounded-lg items-center justify-between shadow">
                                    <div className='flex flex-col justify-center'>
                                        <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">{game.name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            (Playtime hidden due to privacy settings)
                                        </p>
                                    </div>
                                    <img className='h-10 w-10' src={`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`} alt={`${game.name} Thumbnail`} />
                                </div>
                            ))
                        ) : (
                            // Default case: Filter and sort games by playtime
                            user.games
                                .filter((game) => game.playtime_forever > 0) // Filter out games with 0 playtime
                                .sort((a, b) => b.playtime_forever - a.playtime_forever) // Sort by most played
                                .map((game, index) => (
                                    <div key={index} className="flex flex-row px-4 py-2 bg-white dark:bg-gray-800 rounded-lg items-center justify-between shadow">
                                        <div className='flex flex-col justify-center'>
                                            <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">{game.name}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                Total hours played: {(Math.ceil(game.playtime_forever / 30) / 2).toFixed(1)}
                                            </p>
                                        </div>
                                        <img className='h-10 w-10' src={`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`} alt={`${game.name} Thumbnail`} />
                                    </div>
                                ))
                        )
                    ) : (
                        <div className='flex flex-col items-start justify-start'>
                            <p className="text-gray-500 dark:text-gray-400">No games listed.</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">(Hidden due to privacy settings)</p>                                
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}