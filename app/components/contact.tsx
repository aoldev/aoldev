'use client';

import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { countries } from "countries-list";

const countryList = Object.entries(countries);

export default function ContactPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-extrabold mb-8 text-purple-900">Get in touch</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Form Section */}
        <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Get in touch</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-gray-600">Want to speak to someone about your startup? We'd love to chat!</p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <input
                type="email"
                placeholder="you@company.com"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                <select className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500">
                    {countryList.map(([code, country]) => (
                        <option key={code} value={code}>
                        {country.name}
                        </option>
                    ))}
                </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <textarea
                placeholder="Leave us a message..."
                rows={4}
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              <Button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white w-full"
              >
                Send message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Right Contact Info Section */}
        <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100 shadow-lg">
          <CardContent className="space-y-6 mt-5">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-purple-900">Call us</h2>
              <div className="flex items-center">
                <Phone className="mr-3 text-purple-500" />
                <a href="tel:+15550000000" className="text-purple-700 hover:underline">
                  +1 (555) 000-0000
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-purple-900">Chat with us</h2>
              <div className="flex items-center">
                <Mail className="mr-3 text-purple-500" />
                <a href="mailto:info@company.com" className="text-purple-700 hover:underline">
                  info@company.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-purple-500" />
                <a href="#" className="text-purple-700 hover:underline">
                  Start a live chat
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-purple-500" />
                <a href="#" className="text-purple-700 hover:underline">
                  Shoot us an email
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-purple-900">Visit us</h2>
              <div className="flex items-center">
                <MapPin className="mr-3 text-purple-500" />
                <p>100 Smith Street, Collingwood VIC 3066</p>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-purple-900">Follow us</h2>
              <div className="flex items-center space-x-4">
                <a
                  href="https://linkedin.com/company/yourcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-700 hover:underline"
                >
                  <Linkedin className="mr-2 text-purple-500" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/yourcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-700 hover:underline"
                >
                  <Github className="mr-2 text-purple-500" />
                  GitHub
                </a>
                <a
                  href="https://twitter.com/yourcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-700 hover:underline"
                >
                  <Twitter className="mr-2 text-purple-500" />
                  Twitter
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
