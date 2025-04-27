import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UserList from '@/Components/UserList';

export default function Dashboard({ users }) {
    //console.log(users);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div>
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                    Welcome to the Dashboard
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Here you can search our users and view their details.
                </p>
            </div>

            <div className="py-8 mr-16">
                <UserList users={users} />
            </div>
        </AuthenticatedLayout>
    );
}
