const services = [
  { title: "Custom Furniture", desc: "We create tailor-made pieces for homes and offices." },
  { title: "Full Home Setup", desc: "Complete furniture setup including sofa, beds, dining, etc." },
  { title: "Repair & Renovation", desc: "Furniture repair and wood polishing services." },
  { title: "Office Furniture", desc: "Modern designs for desks, drawers, and chairs." },
];

const Services = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">{s.title}</h3>
            <p className="text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
