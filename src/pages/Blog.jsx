export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React in 2024",
      excerpt: "Learn the best practices for starting new React projects with the latest features.",
      date: "May 15, 2024",
      category: "Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Tailwind CSS vs Traditional CSS",
      excerpt: "Comparing the benefits of utility-first CSS frameworks with traditional approaches.",
      date: "April 28, 2024",
      category: "Design",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Optimizing Website Performance",
      excerpt: "Essential techniques to make your website load faster and improve user experience.",
      date: "April 10, 2024",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies that will shape web development.",
      date: "March 22, 2024",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Blog
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials and latest trends in web development
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.id} className="group relative flex flex-col">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt=""
                  className="object-cover object-center w-full h-full group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {post.category}
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center text-sm text-gray-500">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-2 text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                  <a href="#">
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h2>
                <p className="mt-4 text-base text-gray-600">{post.excerpt}</p>
              </div>
              <div className="mt-6 flex items-center">
                <a
                  href="#"
                  className="text-base font-medium text-green-600 hover:text-green-800"
                >
                  Read full story →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Stay updated
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Subscribe to our newsletter for the latest blog posts and updates.
            </p>
            <form className="mt-8 sm:flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:outline-none sm:max-w-xs rounded-md"
                required
              />
              <button
                type="submit"
                className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Solutions
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-green-600">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-green-600">
                    Analytics
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-green-600">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-green-600">
                    Docs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-green-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-green-600">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-green-600">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-green-600">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <p className="text-base text-gray-500">
              &copy; 2025 MyWebsite. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}