import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import samplePic from "../assets/men.jpg";
import env from "react-dotenv";
const FeaturedPost = () => {
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

  const randomNumber = Math.floor(
    Math.random() * postsData.posts.length
  );
  const randomPost = postsData.posts[randomNumber];

  return (
    <div className="flex flex-col max-w-screen-xl gap-5 px-4 m-4 mx-auto mb-10 md:px-8">
      <h1 className="mb-4 text-lg">Featured Post</h1>
      {randomPost && (
        <div className="flex flex-col gap-5 md:flex-row">
          {/* Image Container */}
          <div className="w-full mb-4 md:w-1/2 md:mb-0">
            <img
              src={samplePic}
              // src={`http://localhost:3000/${randomPost.image_path}`}
              alt={randomPost.title}
              className="object-cover w-full h-auto md:max-w-md md:max-h-md"
            />
          </div>
          {/* Details Container */}
          <div className="w-full md:w-1/2">
            <div
              key={randomPost.id}
              className="flex flex-col gap-2"
            >
              <p className="mt-2 mb-2 text-xs font-semibold text-purple-950">
                {dateObject(
                  randomPost.updated_at
                ).toDateString()}
              </p>
              <Link to={`/posts/${randomPost.id}`}>
                <h1 className="mb-2 text-lg font-semibold">
                  {randomPost.title}
                </h1>
              </Link>
              <p className="mb-2">
                {randomPost.content.slice(0, 30)}...
              </p>
              <Link
                to={`/posts/${randomPost.id}`}
                className="self-start inline-block px-4 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700"
              >
                Read More
              </Link>
              <p>
                Category:{" "}
                {randomPost.category
                  ? randomPost.category
                  : "n/a"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedPost;
