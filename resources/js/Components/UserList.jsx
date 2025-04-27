import { usePage, router } from '@inertiajs/react';

export default function Example({ users }) {
    const authUser = usePage().props.auth.user;

    const handleUserClick = (userId) => {
        router.visit(`/profile/${userId}`);
    };

    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {users
          .filter((user) => user.name !== authUser.name) // Exclude the authenticated user
          .map((user) => (
            <div
              key={user.name}
              className="relative flex items-center bg-slate-700 space-x-3 rounded-lg px-6 py-5 hover:bg-slate-600 transition duration-300 ease-in-out"
              onClick={() => handleUserClick(user.id)} // Add onClick handler
              style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
            >
              <div className="shrink-0">
                <img alt="" src={user.avatar_url} className="size-10 rounded-md" />
              </div>
              <p className="text-lg text-white font-medium text-slate-400">
                {user.name}
              </p>
            </div>
          ))}
      </div>
    );
}