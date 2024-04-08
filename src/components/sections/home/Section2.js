import Link from "next/link"
import BlogPost from "../../blog/BlogPost"

const Section2 = () => {
  return (
    <section className="relative py-10 lg:py-12">
                <div className="container px-4">
                    <div className="flex flex-col items-start justify-between mb-16 lg:flex-row lg:items-end">
                        <h3 className="mb-4 text-left heading-2 lg:mb-0"><span className="font-light">Featured </span>Posts</h3>
                        <div className="mb-3">
                            <button className="button-3 text-neutral-950 dark:text-neutral-dark-950">All Authors</button>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-[30px]">
                        {/*Author box*/}
                        <div className="relative w-full min-w-[310px] border-2 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl bg-neutral-0 dark:bg-neutral-dark-0 py-12 px-4 overflow-hidden max-h-[414px]">
                            <div className="absolute top-0 left-0 right-0 w-full bg-primary-light-950 h-28 z-1" />
                            <div className="relative flex flex-col items-center content-center justify-center w-full text-center z-2 justify-items-center justify-self-center">
                                <div className="mb-8 overflow-hidden border-4 rounded-full w-36 h-36 border-neutral-0 dark:border-neutral-dark-300">
                                    <img src="/assets/imgs/avatar/avatar-12.png" />
                                </div>
                                <div className="inline-flex flex-col items-center justify-start gap-4">
                                    <Link className="text-4xl font-bold text-center text-neutral-950 dark:text-neutral-dark-950" href="/author">Brooklyn Simmons</Link>
                                    <div className="text-base font-medium leading-normal text-center text-neutral-700">Goods and
                                        services. It involves entrepreneurship, management, marketing, finance, and many other
                                        aspects. Businesses aim to generate</div>
                                </div>
                            </div>
                        </div>
                        {/*Post list 2*/}
                        <div className="col-span-2">
                            <div className="flex flex-col gap-8">
                                <BlogPost showItem={4} style={3} startFrom={12} toEnd={16} />
                            </div>
                        </div>
                    </div>
                </div></section>
  )
}

export default Section2