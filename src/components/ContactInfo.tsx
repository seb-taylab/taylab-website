
import { Mail, Calendar } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-[#0A1A2F] text-white rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-[#0A1A2F]">
            Begin Your Leadership Journey
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Ready to cultivate character-driven leadership in yourself or your institution? Schedule a consultation with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Individuals/Families */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#0A1A2F] rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">For Individuals & Families</h3>
              <p className="text-gray-600 mb-6">
                Discover how our virtue-talent framework can help you or your child develop lasting leadership character.
              </p>
              <a
                href="#"
                className="px-6 py-3 bg-[#D4AF37] text-[#0A1A2F] font-semibold rounded-md hover:bg-opacity-90 transition-all inline-flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  // Would connect to Calendly in a real implementation
                  alert("This would connect to a scheduling calendar in the live site.");
                }}
              >
                Book a Family Strategy Call
              </a>
            </div>
          </div>

          {/* For Institutions */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#0A1A2F] rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">For Schools & Organizations</h3>
              <p className="text-gray-600 mb-6">
                Partner with us to build character-driven leadership programs that transform your institution.
              </p>
              <a
                href="mailto:partnerships@taylab.com"
                className="px-6 py-3 border-2 border-[#0A1A2F] text-[#0A1A2F] font-semibold rounded-md hover:bg-gray-50 transition-all inline-flex items-center"
              >
                Request Partnership Kit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
