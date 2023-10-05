import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-screen-xl px-8 mx-auto font-inter">
      <div className="flex justify-between mt-3 mb-3 text-xl text-blue-700">
        <h1 className="">Anime Blog</h1>
        <ul className="inline-flex gap-4 ">
          <li className="hover:underline">
            <Link to="/">Blog Posts</Link>
          </li>
          <li className="hover:underline">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="hover:underline">
            <a href={""}>{"About"}</a>
          </li>
          <li className="hover:underline">
            <Link to="/signup">Sign Up</Link>
          </li>
          <li className="hover:underline">
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
