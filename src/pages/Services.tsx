const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Cash Flow Tracking</h3>
            <p className="text-gray-600">Real-time monitoring of your income and expenses with detailed analytics.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Predictive Analysis</h3>
            <p className="text-gray-600">AI-powered predictions to forecast your future cash flow trends.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Financial Reports</h3>
            <p className="text-gray-600">Comprehensive reporting tools to track your financial performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;