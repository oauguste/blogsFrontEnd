import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import samplePic from "../assets/men.jpg";
import env from "react-dotenv";

const BlogCard = () => {
  const [postsData, setPostsData] = useState({ posts: [] });

  const dateObject = (unformattedDate) => {
    const date = new Date(unformattedDate);
    return date;
  };

  useEffect(() => {
    const url = `${env.SERVER_URL}posts`;
    const fetchPosts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPostsData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col max-w-screen-xl gap-5 px-4 m-4 mx-auto md:px-8">
      <h1 className="mb-4 text-lg">All Blog Posts</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 font-inter">
        {postsData &&
          Array.isArray(postsData.posts) &&
          postsData.posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col gap-2 "
            >
              <img
                src={samplePic}
                // src={`http://localhost:3000/${post.image_path}`}
                alt={post.title}
                className="object-cover w-full h-auto md:max-w-md md:max-h-md"
              />
              <p className="mt-2 mb-2 text-xs font-semibold text-purple-950">
                {dateObject(post.updated_at).toDateString()}
              </p>
              <Link to={`/posts/${post.id}`}>
                <h1 className="mb-2 text-lg font-semibold">
                  {post.title}
                </h1>
              </Link>
              <p className="mb-2">
                {post.content.slice(0, 20)}...
              </p>
              <Link
                to={`/posts/${post.id}`}
                className="self-start inline-block px-4 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700"
              >
                Read More
              </Link>
              <p>
                Category:{" "}
                {post.category ? post.category : "n/a"}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogCard;
