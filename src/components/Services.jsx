import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Services = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[70vh] flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c)',
        }}
      >
        <div className=" bg-opacity-60 p-10 rounded-lg">
          <h1 className="text-5xl font-bold">Our Services</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Explore our wide range of services designed to elevate your business and digital presence.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-6">
              <img
                src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
                alt="Web Development"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">Web Development</h3>
              <p className="text-gray-600">
                Custom websites built with the latest technologies to help your business stand out online.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-6">
              <img
                src="https://etimg.etb2bimg.com/photo/83941899.cms"
                alt="Mobile App Development"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">Mobile Apps</h3>
              <p className="text-gray-600">
                Powerful and user-friendly mobile applications for both Android and iOS platforms.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jNlVpi8Mz6dBl9aG6H0_HLlv3gGtl80lXA&s"
                alt="UI/UX Design"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">UI/UX Design</h3>
              <p className="text-gray-600">
                Intuitive, engaging, and user-focused designs that improve customer experience.
              </p>
            </div>

            {/* Add more services here if needed */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 px-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Service?</h2>
        <p className="mb-6 text-lg">We’re happy to tailor our solutions to fit your exact needs. Let’s connect!</p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
        <Footer/>
    </div>
  )
}

export default Services
