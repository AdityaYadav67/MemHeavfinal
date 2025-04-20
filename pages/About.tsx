
import React from 'react';
import Layout from '../components/Layout';
import { Heart } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="memheav-container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-memheav-teal mb-8">About MemHeav</h1>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <div className="flex justify-center mb-8">
              <div className="bg-memheav-lightTeal p-6 rounded-full">
                <Heart className="h-16 w-16 text-memheav-teal" fill="currentColor" />
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-memheav-teal">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              At MemHeav, we're dedicated to improving the quality of life for individuals living with dementia and their families. 
              We understand the unique challenges faced by those affected by memory-related conditions and strive to provide 
              supportive solutions that promote dignity, independence, and peace of mind.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-memheav-teal">What We Do</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Our platform connects dementia patients with compassionate, qualified caretakers who specialize in memory care. 
              We also provide intuitive reminder systems designed specifically for the needs of those with memory challenges, 
              helping to maintain daily routines and medication schedules.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-memheav-teal">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-memheav-cream p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-memheav-teal">Compassion</h3>
                <p className="text-lg text-gray-700">
                  We approach every interaction with empathy, understanding the emotional journey of dementia care.
                </p>
              </div>
              <div className="bg-memheav-cream p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-memheav-teal">Dignity</h3>
                <p className="text-lg text-gray-700">
                  We respect the individuality of each person and promote care that maintains their sense of self-worth.
                </p>
              </div>
              <div className="bg-memheav-cream p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-memheav-teal">Innovation</h3>
                <p className="text-lg text-gray-700">
                  We continuously seek new ways to address the challenges of memory care through technology and service design.
                </p>
              </div>
              <div className="bg-memheav-cream p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-memheav-teal">Reliability</h3>
                <p className="text-lg text-gray-700">
                  We deliver consistent, dependable services that patients and caregivers can count on every day.
                </p>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We believe that everyone deserves care that honors their humanity. Through MemHeav, 
              we aim to make quality memory care accessible, reducing stress for families while 
              enhancing the well-being of those living with dementia.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
