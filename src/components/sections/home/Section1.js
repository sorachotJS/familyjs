import BlogPost from "../../blog/BlogPost"

const Section1 = () => {
  return (
    <>
    <section className="relative py-10 pt-20 lg:pt-12 lg:pb-24">
        <div className="container px-4">
            <h3 className="mb-16 text-center heading-2"><span className="font-light">See what we’ve</span><br /> written lately
            </h3>
            {/*Post list 1*/}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[65px]">
                <BlogPost showItem={6} style={2} startFrom={5} toEnd={12} />
            </div>
        </div>
    </section>

</>
  )
}

export default Section1