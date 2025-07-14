
import { Github, Linkedin,Globe, Rocket, Wrench } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-6 py-12 flex flex-col items-center">
      {/* === Developer Profile First === */}
      <section className="max-w-4xl w-full mb-16 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQH8GvUopEZ_xg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732709448070?e=1758153600&v=beta&t=FoI8HWzwiGyKZfdhKCSW1xb6hRzR0pdz45S0G0aD_oQ" // Replace with actual image
            alt="Piyush Raj"
            className="w-32 h-32 rounded-full cover border-4 border-blue-500 shadow-lg"
          />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold text-white mb-1">Piyush Raj</h2>
          <p className="text-gray-400 text-sm mb-2">
            Frontend Developer | Java & JavaScript Enthusiast | Creative Technologist
          </p>
          <p className="text-blue-400 text-sm mb-4">
            🎓 Bachelor of Engineering (B.E.) in Computer Science
          </p>

          <div className="flex justify-center lg:justify-start gap-5">
            <a
              href="https://www.linkedin.com/in/piyush-raj-sharma/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-white transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/Piyush-Raj-Sharma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-white transition"
            >
              <Github size={22} />
            </a>

            {/* <a
              href="https://yourportfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio"
              className="text-gray-300 hover:text-white transition"
            >
              <Globe size={22} />
            </a> */}
          </div>
        </div>
      </section>

      {/* === Product Overview === */}
      <section className="max-w-4xl text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-white">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            CodeSense AI
          </span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          CodeSense AI is a smart and sleek developer tool that explains,
          debugs, and enhances your code using AI — designed for both beginners
          and professionals.
        </p>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl text-left shadow-xl">
          <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
            <Rocket size={20} /> Version:{" "}
            <span className="text-white">v1.0.0</span>
          </h3>
          <ul className="list-disc pl-6 text-gray-300 text-sm space-y-2">
            <li>Explain and debug code with one click</li>
            <li>Live syntax-highlighted editor</li>
            <li>Local history management</li>
            <li>Mobile-responsive interface</li>
          </ul>
        </div>
      </section>

      {/* === Roadmap === */}
      <section className="max-w-4xl w-full mb-10">
        <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
          <Wrench size={20} /> What’s Coming Next?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
          {[
            {
              title: "🔐 User Accounts",
              desc: "Create and manage accounts to sync sessions and access code history from any device.",
            },
            {
              title: "🧠 Smarter AI Actions",
              desc: "Inline refactoring, optimization tips, and clean code suggestions with GPT-powered tools.",
            },
            {
              title: "🎨 UI Customization",
              desc: "Multiple themes, font preferences, and layout options for full user control.",
            },
            {
              title: "🔍 Real-time Code Validation",
              desc: "Instant syntax and logical validation as you type.",
            },
            {
              title: "🚀 Language Expansion",
              desc: "Support for C++, PHP, SQL, modern frontend frameworks, and more.",
            },
            {
              title: "📱 Cross-device Sync",
              desc: "Save, load, and collaborate on code across mobile and desktop platforms.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-purple-500 hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
