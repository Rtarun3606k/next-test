import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">My Blog</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 flex-grow">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            Welcome to My Demo Blog
          </h2>

          <div className="mb-8">
            <Image
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
              className="mb-4 dark:invert"
            />

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded">
                Next.js 15
              </div>
              <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded">
                Azure App Service
              </div>
            </div>
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <p>
              This is a demo blog built with Next.js 15 and hosted on Azure App
              Services. The combination provides a powerful, scalable platform
              for modern web applications.
            </p>

            <p className="mt-4">
              Next.js 15 offers improved performance, enhanced developer
              experience, and powerful features like server components and the
              App Router.
            </p>
          </div>

          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-md">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              Azure App Service Benefits
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Fully managed platform for web applications</li>
              <li>Easy deployment and CI/CD integration</li>
              <li>Built-in auto-scaling and load balancing</li>
              <li>Enterprise-grade security</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p>
            Demo Blog - Powered by Next.js 15 and hosted on Azure App Services
          </p>
        </div>
      </footer>
    </div>
  );
}
