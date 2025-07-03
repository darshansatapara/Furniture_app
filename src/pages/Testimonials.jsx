import TestimonialCard from "../components/TestimonialCard";

const testimonials = [
  {
    name: "Ramesh Patel",
    feedback: "Beautiful furniture and very professional service. Highly recommended!",
    location: "Ahmedabad",
  },
  {
    name: "Anita Shah",
    feedback: "I got my home completely furnished. Stunning work and attention to detail.",
    location: "Baroda",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">What Clients Say</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
