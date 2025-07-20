import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.jpg'; // Add your image in src/assets
import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';
import feature3 from '../assets/feature3.jpg';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-40"
            src={heroImage}
            alt="Modern website design"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-48 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Welcome to MyWebsite
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Beautiful, modern websites built with React and Tailwind CSS
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              We deliver exceptional results with cutting-edge technology
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img
                        className="w-full h-full object-cover"
                        src={feature1}
                        alt="Modern design"
                      />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Modern Design
                    </h3>
                    <p className="mt-5 text-base text-gray-600">
                      Clean, responsive layouts that look great on any device with attention to detail and aesthetic appeal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img
                        className="w-full h-full object-cover"
                        src={feature2}
                        alt="Fast performance"
                      />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Fast Performance
                    </h3>
                    <p className="mt-5 text-base text-gray-600">
                      Optimized for speed and smooth user experience with efficient code and modern techniques.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img
                        className="w-full h-full object-cover"
                        src={feature3}
                        alt="Easy to use"
                      />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Easy to Use
                    </h3>
                    <p className="mt-5 text-base text-gray-600">
                      Intuitive navigation and user-friendly interface designed for seamless interaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block">Contact us today.</span>
          </h2>
          <Link
            to="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}