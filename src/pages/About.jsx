export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Learn more about our company and what drives us
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Founded in 2020, MyWebsite began as a small team of passionate developers 
              dedicated to creating beautiful, functional websites. Today, we've grown into 
              a full-service digital agency serving clients worldwide.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              We believe in the power of technology to transform businesses and create 
              meaningful connections with customers.
            </p>
          </div>
          <div className="relative">
            <img
              className="w-full rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Our team working together"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
            Our Values
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Innovation',
                description: 'We push boundaries and explore new technologies to deliver cutting-edge solutions.',
                icon: '💡'
              },
              {
                name: 'Quality',
                description: 'Every project receives our full attention to detail and commitment to excellence.',
                icon: '✨'
              },
              {
                name: 'Integrity',
                description: 'We build trust through transparency, honesty, and ethical business practices.',
                icon: '🤝'
              }
            ].map((value) => (
              <div key={value.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white text-xl mx-auto">
                      {value.icon}
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight text-center">
                      {value.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-600 text-center">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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