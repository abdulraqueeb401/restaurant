import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-2/3 m-auto flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center h-2/5">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p className="mt-6">Sorry, an unexpected error has occurred.</p>
        <p className="mt-4">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
