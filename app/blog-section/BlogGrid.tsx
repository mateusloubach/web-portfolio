import BlogCard from "./BlogCard";
import { blogDetails } from "./blogDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans/monaSans";
import AnimatedBody from "../animations/AnimatedBody";
import { Mattone } from "../fonts/Mattone/Mattone";

const Blog = () => {
  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-32">
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        {" "}
        <AnimatedWords2
          title={"Blog"}
          style={`flex max-w-[500px] flex-col items-start text-left text-[110px] ${Mattone.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[160px] md:text-[190px] lg:text-center lg:text-[170px]`}
        />
        <AnimatedBody
          text="I also write articles to reinforce my knowledge and help others who might be building something cool."
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
      </div>
      <div className="grid w-[90%] max-w-[1200px] grid-cols-1 grid-rows-1 place-content-center place-items-center gap-x-6 gap-y-6 md:grid-cols-1">
        {blogDetails.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              image={blog.image}
              url={blog.url}
              date={blog.date}
              available={blog.available}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
