import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-cover bg-center h-96" style={{ backgroundImage: 'url(https://via.placeholder.com/1600x900?text=Hero+Image)' }}>
        <div className="h-full bg-black bg-opacity-50 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="text-xl mt-4">We deliver exceptional digital solutions for your business growth.</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <div className="lg:flex items-center justify-between">
            <div className="lg:w-1/2">
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2010, we have been at the forefront of digital transformation, providing innovative solutions to businesses worldwide. From small startups to large enterprises, we’ve helped clients streamline their processes and accelerate growth.
              </p>
              <p className="text-lg text-gray-700">
                Our journey has been one of continuous learning, adapting, and evolving with the changing technology landscape. We are a team of passionate professionals dedicated to delivering excellence.
              </p>
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBIfSkyXQjIGSf_bOzYpKtcVJmwaP23MDuBw&s"
                alt="Our Story"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Core Values</h2>
          <p className="text-lg text-gray-700 mb-12">
            Our company thrives on the following core values that drive us to success:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rQ8sxYschDs8Vdh-C1VjH8EYZs6l6oT_RA&s"
                alt="Integrity"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We operate with transparency and honesty, always putting the client’s needs first.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCc666dzq_86HcP0QiWxY1splY7T_2PBN3Xw&s"
                alt="Innovation"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace the latest technologies and constantly innovate to provide the best solutions.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6LwUg2bDgrsOIe_dez9uaZ45tQK-KX08MA&s"
                alt="Excellence"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest quality in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-700 mb-12">
            Our team is our greatest asset, consisting of skilled professionals dedicated to bringing the best results for our clients.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <img
                src="https://www.shutterstock.com/image-illustration/very-big-size-man-without-260nw-126920099.jpg"
                alt="John Doe"
                className="w-40 h-40 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-600">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFIMiSwX_AlzPot4VJ7JeYb1OWR6IcbIlPA&s"
                alt="Jane Smith"
                className="w-40 h-40 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-600">Jane Smith</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyoXr7Dh0gOCxQx3yf7as2cUl58Vci7xFDnHW5kPoDYjlcLpL8Z9kb5amwIljvFK5JJM&usqp=CAU"
                alt="Alice Johnson"
                className="w-40 h-40 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-600">Alice Johnson</h3>
              <p className="text-gray-600">Marketing Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 py-16 px-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="mb-6 text-lg">We are always looking for new opportunities. Let’s work together to create something extraordinary!</p>
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

export default About
