const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
      <p className="text-gray-700 leading-relaxed text-lg">
        Welcome to FurnitureCraft! With over 15 years of experience, we specialize in crafting high-quality,
        custom-made furniture for homes and offices. Whether it’s a stylish sofa, a sturdy bed, or a space-saving almari, every
        piece is handcrafted with precision and love. Our goal is to bring your vision to life with modern
        designs and traditional quality.
      </p>
      <div className="mt-8 text-center">
        <img src="/images/carpenter.jpg" alt="Our Workshop" className="rounded-lg shadow-lg mx-auto max-w-md" />
      </div>
    </section>
  );
};

export default About;
