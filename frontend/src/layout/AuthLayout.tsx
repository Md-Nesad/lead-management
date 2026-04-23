import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white border rounded-xl shadow-md p-8">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-indigo-600">LeadFlow</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage your leads smarter
          </p>
        </div>

        {children}

        {/* Footer switch */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>
            {location.pathname === "/login" ? (
              <>
                Don’t have an account?{" "}
                <Link to="/signup" className="text-indigo-600">
                  Sign up
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link to="/login" className="text-indigo-600">
                  Login
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
