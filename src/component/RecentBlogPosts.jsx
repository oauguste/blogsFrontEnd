import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import samplePic from "../assets/men.jpg";
import PropTypes from "prop-types";
import env from "react-dotenv";
const RecentBlogPosts = ({ wrapped }) => {
  RecentBlogPosts.propTypes = {
    wrapped: PropTypes.bool,
  };

  RecentBlogPosts.defaultProps = {
    wrapped: false,
  };
  const [blogPosts, setBlogPosts] = useState([]);
  const dateObject = (unformattedDate) => {
    const date = new Date(unformattedDate);
    return date;
  };

  useEffect(() => {
    const url = `${env.SERVER_URL}posts`;
    const fetchRecent = async () => {
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        setBlogPosts(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecent();
  }, []);

  const lastThreePosts =
    blogPosts.posts?.slice(-3).reverse() || [];

  return (
    <div className="flex flex-col max-w-screen-xl gap-5 px-4 m-4 mx-auto md:px-8">
      <h1 className="text-lg">Recent blog posts</h1>
      <div
        className={`flex flex-col md:flex-row gap-5 font-inter ${
          wrapped ? "flex-wrap" : ""
        }`}
      >
        {lastThreePosts.length > 0 && (
          <>
            {/* Left Side Post */}
            <div className="w-full mb-5 md:w-1/2 md:mb-0">
              <div key={lastThreePosts[0].id}>
                <img
                  src={samplePic}
                  alt={lastThreePosts[0].title}
                  className="object-cover w-full h-auto md:max-w-md md:max-h-xs"
                />
                <p className="mt-2 mb-2 text-xs font-semibold text-purple-950 ">
                  {dateObject(
                    lastThreePosts[0].updated_at
                  ).toDateString()}
                </p>
                <Link to={`/posts/${lastThreePosts[0].id}`}>
                  <h1 className="mb-2 font-semibold">
                    {lastThreePosts[0].title}
                  </h1>
                </Link>

                <p className="mb-2 ">
                  Content:{" "}
                  {lastThreePosts[0].content.slice(0, 15)}
                  ...
                </p>
                <Link
                  to={`/posts/${lastThreePosts[0].id}`}
                  className="inline-block px-4 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700"
                >
                  Read More
                </Link>
                <p>
                  Category:{" "}
                  {lastThreePosts[0].category
                    ? lastThreePosts[0].category
                    : "n/a"}
                </p>
              </div>
            </div>

            {/* Right Side Posts */}
            <div className="w-full md:w-1/2">
              {lastThreePosts.slice(1).map((post) => (
                <div key={post.id}>
                  <img
                    src={samplePic}
                    alt={post.title}
                    className="object-cover w-full h-auto mb-5 md:max-w-xs md:max-h-xs"
                  />
                  <p className="mt-2 mb-2 text-xs font-semibold text-purple-950 ">
                    {dateObject(
                      post.updated_at
                    ).toDateString()}
                  </p>
                  <Link to={`/posts/${post.id}`}>
                    <h1 className="mb-2 font-semibold">
                      {post.title}
                    </h1>
                  </Link>

                  <p className="mb-2 ">
                    Content: {post.content.slice(0, 15)}
                    ...
                  </p>
                  <Link
                    to={`/posts/${post.id}`}
                    className="inline-block px-4 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700"
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
          </>
        )}
      </div>
    </div>
  );
};

export default RecentBlogPosts;
