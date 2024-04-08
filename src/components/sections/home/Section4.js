import Link from "next/link"

const Section4 = () => {
  return (
    <>
    <section className="relative py-20 lg:py-24">
        <div className="container px-4">
            <div className="grid flex-col justify-center mb-16 justify-items-center align-center">
                <h3 className="mb-12 leading-tight text-center heading-3 md:w-2/3"><span className="font-light">Subscribe to my
                    weekly newsletter for priority</span> news, reviews and updates</h3>
                <div>
                    <form className="max-w-full overflow-hidden" >
                        <div className="flex flex-col p-1 mb-4 rounded-full md:flex-row md:bg-neutral-0 dark:bg-neutral-dark-200 md:border border-neutral-300 dark:border-neutral-dark-300">
                            <input className="w-full py-4 pl-6 mb-2 transition duration-200 border rounded-full focus:outline-none bg-neutral-0 dark:bg-neutral-dark-200 md:mb-0 md:border-0 border-neutral-300 dark:border-neutral-dark-300 " type="text" placeholder="Your email address" />
                            <button className="flex items-center justify-center w-full gap-2 px-6 py-4 transition duration-200 rounded-full sm:w-auto h-14 bg-neutral-950" type="submit">
                                <svg width={22} height={18} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 fill-primary-light-950" preserveAspectRatio="none">
                                    <path d="M19.8829 0.671875H2.8827C2.35277 0.673442 1.84497 0.890991 1.47025 1.277C1.09552 1.663 0.884334 2.18609 0.882812 2.73198V15.6118C0.884334 16.1577 1.09552 16.6807 1.47025 17.0668C1.84497 17.4528 2.35277 17.6703 2.8827 17.6719H19.8829C20.4129 17.6703 20.9207 17.4528 21.2954 17.0668C21.6701 16.6807 21.8813 16.1577 21.8828 15.6118V2.73198C21.8813 2.18609 21.6701 1.663 21.2954 1.277C20.9207 0.890991 20.4129 0.673442 19.8829 0.671875ZM19.6326 5.04989L11.3828 10.7158L3.13182 5.04989V2.98979L11.3817 8.65566L19.6315 2.98979L19.6326 5.04989Z">
                                    </path>
                                </svg>
                                <span className="text-2xl font-medium text-neutral-0">Subscribe</span>
                            </button>
                        </div>
                        <div className="flex items-center justify-center mt-8">
                            <input id="checkbox" type="checkbox" className="w-4 h-4 rounded cursor-pointer accent-primary-light-950 bg-primary-light-950 text-neutral-0" />
                            <label htmlFor="checkbox" className="ml-2 text-sm cursor-pointer text-neutral-700">I agree to the <Link href="#" className="text-neutral-950 dark:text-neutral-dark-950">terms
                                conditions</Link></label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

</>
  )
}

export default Section4