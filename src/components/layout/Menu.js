import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}
            <ul className="hidden xl:flex">
                {/* <li className="relative group">
                    <Link className="menu-item" href="/">Home</Link>
                    <ul className="absolute invisible px-6 py-4 mt-8 transition-all duration-500 rounded-md shadow-sm opacity-0 z-100 left-4 bg-neutral-0 dark:bg-neutral-dark-0 min-w-48 group-hover:opacity-100 group-hover:visible group-hover:mt-4">
                        <li><Link href="/" className="menu-sub-item">Home page 01</Link></li>
                        <li><Link href="/index-2" className="menu-sub-item">Home page 02</Link></li>
                        <li><Link href="/index-3" className="menu-sub-item">Home page 03</Link></li>
                    </ul>
                </li> */}
                <li className="relative group">
                    <Link className="menu-item" href="/#">Blog</Link>
                    <ul className="absolute invisible px-6 py-4 mt-8 transition-all duration-500 rounded-md shadow-sm opacity-0 z-100 left-4 bg-neutral-0 dark:bg-neutral-dark-0 min-w-48 group-hover:opacity-100 group-hover:visible group-hover:mt-4">
                        <li><Link href="/category" className="menu-sub-item">Category 01</Link></li>
                        <li><Link href="/category-2" className="menu-sub-item">Category 02</Link></li>
                        <li><Link href="/category-3" className="menu-sub-item">Category 03</Link></li>
                        <li><Link href="/category-4" className="menu-sub-item">Category 04</Link></li>
                        <li><Link href="/single" className="menu-sub-item">Single 01</Link></li>
                        <li><Link href="/single-2" className="menu-sub-item">Single 02</Link></li>
                    </ul>
                </li>
                <li className="relative group">
                    <Link className="menu-item" href="/#">About me</Link>
                </li>
                <li className="relative group">
                    <Link className="menu-item" href="/#">Private Area</Link>
                    <ul className="absolute invisible px-6 py-4 mt-8 transition-all duration-500 rounded-md shadow-sm opacity-0 z-100 left-4 bg-neutral-0 dark:bg-neutral-dark-0 min-w-48 group-hover:opacity-100 group-hover:visible group-hover:mt-4">
                        <li><Link href="/page-about" className="menu-sub-item">About me</Link></li>
                        <li><Link href="/page-author" className="menu-sub-item">Author</Link></li>
                        <li><Link href="/page-search" className="menu-sub-item">Search Results</Link></li>
                        <li><Link href="/page-contact" className="menu-sub-item">Contact</Link></li>
                        <li><Link href="/page-login" className="menu-sub-item">Login</Link></li>
                        <li><Link href="/page-register" className="menu-sub-item">Register</Link></li>
                        <li><Link href="/page-forgot-password" className="menu-sub-item">Forgot Password</Link></li>
                        <li><Link href="/page-404" className="menu-sub-item">Error 404</Link></li>
                    </ul>
                </li>
                <li className="group">
                    <Link href="/#" className="menu-item group-hover:border-white">Features</Link>
                    {/* MEGA MENU CONTENT */}
                    <div className="absolute left-0 invisible w-full px-12 py-12 mt-8 transition-all duration-500 shadow-sm opacity-0 rounded-2xl bg-neutral-0 dark:bg-neutral-dark-0 top-full group-hover:opacity-100 group-hover:visible group-hover:mt-4">
                        <h3 className="mb-8 text-5xl text-neutral-950 dark:text-neutral-dark-950">Featured <span className="font-bold">Posts</span></h3>
                        <div className="grid w-full grid-cols-3 gap-10">
                            <div className="flex flex-col gap-4">
                                <div className="flex content-center gap-6 hover-up">
                                    <div className="max-w-28">
                                        <Link className="inline-block overflow-hidden md:mb-0 rounded-2xl" href="/single">
                                            <img src="../../assets/imgs/pages/thumb-01.png" alt="ideko" />
                                        </Link>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Link className="text-base font-bold text-neutral-950 dark:text-neutral-dark-950" href="/single">
                                            Beyond the Pixels: My Art-Tech Lifestyle Journey
                                        </Link>
                                        <p className="text-sm font-medium text-neutral-700">
                                            2 min read - June 8, 2024
                                        </p>
                                    </div>
                                </div>
                                <div className="flex content-center gap-6 hover-up">
                                    <div className="max-w-28">
                                        <Link className="inline-block overflow-hidden md:mb-0 rounded-2xl" href="/single">
                                            <img src="../../assets/imgs/pages/thumb-02.png" alt="ideko" />
                                        </Link>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Link className="text-base font-bold text-neutral-950 dark:text-neutral-dark-950" href="/single">
                                            Globetrotting in Style: A Journey Through My Lens
                                        </Link>
                                        <p className="text-sm font-medium text-neutral-700">
                                            2 min read - June 8, 2024
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex content-center gap-6 hover-up">
                                    <div className="max-w-28">
                                        <Link className="inline-block overflow-hidden md:mb-0 rounded-2xl" href="/single">
                                            <img src="../../assets/imgs/pages/thumb-03.png" alt="ideko" />
                                        </Link>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Link className="text-base font-bold text-neutral-950 dark:text-neutral-dark-950" href="/single">
                                            Canvas and Keyboard: An Art-Tech Affair
                                        </Link>
                                        <p className="text-sm font-medium text-neutral-700">
                                            2 min read - June 8, 2024
                                        </p>
                                    </div>
                                </div>
                                <div className="flex content-center gap-6 hover-up">
                                    <div className="max-w-28">
                                        <Link className="inline-block overflow-hidden md:mb-0 rounded-2xl" href="/single">
                                            <img src="../../assets/imgs/pages/thumb-04.png" alt="ideko" />
                                        </Link>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Link className="text-base font-bold text-neutral-950 dark:text-neutral-dark-950" href="/single">
                                            Beyond the Pixels: My Art-Tech Lifestyle Journey
                                        </Link>
                                        <p className="text-sm font-medium text-neutral-700">
                                            2 min read - June 8, 2024
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex content-center gap-6 hover-up">
                                    <div className="max-w-28">
                                        <Link className="inline-block overflow-hidden md:mb-0 rounded-2xl" href="/single">
                                            <img src="../../assets/imgs/pages/thumb-05.png" alt="ideko" />
                                        </Link>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Link className="text-base font-bold text-neutral-950 dark:text-neutral-dark-950" href="/single">
                                            Chasing Sunsets: A Lifestyle in Living Color
                                        </Link>
                                        <p className="text-sm font-medium text-neutral-700">
                                            2 min read - June 8, 2024
                                        </p>
                                    </div>
                                </div>
                                <div className="flex content-center gap-6 hover-up">
                                    <div className="max-w-28">
                                        <Link className="inline-block overflow-hidden md:mb-0 rounded-2xl" href="/single">
                                            <img src="../../assets/imgs/pages/thumb-06.png" alt="ideko" />
                                        </Link>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Link className="text-base font-bold text-neutral-950 dark:text-neutral-dark-950" href="/single">
                                            Exploring Life's Canvas: Style, Tech, and Beyond
                                        </Link>
                                        <p className="text-sm font-medium text-neutral-700">
                                            2 min read - June 8, 2024
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END MEGA MENU CONTENT */}
                </li>
                <li className="relative"><Link href="/page-contact" className="menu-item">Contact</Link></li>
            </ul>
        </>
    )
}
