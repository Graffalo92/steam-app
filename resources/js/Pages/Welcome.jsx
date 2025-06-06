import {
    ArrowPathIcon,
    ChevronRightIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'
import {BoltIcon, CalendarDaysIcon, UsersIcon} from '@heroicons/react/24/outline'
import {ApplicationLogoMain} from "@/Components/ApplicationLogo.jsx";
import Video from '../../../public/logos/gg.mp4'
import {InfiniteSliderBasic} from "@/Components/Slider.jsx";
import {SteamIcon} from "@/Components/steam.jsx";
const primaryFeatures = [
    {
        name: 'Link Your Steam Account',
        description:
            'Securely connect your Steam profile to join our gaming community. This lets us sync your friends list and gaming stats automatically.',
        href: '#',
        icon: SteamIcon,
    },
    {
        name: 'Verify Your Email',
        description:
            'Enter and confirm your email address to receive community updates, event invites, and important security notifications.',
        href: '#',
        icon: UsersIcon,
    },
    {
        name: 'Import Your Game Library',
        description:
            'Select which of your Steam games you want to share with the community. Showcase your favorites and find new friends who play the same titles.',
        href: '#',
        icon: CalendarDaysIcon,
    },
];

const secondaryFeatures = [
    {
        name: 'Push to deploy.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple queues.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Advanced security.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Powerful API.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: Cog6ToothIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
        icon: ServerIcon,
    },
]
const stats = [
    {id: 1, name: 'Developers on the platform', value: '8,000+'},
    {id: 2, name: 'Daily requests', value: '900m+'},
    {id: 3, name: 'Uptime guarantee', value: '99.9%'},
    {id: 4, name: 'Projects deployed', value: '12m'},
]
const footerNavigation = {
    solutions: [
        {name: 'Hosting', href: '#'},
        {name: 'Data Services', href: '#'},
        {name: 'Uptime Monitoring', href: '#'},
        {name: 'Enterprise Services', href: '#'},
    ],
    support: [
        {name: 'Pricing', href: '#'},
        {name: 'Documentation', href: '#'},
        {name: 'Guides', href: '#'},
        {name: 'API Reference', href: '#'},
    ],
    company: [
        {name: 'About', href: '#'},
        {name: 'Blog', href: '#'},
        {name: 'Jobs', href: '#'},
        {name: 'Press', href: '#'},
        {name: 'Partners', href: '#'},
    ],
    legal: [
        {name: 'Claim', href: '#'},
        {name: 'Privacy', href: '#'},
        {name: 'Terms', href: '#'},
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'X',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'YouTube',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}

export default function Example() {
    return (
        <div className="bg-gray-900">
            <main>
                {/* Hero section */}
                <div className="relative isolate overflow-hidden">
                    {/*<svg*/}
                    {/*    aria-hidden="true"*/}
                    {/*    className="absolute inset-0 -z-10 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-white/10"*/}
                    {/*>*/}
                    {/*    <defs>*/}
                    {/*        <pattern*/}
                    {/*            x="50%"*/}
                    {/*            y={-1}*/}
                    {/*            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"*/}
                    {/*            width={200}*/}
                    {/*            height={200}*/}
                    {/*            patternUnits="userSpaceOnUse"*/}
                    {/*        >*/}
                    {/*            <path d="M.5 200V.5H200" fill="none" />*/}
                    {/*        </pattern>*/}
                    {/*    </defs>*/}
                    {/*    <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">*/}
                    {/*        <path*/}
                    {/*            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"*/}
                    {/*            strokeWidth={0}*/}
                    {/*        />*/}
                    {/*    </svg>*/}
                    {/*    <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0} />*/}
                    {/*</svg>*/}
                    {/*<div*/}
                    {/*    aria-hidden="true"*/}
                    {/*    className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"*/}
                    {/*>*/}
                    {/*    <div*/}
                    {/*        style={{*/}
                    {/*            clipPath:*/}
                    {/*                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',*/}
                    {/*        }}*/}
                    {/*        className="aspect-1108/632 w-[69.25rem] bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-20"*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-12 lg:flex lg:px-8 lg:py-20">
                        <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
                            <ApplicationLogoMain/>
                            {/*<div className="mt-24 sm:mt-32 lg:mt-16">*/}
                            {/*    <a href="#" className="inline-flex space-x-6">*/}
                  {/*<span*/}
                  {/*    className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm/6 font-semibold text-indigo-400 ring-1 ring-indigo-500/20 ring-inset">*/}
                  {/*  What's new*/}
                  {/*</span>*/}
                  {/*                  <span*/}
                  {/*                      className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-300">*/}
                  {/*  <span>Just shipped v1.0</span>*/}
                  {/*  <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-500"/>*/}
                  {/*</span>*/}
                  {/*              </a>*/}
                  {/*          </div>*/}
                            <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl">
                                Find gamers explore communities
                            </h1>
                            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                                Match your playstyle with players who love the same games: sync your Steam library, filter by skill or time zone, and instantly team up for co-op, challenges, or casual matches—all in one click.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a
                                    href="/register"
                                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                                >
                                    Register now
                                </a>
                                <a href="/login" className="text-sm/6 font-semibold text-white">
                                    Already have an account ?
                                </a>
                            </div>
                        </div>
                        <div
                            className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
                            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                                {/*<img*/}
                                {/*    alt="App screenshot"*/}
                                {/*    src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"*/}
                                {/*    width={2432}*/}
                                {/*    height={1442}*/}
                                {/*    className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"*/}
                                {/*/>*/}
                                <video
                                    className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                                    src={Video}
                                    autoPlay      // boolean prop
                                    muted         // silence it so browsers allow autoplay
                                    loop
                                    playsInline   // especially helpful on iOS
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center scroll-indicator">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-white animate-bounce"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12l-7.5 7.5L4.5 12"
                        />
                    </svg>
                </div>
                </div>



                {/* Logo cloud */}
                <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
                    <h2 className="text-center text-2xl font-semibold text-white pb-14">
                        The most compelling games
                    </h2>
                    <div
                        className="w-full">
                        <InfiniteSliderBasic/>
                    </div>
                </div>

                {/* Feature section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base/7 font-semibold text-indigo-400">All you need is a steam account</h2>
                        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                            Everything you need to get you started
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {primaryFeatures.map((feature) => (
                                <div key={feature.name} className="flex flex-col">
                                    <dt className="text-base/7 font-semibold text-white">
                                        <div
                                            className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                            <feature.icon aria-hidden="true" className="size-6 text-white"/>
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300">
                                        <p className="flex-auto">{feature.description}</p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>


            </main>

            {/* Footer */}
            <footer className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
                <div className="border-t border-white/10 py-12 md:flex md:items-center md:justify-between">
                    <div className="flex justify-center gap-x-6 md:order-2">
                        {footerNavigation.social.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                                <span className="sr-only">{item.name}</span>
                                <item.icon aria-hidden="true" className="size-6"/>
                            </a>
                        ))}
                    </div>
                    <p className="mt-8 text-center text-sm/6 text-gray-400 md:order-1 md:mt-0">
                        &copy; 2024 GrindMatch. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}
