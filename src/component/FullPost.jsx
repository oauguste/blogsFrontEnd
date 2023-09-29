import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecentBlogPosts from "../component/RecentBlogPosts";
import samplePic from "../assets/men.jpg";
import env from "react-dotenv";
const FullPost = () => {
  const [post, setPost] = useState(null);

  // const dateObject = (unformattedDate) => {
  //   const date = new Date(unformattedDate);
  //   return date;
  // };
  const { id } = useParams();

  useEffect(() => {
    const url = `${env.SERVER_URL}posts/${id}`;
    const fetchPosts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch Post");
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, [id]);
  if (!post) return <p>Loading...</p>;
  return (
    <div className="flex max-w-screen-xl gap-5 px-8 m-4 mx-auto mb-10 md:flex-row">
      <div className="hidden md:block md:w-1/2">
        <RecentBlogPosts wrapped={true} />
      </div>
      <div className="w-full md:w-1/2">
        <h1>{post.data.title}</h1>

        <img
          src={samplePic}
          alt={post.data.title}
          className="object-cover w-full h-auto md:max-w-md md:max-h-md md:h-auto"
        />

        <div>{post.data.content}</div>
        {post.data.category && (
          <p>Category: {post.data.category}</p>
        )}
      </div>
    </div>
  );
};

export default FullPost;
