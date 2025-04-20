
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Heart, Calendar, Search, Bell, Clock, Mail, User, CheckCircle } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-memheav-lightTeal py-16 md:py-20">
        <div className="memheav-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-memheav-teal mb-6 leading-tight">
                Your Trusted Dementia Care Companion
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                Making life easier for dementia patients and their caregivers with thoughtful reminders and supportive connections.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/auth/patient">
                  <Button size="lg" className="memheav-button-primary text-xl">
                    Patient Portal
                  </Button>
                </Link>
                <Link to="/auth/caretaker">
                  <Button size="lg" variant="outline" className="border-memheav-teal text-memheav-teal hover:bg-memheav-lightTeal hover:text-memheav-darkTeal text-xl">
                    Caretaker Portal
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="/lovable-uploads/d9666347-2717-4476-838f-9ccf80ca81ee.png" 
                alt="Dementia care illustration" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="memheav-container">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-16 h-16 text-memheav-coral mx-auto mb-6" fill="currentColor" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-memheav-teal">
              Welcome to MemHeav – Your Trusted Dementia Care Companion
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              At MemHeav, we make life easier for dementia patients and their caregivers. Whether you're looking for a compassionate caretaker nearby or need help remembering important tasks and medications, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-memheav-cream">
        <div className="memheav-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="memheav-card">
              <div className="mb-6 bg-memheav-lightTeal inline-flex p-4 rounded-full">
                <User className="h-10 w-10 text-memheav-teal" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-memheav-teal">
                For Patients:
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <Search className="h-6 w-6 mr-3 mt-1 text-memheav-coral" />
                  <span>Find trusted caretakers based on your needs</span>
                </li>
                <li className="flex items-start">
                  <Bell className="h-6 w-6 mr-3 mt-1 text-memheav-coral" />
                  <span>Set daily reminders for medicines and appointments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 mt-1 text-memheav-coral" />
                  <span>Stay independent with gentle digital support</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/auth/patient">
                  <Button className="memheav-button-primary">
                    Join as Patient
                  </Button>
                </Link>
              </div>
            </div>

            <div className="memheav-card">
              <div className="mb-6 bg-memheav-lightCoral inline-flex p-4 rounded-full">
                <Calendar className="h-10 w-10 text-memheav-coral" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-memheav-teal">
                For Caretakers:
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <User className="h-6 w-6 mr-3 mt-1 text-memheav-coral" />
                  <span>List your services and connect with patients</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 mr-3 mt-1 text-memheav-coral" />
                  <span>Get daily updates and task alerts</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-6 w-6 mr-3 mt-1 text-memheav-coral" />
                  <span>Receive email reminders to stay in sync</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/auth/caretaker">
                  <Button className="memheav-button-secondary">
                    Join as Caretaker
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 bg-memheav-teal text-white text-center">
        <div className="memheav-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple. Supportive. Secure.
          </h2>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            MemHeav is where care meets clarity.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
