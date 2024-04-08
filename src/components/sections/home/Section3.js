import BlogPost from "../../blog/BlogPost";
import React from "react";

const Section3 = () => {
  return (
    <>
      <section className="relative py-10 lg:py-12">
        <div className="container px-4">
          <div className="flex flex-col items-start justify-between mb-16 lg:flex-row lg:items-end">
            <h3 className="mb-4 text-left heading-2 lg:mb-0">
              <span className="font-light">Featured </span> Posts
            </h3>
            <div>
              <button className="button-3 text-neutral-950 dark:text-neutral-dark-950">
                View More
              </button>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-[30px]">
            {/*col*/}
            <div className="relative flex flex-col justify-start gap-4 mb-8 lg:mb-0">
              <BlogPost showItem={1} style={4} startFrom={13} toEnd={14} />
              <BlogPost showItem={2} style={5} startFrom={36} toEnd={38} />
            </div>
            <div className="relative flex flex-col gap-4 mb-8 lg:mb-0">
              <BlogPost showItem={1} style={4} startFrom={14} toEnd={15} />
              <BlogPost showItem={2} style={5} startFrom={38} toEnd={40} />
            </div>
            <div className="relative flex flex-col gap-4 mb-8 lg:mb-0">
              <BlogPost showItem={1} style={4} startFrom={15} toEnd={16} />
              <BlogPost showItem={2} style={5} startFrom={40} toEnd={42} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
