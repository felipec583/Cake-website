import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <section id="error-page">
      <h1 className="font-bold text-4xl text-center">Esta página no existe</h1>
      <p className="my-5">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={"/"} className="btn bg-red-cake text-white font-bold">
        Back to Home
      </Link>
    </section>
  );
};

export default ErrorPage;
