"use client"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    centeredSlides: true,
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

const Hero = () => {
  return (
    <>
    <section className="relative py-20 lg:py-24 lg:mb-16">
        <div className="container px-4 text-center">
            <h1 className="heading-1">Welcome To <span className="font-light">Family JS</span></h1>
            <div className="swiper-container post-slider-4">
                <Swiper {...swiperOptions} className="pt-4 swiper-wrapper">
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="relative w-full overflow-hidden h-52 rounded-3xl">
                            <Link href="/category"><img className="absolute top-0 left-0 rounded-3xl" alt="" src="/assets/imgs/pages/img-01.png" /></Link>
                            <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                <Link href="/category" className="text-sm font-medium text-neutral-950 dark:text-neutral-dark-950">Healthy</Link>
                                <div className="w-[22px] h-[22px] relative">
                                    <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                    </div>
                                    <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                        17</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="relative w-full overflow-hidden h-52 rounded-3xl">
                            <Link href="/category"><img className="absolute top-0 left-0 rounded-3xl" alt="" src="/assets/imgs/pages/img-02.png" /></Link>
                            <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                <Link href="/category" className="text-sm font-medium text-neutral-950 dark:text-neutral-dark-950">Trending</Link>
                                <div className="w-[22px] h-[22px] relative">
                                    <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                    </div>
                                    <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                        32</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="relative w-full overflow-hidden h-52 rounded-3xl">
                            <Link href="/category"><img className="absolute top-0 left-0 rounded-3xl" alt="" src="/assets/imgs/pages/img-03.png" /></Link>
                            <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                <Link href="/category" className="text-sm font-medium text-neutral-950 dark:text-neutral-dark-950">Fashion</Link>
                                <div className="w-[22px] h-[22px] relative">
                                    <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                    </div>
                                    <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                        48</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="relative w-full overflow-hidden h-52 rounded-3xl">
                            <Link href="/category"><img className="absolute top-0 left-0 rounded-3xl" alt="" src="/assets/imgs/pages/img-04.png" /></Link>
                            <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                <Link href="/category" className="text-sm font-medium text-neutral-950 dark:text-neutral-dark-950">Technology</Link>
                                <div className="w-[22px] h-[22px] relative">
                                    <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                    </div>
                                    <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                        15</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="relative w-full overflow-hidden h-52 rounded-3xl">
                            <Link href="/category"><img className="absolute top-0 left-0 rounded-3xl" alt="" src="/assets/imgs/pages/img-05.png" /></Link>
                            <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                <Link href="/category" className="text-sm font-medium text-neutral-950 dark:text-neutral-dark-950">Travel</Link>
                                <div className="w-[22px] h-[22px] relative">
                                    <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                    </div>
                                    <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                        24</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="relative w-full overflow-hidden h-52 rounded-3xl">
                            <Link href="/category"><img className="absolute top-0 left-0 rounded-3xl" alt="" src="/assets/imgs/pages/img-01.png" /></Link>
                            <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                <Link href="/category" className="text-sm font-medium text-neutral-950 dark:text-neutral-dark-950">Healthy</Link>
                                <div className="w-[22px] h-[22px] relative">
                                    <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                    </div>
                                    <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                        17</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="relative w-full overflow-hidden h-52 rounded-3xl">
                            <Link href="/category"><img className="absolute top-0 left-0 rounded-3xl" alt="" src="/assets/imgs/pages/img-02.png" /></Link>
                            <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                <Link href="/category" className="text-sm font-medium text-neutral-950 dark:text-neutral-dark-950">Trending</Link>
                                <div className="w-[22px] h-[22px] relative">
                                    <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                    </div>
                                    <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                        32</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="relative w-full overflow-hidden h-52 rounded-3xl">
                            <Link href="/category"><img className="absolute top-0 left-0 rounded-3xl" alt="" src="/assets/imgs/pages/img-03.png" /></Link>
                            <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                <Link href="/category" className="text-sm font-medium text-neutral-950 dark:text-neutral-dark-950">Fashion</Link>
                                <div className="w-[22px] h-[22px] relative">
                                    <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                    </div>
                                    <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                        48</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="relative w-full overflow-hidden h-52 rounded-3xl">
                            <Link href="/category"><img className="absolute top-0 left-0 rounded-3xl" alt="" src="/assets/imgs/pages/img-04.png" /></Link>
                            <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                <Link href="/category" className="text-sm font-medium text-neutral-950 dark:text-neutral-dark-950">Technology</Link>
                                <div className="w-[22px] h-[22px] relative">
                                    <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                    </div>
                                    <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                        15</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="relative w-full overflow-hidden h-52 rounded-3xl">
                            <Link href="/category"><img className="absolute top-0 left-0 rounded-3xl" alt="" src="/assets/imgs/pages/img-05.png" /></Link>
                            <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                <Link href="/category" className="text-sm font-medium text-neutral-950 dark:text-neutral-dark-950">Travel</Link>
                                <div className="w-[22px] h-[22px] relative">
                                    <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                    </div>
                                    <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                        24</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="flex flex-col items-center justify-between gap-8 mt-12 lg:gap-32 lg:flex-row">
                <p className="text-base font-medium text-neutral-950 dark:text-neutral-dark-950 lg:w-2/4">Goods and
                    services. It involves entrepreneurship, management, marketing, finance, and many other aspects.
                    Businesses aim to generate profit while meeting</p>
                <form className="max-w-full overflow-hidden" >
                    <div className="flex flex-col p-1 mb-4 rounded-full md:flex-row md:bg-neutral-0 dark:bg-neutral-dark-200">
                        <input className="w-full py-4 pl-6 mb-2 transition duration-200 rounded-full focus:outline-none bg-neutral-0 dark:bg-neutral-dark-200 md:mb-0" type="text" placeholder="Your email address" />
                        <button className="flex items-center justify-center w-full gap-2 px-6 py-4 transition duration-200 rounded-full sm:w-auto h-14 bg-neutral-950" type="submit">
                            <svg width={22} height={18} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 fill-primary-light-950" preserveAspectRatio="none">
                                <path d="M19.8829 0.671875H2.8827C2.35277 0.673442 1.84497 0.890991 1.47025 1.277C1.09552 1.663 0.884334 2.18609 0.882812 2.73198V15.6118C0.884334 16.1577 1.09552 16.6807 1.47025 17.0668C1.84497 17.4528 2.35277 17.6703 2.8827 17.6719H19.8829C20.4129 17.6703 20.9207 17.4528 21.2954 17.0668C21.6701 16.6807 21.8813 16.1577 21.8828 15.6118V2.73198C21.8813 2.18609 21.6701 1.663 21.2954 1.277C20.9207 0.890991 20.4129 0.673442 19.8829 0.671875ZM19.6326 5.04989L11.3828 10.7158L3.13182 5.04989V2.98979L11.3817 8.65566L19.6315 2.98979L19.6326 5.04989Z">
                                </path>
                            </svg>
                            <span className="text-2xl font-medium text-neutral-0">Subscribe</span>
                        </button>
                    </div>
                    <p className="pl-4 text-sm text-neutral-700">* Unsubscribe anytime</p>
                </form>
            </div>
        </div> {/*.container*/}
        <div className="absolute bottom-0 left-0 right-0 w-full h-full header-bg -z-50 bg-gradient-to-t from-primary-light-950/15 to-transparent">
        </div>
    </section>

</>
  )
}

export default Hero