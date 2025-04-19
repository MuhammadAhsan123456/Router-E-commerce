import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

     <Hero/>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 mb-10">
            Our services are tailored to meet your business needs, providing you with the best solutions to thrive in today's digital world.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl shadow-xl hover:shadow-2xl transition">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRgjJ_nNG8oDmSYt5PODIZI-o7k036FHv4A&s"
                alt="Fast Delivery"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">We ensure quick and efficient solutions without compromising quality.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl shadow-xl hover:shadow-2xl transition">
              <img
                src="https://media.istockphoto.com/id/1157345255/photo/team-of-young-computer-programmers-cooperating-in-the-office.jpg?s=612x612&w=0&k=20&c=cSDSNJSxyo0-J3DYPP9SBYrd7dxti4Todn--jHr-7pY="
                alt="Expert Team"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Expert Team</h3>
              <p className="text-gray-600">Our team consists of highly skilled professionals who provide top-notch solutions.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl shadow-xl hover:shadow-2xl transition">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Affordable Pricing"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">We offer transparent pricing and great value for your business investment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 py-16 px-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 text-lg">Let’s build something amazing together. Join us today!</p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>

      {/* Spacer for bottom */}
      {/* <div className="h-24" /> */}
      <Footer/>
    </>
  );
};

export default Home;
