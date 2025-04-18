import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-xl font-semibold text-blue-600 flex items-center"
          >
            Trading Studio
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              href="/create-strategy"
              className="font-semibold text-gray-300 hover:text-blue-600"
            >
              Create Strategy
            </Link>
            <button className="btn-primary">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
