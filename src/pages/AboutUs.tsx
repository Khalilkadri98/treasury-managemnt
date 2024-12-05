const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Our Team"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
          </div>
          <h1 className="text-3xl font-bold text-center mb-12">About Us</h1>
          <p className="text-gray-600 mb-6">
            We are dedicated to providing businesses with powerful tools to manage their finances effectively. Our platform combines modern technology with user-friendly interfaces to make financial management accessible to everyone.
          </p>
          <p className="text-gray-600 mb-6">
            With years of experience in financial technology, our team understands the challenges businesses face in managing cash flow. That's why we've developed an intelligent solution that not only tracks your finances but also helps predict future trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;