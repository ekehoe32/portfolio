import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="font-semibold text-2xl">Page Not Found | 404</h1>
      <Link className="btn btn-primary" href="/">
        Go home
      </Link>
    </div>
  );
}
