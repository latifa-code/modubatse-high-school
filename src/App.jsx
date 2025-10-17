/*
Modubatse High School - Website
Built with React + Tailwind CSS for Ponontle Website Competition 2025
*/
import React, { useState, useEffect } from "react";

// Simple hash router
function Router({ routes }) {
  const [path, setPath] = useState(window.location.hash.replace('#', '') || '/');
  useEffect(() => {
    const onHash = () => setPath(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const Route = routes[path] || routes['/404'];
  return Route ? <Route /> : null;
}

const tel = (n) => `tel:${n}`;

// Header
function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white sticky top-0 z-40 shadow">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-lg font-bold">MH</div>
            <div>
              <a href="#/" className="text-xl font-semibold leading-4">Modubatse High School</a>
              <div className="text-sm opacity-80">Knowledge • Growth • Excellence</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#/" className="hover:underline">Home</a>
            <a href="#/about" className="hover:underline">About</a>
            <a href="#/programs" className="hover:underline">Programs</a>
            <a href="#/gallery" className="hover:underline">Gallery</a>
            <a href="#/admissions" className="hover:underline">Admissions</a>
            <a href="#/contact" className="hover:underline">Contact</a>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

// Mobile menu
function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden relative">
      <button aria-expanded={open} onClick={() => setOpen(!open)} className="p-2 bg-white/10 rounded">
        <span className="sr-only">Open menu</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white/95 text-gray-800 rounded shadow-lg">
          <a className="block px-4 py-3 border-b" href="#/">Home</a>
          <a className="block px-4 py-3 border-b" href="#/about">About</a>
          <a className="block px-4 py-3 border-b" href="#/programs">Programs</a>
          <a className="block px-4 py-3 border-b" href="#/gallery">Gallery</a>
          <a className="block px-4 py-3" href="#/contact">Contact</a>
        </div>
      )}
    </div>
  );
}

// Home Page
function Home() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Welcome to Modubatse High School</h1>
          <p className="mt-4 text-lg text-gray-700">
            A place of excellence where we nurture young minds through quality education, discipline, and innovation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#/admissions" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-lg shadow hover:brightness-105">
              Apply for Admission
            </a>
            <a href="#/programs" className="inline-block border border-indigo-200 px-5 py-3 rounded-lg">
              View Programs
            </a>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
          alt="Students"
          className="rounded-lg shadow-lg"
        />
      </section>
    </div>
  );
}

// About
function About() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl font-bold">About Modubatse High School</h2>
      <p className="mt-4 text-gray-700">
        Established with the goal of academic excellence, Modubatse High School offers a balanced education focusing on knowledge, skills, and character. 
        Our learners are encouraged to become innovative thinkers and responsible citizens.
      </p>
      <p className="mt-4 text-gray-700">
        We take pride in our dedicated teachers, supportive parents, and motivated learners who embody our values of Respect, Integrity, and Achievement.
      </p>
    </main>
  );
}

// Programs
function Programs() {
  const items = [
    { title: "Mathematics & Science", desc: "Equipping learners with analytical and problem-solving skills for future success." },
    { title: "Commerce & Business Studies", desc: "Preparing students with entrepreneurial and financial literacy." },
    { title: "Technology & Computer Skills", desc: "Developing modern ICT knowledge for the digital world." }
  ];
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl font-bold">Our Academic Programs</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-lg">{it.title}</h3>
            <p className="mt-2 text-gray-700">{it.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

// Contact
function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="mt-2 text-gray-700">We’d love to hear from you. Reach out for admissions or general inquiries.</p>
      <p className="mt-6 text-gray-700">
        📍 Modubatse High School, Fauna Park, South Africa<br />
        📞 <a href={tel("+27123456789")} className="text-indigo-600">+27 12 345 6789</a><br />
        📧 <a href="mailto:info@modubatsehighschool.co.za" className="text-indigo-600">info@modubatsehighschool.co.za</a>
      </p>
    </main>
  );
}

// 404 page
function NotFound() {
  return (
    <main className="text-center py-20">
      <h2 className="text-4xl font-bold">404 — Page Not Found</h2>
      <a href="#/" className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded">Back to Home</a>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="text-center text-sm">
        © {new Date().getFullYear()} Modubatse High School — All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  const routes = {
    "/": Home,
    "/about": About,
    "/programs": Programs,
    "/contact": Contact,
    "/404": NotFound,
  };
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-grow">
        <Router routes={routes} />
      </main>
      <Footer />
    </div>
  );
}
