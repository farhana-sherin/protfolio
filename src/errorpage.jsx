import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-indigo-500 text-white p-4">
      <div className="max-w-md text-center bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-10 shadow-lg">
        <h1 className="text-6xl font-extrabold mb-4 animate-bounce">😢</h1>
        <h2 className="text-4xl font-bold mb-2">Oops!</h2>
        <p className="mb-4 text-lg">Sorry, an unexpected error has occurred.</p>
        <p className="italic mb-6 text-sm text-gray-200">
          {error?.statusText || error?.message || "Unknown Error"}
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-50 hover:shadow-xl transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
