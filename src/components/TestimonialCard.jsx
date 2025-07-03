const TestimonialCard = ({ name, feedback, location }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
      <p className="text-gray-700 italic">"{feedback}"</p>
      <div className="mt-4">
        <h5 className="text-sm font-bold text-gray-800">{name}</h5>
        <span className="text-xs text-gray-500">{location}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
