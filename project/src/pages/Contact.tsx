import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to help you with all your real estate needs. Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-orange-800 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Office Address</h3>
                    <p className="text-gray-600">123 Real Estate Avenue</p>
                    <p className="text-gray-600">Bangalore, Karnataka, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-orange-800 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+91 93927 47366</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="text-orange-800 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">contact@subhapradha.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="text-orange-800 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}