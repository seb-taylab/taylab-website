
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "David Li",
    role: "High School Senior",
    image: "/lovable-uploads/e502f601-c519-43a8-86f5-5fa89ae50d2f.png",
    quote: "The Tier 3 Discipline badge wasn't just something for my college applications—it changed how I approach everything from academics to athletics."
  },
  {
    name: "Sophia Wang",
    role: "Debate Team Captain",
    image: "/lovable-uploads/3de85ddd-15e1-4216-9697-f91abb9a47ce.png",
    quote: "My 'Initiative 创' training gave me the confidence to start a mentoring program that now helps dozens of freshmen find their voice."
  },
  {
    name: "Mrs. Jackson",
    role: "Parent",
    image: "/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png",
    quote: "We tried other leadership programs, but Taylab is different. My son isn't just learning skills—he's developing character virtues that will serve him for life."
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#0A1A2F] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#D4AF37] text-[#0A1A2F] rounded-full text-sm font-medium mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
            Building Tomorrow's Leaders
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            See how Taylab transforms potential into action through our virtue-talent system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto"
                />
              </div>
              <p className="italic text-gray-300 mb-6 text-center">
                "{testimonial.quote}"
              </p>
              <div className="text-center">
                <h4 className="font-bold text-[#D4AF37]">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
