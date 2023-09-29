import BlogCard from "./component/BlogCard";
import FeaturedPost from "./component/FeaturedPost";
import Hero from "./component/Hero";
import RecentBlogPosts from "./component/RecentBlogPosts";

function App() {
  return (
    <>
      <Hero />
      <RecentBlogPosts />
      <FeaturedPost />
      <BlogCard />
    </>
  );
}

export default App;
