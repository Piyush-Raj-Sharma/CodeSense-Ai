import { Link } from "react-router-dom";
import {
  Sparkles,
  Lightbulb,
  Bug,
  Code2,
  ShieldCheck,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="px-4 py-20 text-center flex flex-col items-center">
        <div className="max-w-3xl backdrop-blur-xl bg-gradient-to-br from-[#1f1f2e] via-[#222232] to-[#1e1e30] border border-purple-800/20 p-10 rounded-3xl shadow-2xl transition hover:shadow-purple-900/40">
          <div className="flex justify-center mb-6">
            <Sparkles size={44} className="text-purple-400 animate-pulse drop-shadow" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Welcome to CodeSense AI
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
            Smart Code Analyzer built for developers – get instant code explanations, detect bugs, and improve your code effortlessly.
          </p>

          <Link
            to="/codesense-ai"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition shadow-lg hover:scale-105"
          >
            🚀 Try CodeSense AI
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          ✨ Features that Empower
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard
            icon={<Lightbulb className="text-yellow-400 w-8 h-8" />}
            title="Explain Code"
            description="Understand every line of code with AI-powered explanations. Great for learning and reviewing unfamiliar code."
          />
          <FeatureCard
            icon={<Bug className="text-red-400 w-8 h-8" />}
            title="Debug with AI"
            description="Find bugs instantly and receive smart suggestions with inline comments. Save time and avoid errors."
          />
          <FeatureCard
            icon={<Code2 className="text-green-400 w-8 h-8" />}
            title="Multi-Language Support"
            description="Supports JavaScript, Python, Java, C++, and more – switch languages seamlessly and analyze code easily."
          />
          <FeatureCard
            icon={<ShieldCheck className="text-blue-400 w-8 h-8" />}
            title="Safe & Secure"
            description="Your code is never stored without permission. Designed with privacy and security in mind."
          />
          <FeatureCard
            icon={<Sparkles className="text-purple-400 w-8 h-8" />}
            title="Intuitive Interface"
            description="A beautiful, fast, and distraction-free UI that makes coding and analyzing enjoyable."
          />
          <FeatureCard
            icon={<Lightbulb className="text-yellow-300 w-8 h-8" />}
            title="Session History"
            description="Review your previously saved code with ease. Restart sessions or cleanly start over anytime."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-[#190537] via-[#1e0259] to-[#210149]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white tracking-tight">
          Start exploring your code with AI today!
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Whether you're debugging, learning, or just curious, CodeSense AI makes your developer journey smoother.
        </p>
        <Link
          to="/codesense-ai"
          className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition shadow-md hover:scale-105"
        >
          🔍 Launch CodeSense AI
        </Link>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gradient-to-br from-[#2b2b38] via-[#1d1d2e] to-[#2e2e3f] border border-white/10 hover:border-purple-500 hover:shadow-purple-800/20 backdrop-blur-lg p-6 rounded-xl shadow-md flex flex-col items-start gap-3 transition-all duration-300">
    {icon}
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-gray-300 text-sm">{description}</p>
  </div>
);

export default Home;
