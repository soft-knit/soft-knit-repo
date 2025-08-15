import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter,MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Simulate form submission (replace with actual email service)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'knitsera@gmail.com',
      link: 'mailto:knitsera@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9987887543',
      link: 'tel:+919987887543'
    },
    {
      icon: MapPin,
      title: 'Mumbai',
      value: 'Mumbai, India',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/soft-knit',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shailesh-yadav-639a53240/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://https://x.com/Shailes20971758',
      color: 'hover:text-blue-400'
    }
  ];
  const WHATSAPP_NUMBER = '919987887543'; // <-- 91 + your number without + or spaces

  const buildPrefill = () => {
    const { name, email, message } = formData;
    return [
      `Hi, I'm ${name || '—'}.`,
      email ? `Email: ${email}` : '',
      '',
      message || 'I would like to discuss a project.'
    ].filter(Boolean).join('\n');
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildPrefill())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openGmailCompose = () => {
    const subject = 'Project inquiry';
    const body = buildPrefill();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=knitsera@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const openMailto = () => {
    const subject = 'Project inquiry';
    const body = buildPrefill();
    window.location.href = `mailto:knitsera@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="w-full bg-green-600/90 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                  aria-label="Message on WhatsApp"
                >
                  <MessageCircle size={18} />
                  Message on WhatsApp
                </button>

                <button
                  type="button"
                  onClick={openGmailCompose}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                  aria-label="Compose in Gmail"
                >
                  <Send size={18} />
                  Compose in Gmail
                </button>
              </div>

              {/* Tiny fallback link for non-Gmail users */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={openMailto}
                  className="text-sm text-gray-300 hover:text-purple-300 underline underline-offset-4"
                >
                  …or use your default email app
                </button>
              </div>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-600/20 border border-green-600/30 rounded-lg">
                  <p className="text-green-400 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-600/20 border border-red-600/30 rounded-lg">
                  <p className="text-red-400 text-center">
                    Failed to send message. Please try again or contact me directly.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 group"
                  >
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-200">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{info.title}</h4>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-800 p-4 rounded-lg transition-all duration-200 hover:bg-gray-700 hover:scale-110 hover:shadow-lg ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <h4 className="text-white font-semibold mb-4">Let's Work Together</h4>
              <p className="text-gray-400 leading-relaxed">
                I'm currently available for freelance work and full-time opportunities. 
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;