"use client";

export default function Career() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Outer Box Wrapper */}
      <div className="border-2 border-gray-300 rounded-lg p-8 shadow-lg">
        {/* Page Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-purple-700 mb-6">Join Our Team</h1>
          <p className="text-lg text-gray-600">
            Discover exciting opportunities to be part of a forward-thinking team, shaping the future with innovation and purpose. 
            Let's build something extraordinary together.
          </p>
        </header>

        {/* Job Listings Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-purple-700 mb-8">Current Opportunities</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Job Card */}
            <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <h3 className="text-xl font-semibold text-purple-800">Frontend Developer</h3>
              <p className="text-sm text-gray-600">Remote | Full-Time</p>
              <p className="text-gray-700 mt-4">
                Collaborate with our design and development team to craft stunning, user-friendly interfaces with modern technologies.
              </p>
              <a
                href="#apply"
                className="text-purple-600 hover:underline font-medium mt-4 block"
              >
                Apply Now
              </a>
            </div>
            <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <h3 className="text-xl font-semibold text-purple-800">Backend Developer</h3>
              <p className="text-sm text-gray-600">Remote | Part-Time</p>
              <p className="text-gray-700 mt-4">
                Build and maintain robust APIs and scalable backend services to drive our innovative solutions.
              </p>
              <a
                href="#apply"
                className="text-purple-600 hover:underline font-medium mt-4 block"
              >
                Apply Now
              </a>
            </div>
            <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <h3 className="text-xl font-semibold text-purple-800">Volunteer Contributor</h3>
              <p className="text-sm text-gray-600">Remote | Flexible</p>
              <p className="text-gray-700 mt-4">
                Share your passion by contributing to our open-source projects, from code to documentation and beyond.
              </p>
              <a
                href="#contribute"
                className="text-purple-600 hover:underline font-medium mt-4 block"
              >
                Get Involved
              </a>
            </div>
          </div>
        </section>

        {/* Contribution Guidelines Section */}
        <section className="mb-16" id="contribute">
          <h2 className="text-3xl font-bold text-purple-700 mb-8">How to Contribute</h2>
          <p className="text-gray-700 mb-4">
            Whether you're a developer, designer, or strategist, your contributions can make a real impact. Here's how to get started:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>Fork our GitHub repository and dive into the codebase.</li>
            <li>Read through our contribution guidelines for a seamless process.</li>
            <li>Submit a pull request to share your changes with the team.</li>
            <li>Help improve our documentation or brainstorm innovative features.</li>
          </ul>
          <a
            href="https://github.com/aoldev/aoldev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline font-medium mt-6 inline-block"
          >
            Visit Our GitHub Repository
          </a>
        </section>

        {/* Team & Culture Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-purple-700 mb-8">Our Mission & Culture</h2>
          <p className="text-gray-700 mb-4">
            At the heart of our team is a shared passion for innovation and excellence. We believe in fostering a culture that celebrates creativity, diversity, and a drive to create impactful solutions.
          </p>
          <p className="text-gray-700">
            Join us and collaborate with a team of trailblazers, where your ideas are valued, your growth is supported, and your contributions leave a lasting mark.
          </p>
        </section>

        {/* Application Process Section */}
        <section className="mb-16" id="apply">
          <h2 className="text-3xl font-bold text-purple-700 mb-8">Application Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-3">
            <li>Explore the opportunities listed above and choose the role that excites you the most.</li>
            <li>Prepare your resume and a compelling cover letter that highlights your skills and experiences.</li>
            <li>
              Send your application to{" "}
              <a
                href="mailto:careers@example.com"
                className="text-purple-600 hover:underline"
              >
                careers@example.com
              </a>.
            </li>
            <li>We’ll carefully review your application and get in touch for the next steps.</li>
          </ol>
        </section>

        {/* Contact Information Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-purple-700 mb-8">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Have any questions or need further clarification? We're here to help.
          </p>
          <p className="text-gray-700">
            Email:{" "}
            <a
              href="mailto:careers@example.com"
              className="text-purple-600 hover:underline"
            >
              careers@example.com
            </a>
          </p>
          <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-purple-700 mb-8">FAQs</h2>
          <div className="space-y-4">
            <details className="border rounded p-4">
              <summary className="font-semibold text-purple-800">
                How can I contribute to the project?
              </summary>
              <p className="text-gray-700 mt-2">
                Review our Contribution Guidelines section to learn how you can participate effectively.
              </p>
            </details>
            <details className="border rounded p-4">
              <summary className="font-semibold text-purple-800">
                Are these roles remote-friendly?
              </summary>
              <p className="text-gray-700 mt-2">
                Yes, all roles are fully remote to accommodate diverse talents worldwide.
              </p>
            </details>
            <details className="border rounded p-4">
              <summary className="font-semibold text-purple-800">
                What technologies are you using?
              </summary>
              <p className="text-gray-700 mt-2">
                Our stack includes React, Node.js, Python, and other modern technologies, but we're open to new ideas and tools.
              </p>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
}
