'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react';





/*=================================================================================*/

export default function PersonalWebsite() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const pages = ['home', 'about', 'projects', 'work', 'fun', 'contact'];

  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-orange-900/20"></div>
        <div className="text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-[fadeIn_1s_ease-in]">
            Brandon Han
          </h1>
          <div className="h-1 bg-gradient-to-r from-gray-700 to-gray-400 mx-auto animate-[expandWidth_1s_ease-out_0.5s_forwards] origin-center" 
               style={{width: '0'}}></div>
          <p className="text-xl md:text-2xl text-gray-300 mt-6 animate-[fadeIn_1s_ease-in_1.5s_both]">
            awesome sauce
          </p>
        </div>
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes expandWidth {
            from { width: 0; }
            to { width: 8rem; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white animate-[fadeIn_0.5s_ease-in]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-2xl font-bold bg-gradient-to-r from-orange-800 to-yellow-600 bg-clip-text text-transparent hover:from-orange-800 hover:to-orange-600 transition-all"
            >
              Brandon Han
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {pages.map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`transition-all relative group ${
                    currentPage === page 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {page === 'fun' ? 'fun things' : page}
                  {currentPage === page && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-800 to-yellow-600"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              {pages.map(page => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    setMobileMenuOpen(false);
                  }}
                  className={`capitalize text-left transition-all ${
                    currentPage === page 
                      ? 'text-white' 
                      : 'text-gray-400'
                  }`}
                >
                  {page === 'fun' ? 'Fun Things' : page}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Content */}
      <main className="pt-20 animate-[slideUp_0.6s_ease-out]">
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'projects' && <ProjectsPage />}
        {currentPage === 'work' && <WorkPage />}
        {currentPage === 'fun' && <FunPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
/*=================================================================================*/

function HomePage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rotating-squares">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="square"
              style={{
                width: `${100 + i * 80}px`,
                height: `${100 + i * 80}px`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl text-center relative z-10">

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from- via-orange-800 to-orange-8600 bg-clip-text text-transparent">
          Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
          I make things
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button 
            onClick={() => setCurrentPage('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-orange-800 to-orange-600 rounded-lg hover:from-orange-800 hover:to-orange-600 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 flex items-center gap-2"
          >
            i have projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={0} />
          </button>
          <button 
            onClick={() => setCurrentPage('work')}
            className="px-8 py-4 border border-white/20 rounded-lg hover:bg-white/5 transition-all backdrop-blur-sm"
          >
            i also work
          </button>
        </div>

        {/* Floating badges */}
        <div className="mt-16 flex gap-4 justify-center flex-wrap">
          {[].map(tech => (
            <span key={tech} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .rotating-squares {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: mainRotate 30s linear infinite;
        }

        .square {
          position: absolute;
          border: 1px solid rgba(200, 200, 200, 0.2);
          animation: rotateSquare 20s linear infinite;
          transform-origin: center;
        }

        .square:nth-child(even) {
          border-color: rgba(120, 120, 120, 0.2);
        }

        @keyframes mainRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotateSquare {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.05); }
          100% { transform: rotate(360deg) scale(1); }
        }
      `}</style>
    </div>
  );
}
/*=================================================================================*/

function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        a little bit about me...
      </h2>
      <div className="space-y-8 text-lg text-gray-400 leading-relaxed">
        <p>
          hello! my names brandon and i am a 3rd year computer engineering student attending calpoly. i like to make things, i like being outside, i like exercising, and i like to play music. i am part of a big family and i have an even bigger dog.
        </p>
        

        <div className="flex justify-center my-12">
          <div className="relative p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20">
            <img 
              src="/images/image0.jpeg"
              alt="About me"
              className="w-full max-w-md h-auto rounded-xl object-cover"
            />
          </div>
        </div>
        
        <p>
          i like trying new things and i frequently push myself into situations that i am unfamiliar with. this has led me to fall in love with many things, i like climbing, i like hiking biking, i like basketball, i like to go to the gym, and i like meeting new people. i also love eating food.
        </p>

        <div className="flex justify-center my-12">
          <div className="relative p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20">
            <img 
              src="/images/image3.jpeg"
              alt="About me"
              className="w-full max-w-md h-auto rounded-xl object-cover"
            />
          </div>
        </div>

        <p>
        this snake was actually about to eat me but its ok i am alive.
        </p>

      </div>
    </div>
  );
}
/*=================================================================================*/

function ProjectsPage() {
  const projects = [
    {
      title: 'gokart',
      description: 'im trying to build a electric gokart from scratch right now, things are still in research and planning phase but gonna be super cool',
      tech: ['KiCAD', 'FreeRTOS', 'C++', 'LTSpice'],
      image: '/images/image1.jpeg'
    },
    {
      title: 'AI integrated automatic irrigation system',
      description: 'automatic irrigation system that uses sensors to sense temperature, humity, and moisture levels of plants. interfaces with a custom ai agent model that gives summaries and analyzes data collected from sensors to give suggestions on how to optimize plant growth. using every serial interface possible, spi, i2c, usart, adc, pwm.',
      tech: ['STM32', 'C', 'OpenAI API', 'I2C', 'USART', 'PWM', 'SPI'],
      image: '/images/image1.jpeg'
    },
    {
      title: 'fullstack Ecommerce platform',
      description: 'developed scalable full stack ecommerce platform with stripe integrated customer view and supabase auth-secured admin portal. implemented supabase authentication, buckets, and tables for secure product, orders, and gallery image management. selling hair products.',
      tech: ['React', 'Next.js', 'Supabase', 'Stripe API'],
      image: '/images/image1.jpeg'
    },
    {
      title: '16 bit riscv cpu',
      description: 'architeched and implemented a custom 16-bit riscv microprocessor for fpga deployment, featuring a 5-stage pipelined architecture with hazard detection, dm instruction cache, and sa data cache. initially built as a multicycle cpu then modified to pipelined. implemented caches for faster processing times. deployed on basys3 fpga board and tested using verilog testbenches.',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      image: '/images/image1.jpeg'
    },
    {
      title: 'powershell',
      description: 'made a simple powershell terminal in c that can execute basic commandes, has piping and redirection capabilities, and can run basic scripts. implemented several built in commands such as cd, ls, echo, cat, rm, and more. also implemented signal handling for ctrl+c and ctrl+z. pretty cool project couldve extended it but i just wanted a classic terminal look.',
      tech: ['C'],
      image: '/images/image1.jpeg'
    },
    {
      title: 'todo list app',
      description: 'simple todo list app for ios that allows users to track tasks. has json default and user memorory storage capabilities. implemented using swift and swiftui. features include adding, deleting, and editing tasks, as well as marking tasks as complete. simple and clean ui design with focus on usability.',
      tech: ['Swift'],
      image: '/images/image14.png'
    },
    {
      title: 'fpga memory game',
      description: 'first game made on a fpga, designed input controller, fsm , seven seg display, led controller, and accumulator. basic led memory game nothing crazy but was super fun. got to use lots of the interfaces on basys3 board.',
      tech: ['System Verilog', 'Vivado', 'Basys3'],
      image: '/images/image13.png'
    },
    {
      title: 'virtual world',
      description: 'coded virtual world game in java using jupiter graphics library, drew over 150+ custom animations for background, objects, and players. was capable of automatic play mode or manual. characters had a* pathing systems and were able to interact with other entities and objects in the world. added inventories and tasks was super fun i loved this project.',
      tech: ['Java', 'Jupiter'],
      image: '/images/image12.png'
    },
    {
      title: 'national park guide app',
      description: 'simple swift ui app using the mapkit framework. was pretty much a gallery for national parks in the us, had a map view with a summary and annotations for each park. clicking on the annotation would bring up a detail view with more information and pictures of the park. implemented using swift and swiftui, learned a lot about mapkit and how to use it effectively.',
      tech: ['Swift', 'MapKit'],
      image: '/images/image1.jpeg'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-4 inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm">
        Projects
      </div>
      <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Featured Work
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="group border border-white/10 rounded-xl hover:border-white/30 transition-all bg-white/5 backdrop-blur-sm hover:bg-white/10 relative overflow-hidden">
            {/* Image container */}
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

            </div>

            {/* Content */}
            <div className="p-8">
              <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`}></div>
              <h3 className="text-2xl font-bold mb-3 text-white relative z-10">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 relative z-10">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {project.tech.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white/10 text-sm rounded-full border border-white/10 text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
/*=================================================================================*/

function WorkPage() {
  const experiences = [
    {
      role: 'firmware project lead',
      company: 'calpoly racing',
      period: '2024 - now',
      description: 'leading subteam of like 12 engineers to design and develop firmware for custom stm32 pcbs. leading can board and drs projects. implementing over 16 sensors in the car for data acquisition, test verification, and internal board communication. working along side 15+ other subsystems to design the best car for michigan FSAE compitition. won 6th place last year out of 120 teams, hoping to do better this year we have alot in the works.',
      gradient: 'from-gray-500 to-gray-500'
    },
    {
      role: 'software developer',
      company: 'calpoly robotics',
      period: '2024 - now',
      description: 'working on the computer vision team for UROV, implemented software to autonomously map and localize an agent using opencv and slam, that was a pain in the butt and really sucked but was cool. wrote image stitching software that takes over 500 photos in real time and stitches them together to generate a interactable photosphere. built interactive ui dashboard for camera data and driver inputs. wrote vector matrix physics algorithms to control power sent to 6 different propellers on the urov, this was weird but bareable. wrote real time object identification and measurement algortihms using opencv.',
      gradient: 'from-gray-500 to-gray-500'
    },
    {
      role: 'coding instructor',
      company: 'thecoderschool',
      period: '2025 - 2025',
      description: 'worked here over summer, had a good time teaching kids various applications of coding. taught python camps, minecraft camps, and game development camps. had 1 on 1 tutoring as well for clients who wanted help on personal projects.',
      gradient: 'from-gray-500 to-gray-500'
    },
    {
      role: 'section leader',
      company: 'stanford',
      period: '2025 - 2025',
      description: 'spent a few months leading weekly coding sections for a program at stanford, taught college students how to program in python and its various library applications. was actually super cool i had students from many cxountries across the world and i feel very privallged to be able to work here. ',
      gradient: 'from-gray-500 to-gray-500'
    },
    {
      role: 'coding instructor',
      company: 'tech rocks!',
      period: '2018 - 2023',
      description: 'over breaks i taught kids voding fundamentals through scratch and code.org, i actually was a student here as well so it was fun. taught kids through minecraft modding and game design as well.',
      gradient: 'from-gray-500 to-gray-500'
    },
    {
      role: 'sales associate',
      company: 'world market',
      period: '2022 - 2023',
      description: 'did cashier stuff, stocked the shelves, helped customers find things, was a very braindead job but coworkers were fun to be around',
      gradient: 'from-gray-500 to-gray-500'
    },
    {
      role: 'shift lead',
      company: 'truedan',
      period: '2021 - 2022',
      description: 'i made boba here and it was fun, made good friends and got free boba and enjoyed serving people',
      gradient: 'from-gray-500 to-gray-500'
    },
    {
      role: 'soccer referee',
      company: 'USSF',
      period: '2016 - 2019',
      description: 'i was a soccer referee, i mainly refereed for youth soccer games lots of screaming parents yikes',
      gradient: 'from-gray-500 to-gray-500'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        my work
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-8 border-l-2 border-white/10 hover:border-gray-300/50 transition-all group">
            <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r ${exp.gradient}`}></div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
              <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
              <p className="text-gray-200 mb-3">{exp.company} • {exp.period}</p>
              <p className="text-gray-400">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
/*=================================================================================*/
function FunPage() {
  const interests = [
    { 
      title: 'tkd', 
      desc: 'heres my family', 
      image: '/images/image11.jpeg'
    },
    { 
      title: 'tyler', 
      desc: 'best concert ive been too', 
      image: '/images/image10.jpeg'
    },
    { 
      title: 'taiwan', 
      desc: 'am i a donut?', 
      image: '/images/image9.png'
    },
    /**/
    { 
      title: 'climbing', 
      desc: 'this was a fun v3', 
      image: '/images/image8.png'
    },
    { 
      title: 'concert', 
      desc: 'billie concert was fire', 
      image: '/images/image7.png'
    },
    { 
      title: 'golf', 
      desc: 'i suck at golf but its for fathers day', 
      image: '/images/image6.jpeg'
    },
    { 
      title: 'death valley', 
      desc: 'me and my brother in the dunes', 
      image: '/images/image1.jpeg'
    },
    { 
      title: 'ebike', 
      desc: 'probably the best thing ive ever spent my money on', 
      image: '/images/image2.jpeg'
    },
    { 
      title: 'bali', 
      desc: 'rice patties in bali', 
      image: '/images/image4.jpeg'
    },
    { 
      title: 'atv', 
      desc: 'going through waterfalls and rivers', 
      image: '/images/image5.jpeg'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        things ive been up to
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {interests.map((item, idx) => (
          <div key={idx} className="group relative overflow-hidden border border-white/10 rounded-xl hover:border-white/30 transition-all bg-white/5 backdrop-blur-sm hover:bg-white/10">
            {/* Image container - responsive height */}
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p>
        more coming soon...
      </p>
    </div>
  );
}
/*=================================================================================*/

function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        heres how you can reach me
      </h2>
      <div className="space-y-8">
        
        <div className="grid md:grid-cols-3 gap-4">
          <a 
            href="mailto:brandon8000@icloud.com"
            className="group flex flex-col items-center gap-3 px-6 py-8 border border-white/10 rounded-xl hover:border-purple-500/50 transition-all bg-white/5 backdrop-blur-sm hover:bg-white/10"
          >
            <Mail className="group-hover:scale-110 transition-transform text-purple-400" size={32} />
            <span className="text-sm text-gray-400">email</span>
            <span className="text-white text-sm">email me</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/brandonhans/"
            className="group flex flex-col items-center gap-3 px-6 py-8 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all bg-white/5 backdrop-blur-sm hover:bg-white/10"
          >
            <Linkedin className="group-hover:scale-110 transition-transform text-cyan-400" size={32} />
            <span className="text-sm text-gray-400">link in</span>
            <span className="text-white text-sm">connect</span>
          </a>
        </div>
      </div>
    </div>
  );
}
