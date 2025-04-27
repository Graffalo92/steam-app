import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Profile({ user }) {
    console.log(user);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-6 ">
                    <div className="relative w-full flex intems-center bg-slate-700 spacce-x-3 rounded-lg px-6 py-5">
                        <img
                            src={user.avatar_url || '/default-avatar.png'}
                            alt="Profile Avatar"
                            className="w-24 h-24 rounded-full object-cover"
                        />
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 ml-5">{user.name}</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 ml-10">Joined: {new Date(user.created_at).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }).replace(',', '')}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mx-20 mb-4">Games</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {user.games && user.games.length > 0 ? (
                            user.games.map((game, index) => (
                                <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                                    <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">{game.name}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{game.genre}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 dark:text-gray-400 ml-20">No games listed.</p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}