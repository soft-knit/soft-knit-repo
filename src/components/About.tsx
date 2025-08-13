import React from 'react';
import { Code2, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Turning complex challenges into elegant solutions'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in agile development teams'
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and best practices'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Passionate Developer with a Vision for Innovation
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a dedicated software developer with expertise in modern web technologies. 
              My journey in programming started with curiosity and has evolved into a passion 
              for creating meaningful digital experiences that solve real-world problems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in the power of collaboration and continuous learning to drive innovation forward.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="bg-gray-700 text-purple-400 px-4 py-2 rounded-full text-sm">
                5+ Years Experience
              </span>
              <span className="bg-gray-700 text-blue-400 px-4 py-2 rounded-full text-sm">
                50+ Projects Completed
              </span>
              <span className="bg-gray-700 text-pink-400 px-4 py-2 rounded-full text-sm">
                Open Source Contributor
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <item.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;