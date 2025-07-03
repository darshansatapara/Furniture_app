const CategoryCard = ({ title, image }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 bg-white">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
