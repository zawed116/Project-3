export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration and inventory management.",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a",
      link: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure financial application with biometric authentication and transaction tracking.",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
      link: "#"
    },
    {
      id: 3,
      title: "Corporate Website",
      description: "Modern responsive website with CMS integration for easy content management.",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
      link: "#"
    },
    {
      id: 4,
      title: "SAAS Dashboard",
      description: "Analytics dashboard with real-time data visualization and reporting tools.",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      link: "#"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Projects
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{project.title}</h3>
                <span className="text-green-600">{project.category}</span>
              </div>
              <p className="mt-1 text-sm text-gray-500">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-gray-100">
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