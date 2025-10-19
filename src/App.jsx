/* src/App.jsx
   Updated for Modubatse Secondary School
   - Slogan, contact, address updated
   - Admissions policy and printable/saveable application form added
*/
import React, { useState, useEffect, useRef } from "react";

// Tiny hash router
function Router({ routes }) {
  const [path, setPath] = useState(window.location.hash.replace("#", "") || "/");
  useEffect(() => {
    const onHash = () => setPath(window.location.hash.replace("#", "") || "/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const Route = routes[path] || routes["/404"];
  return Route ? <Route /> : null;
}

const PHONE = "0615267344";
const TEL = (n) => `tel:${n}`;
const EMAIL = "info@modubatsesecondaryschool.co.za";

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white sticky top-0 z-40 shadow">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-lg font-bold">MS</div>
            <div>
              <a href="#/" className="text-xl font-semibold leading-4">Modubatse Secondary School</a>
              <div className="text-sm opacity-90">Knowledge is power</div>
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

          <div className="flex items-center gap-3">
            <a href={TEL(PHONE)} className="hidden md:inline-block bg-white/20 px-3 py-2 rounded-md">Call: {PHONE}</a>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden relative">
      <button aria-expanded={open} onClick={() => setOpen(!open)} className="p-2 bg-white/10 rounded">
        <span className="sr-only">Open menu</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white/95 text-gray-800 rounded shadow-lg">
          <a className="block px-4 py-3 border-b" href="#/">Home</a>
          <a className="block px-4 py-3 border-b" href="#/about">About</a>
          <a className="block px-4 py-3 border-b" href="#/programs">Programs</a>
          <a className="block px-4 py-3 border-b" href="#/gallery">Gallery</a>
          <a className="block px-4 py-3" href="#/admissions">Admissions</a>
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Modubatse Secondary School</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">A school of excellence where young people gain knowledge, character and skills for the future.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#/admissions" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-lg shadow hover:brightness-105">Apply / Admissions</a>
            <a href="#/programs" className="inline-block border border-indigo-200 px-5 py-3 rounded-lg">Our Programs</a>
          </div>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
            <li>✅ Small class sizes</li>
            <li>✅ Holistic curriculum</li>
            <li>✅ Aftercare & clubs</li>
            <li>✅ Qualified teachers</li>
          </ul>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <img alt="Modubatse Secondary School learners and staff"
     src="https://raw.githubusercontent.com/latifa-code/modubatse-high-school/main/FB_IMG_1760898891315.jpg"
     className="w-full h-80 object-cover" />
       </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl font-bold">About Modubatse Secondary School</h2>
      <p className="mt-4 text-gray-700">
        Modubatse Secondary School is committed to providing a strong academic foundation, life skills, and character development. We prepare learners for further study and responsible citizenship.
      </p>
      <div className="mt-6">
        <h3 className="font-semibold">Our Values</h3>
        <ul className="list-disc pl-5 mt-2 text-gray-700">
          <li>Respect</li>
          <li>Discipline</li>
          <li>Curiosity</li>
          <li>Excellence</li>
        </ul>
      </div>
    </main>
  );
}

function Programs() {
  const items = [
    { title: "Mathematics & Science", desc: "Analytical and practical skills to support STEM careers." },
    { title: "Commerce & Business Studies", desc: "Financial literacy, entrepreneurship and commerce basics." },
    { title: "Information Technology", desc: "Practical ICT skills and computer literacy." }
  ];
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl font-bold">Our Programs</h2>
      <p className="mt-2 text-gray-600">A balanced curriculum designed to help learners discover their strengths.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div key={i} className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="font-semibold text-lg">{it.title}</h3>
            <p className="mt-2 text-gray-700">{it.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

function Gallery() {
  const images = [
    {
      src: "https://raw.githubusercontent.com/latifa-code/modubatse-high-school/main/FB_IMG_1760903123552.jpg",
      alt: "Secondary School Events - Scheduled Activities",
      title: "School Events Schedule"
    },
    {
      src: "https://raw.githubusercontent.com/latifa-code/modubatse-high-school/main/FB_IMG_1760903647952.jpg", 
      alt: "Limpopo Jukskei - School Sports",
      title: "Limpopo Jukskei Sports"
    },
    {
      src: "https://raw.githubusercontent.com/latifa-code/modubatse-high-school/main/FB_IMG_1760903240550.jpg",
      alt: "Choral Celebration Festival - Modubatse School Choir",
      title: "Choral Celebration Festival"
    },
    {
      src: "https://images.unsplash.com/photo-1509099836639-18ba6b097b70?q=80&w=1000&auto=format&fit=crop",
      alt: "Students in classroom",
      title: "Classroom Learning"
    },
    {
      src: "https://images.unsplash.com/photo-1510744707863-2f3b9f1b8f4f?q=80&w=1000&auto=format&fit=crop",
      alt: "School sports activity",
      title: "Sports Activities"
    },
    {
      src: "https://images.unsplash.com/photo-1504198266282-1659872e6590?q=80&w=1000&auto=format&fit=crop",
      alt: "School science lab",
      title: "Science Laboratory"
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl font-bold">School Gallery</h2>
      <p className="mt-2 text-gray-600">Explore moments from our school events, activities, and celebrations</p>
      
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, i) => (
          <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <figure className="overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-48 object-cover transform hover:scale-105 transition duration-300" 
              />
            </figure>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{image.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Special Choral Festival Section */}
      <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
        <h3 className="text-2xl font-bold mb-4">Choral Celebration Festival</h3>
        <p className="text-lg mb-2">🎵 <strong>Modubatse School Choir Selected!</strong></p>
        <p className="mb-4">Celebrating Choirs | Embracing Diversity | Creating Networks</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="mb-2"><strong>Date:</strong> 22 August 2025 | 18:30</p>
            <p className="mb-2"><strong>Venue:</strong> Taberna Dei, Polokwane</p>
            <p className="mb-4"><strong>Location:</strong> Limpopo</p>
          </div>
          <div className="text-center">
            <a 
              href="https://tickets.tixsa.co.za/event/choral-celebratisn-festival-19-limpopo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              🎟️ Get Your Tickets Online
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

// Admissions page: includes policy and printable application form
function Admissions() {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl font-bold">Admissions</h2>
      <p className="mt-2 text-gray-600">Welcome. Please review our admissions policy below and complete the application form to apply.</p>

      <AdmissionPolicy />

      <div className="mt-8">
        <h3 className="text-2xl font-semibold">Apply for Admission</h3>
        <p className="mt-2 text-gray-700">Use the form below to request admission. You can print/save the filled form as PDF or download it.</p>

        <ApplicationForm />
      </div>
    </main>
  );
}

function AdmissionPolicy() {
  return (
    <section className="mt-6 bg-gray-50 p-6 rounded-lg border">
      <h3 className="font-semibold text-xl">Admissions Policy</h3>
      <p className="mt-3 text-gray-700">
        Admission to Modubatse Secondary School is administered in accordance with the Constitution of the Republic of South Africa (Act 108 of 1996), the South African Schools Act (Act 84 of 1996), and the National Education Policy Act (Act 27 of 1996). We are committed to non-discrimination, equal access where possible, and transparent admission processes. The following principles apply:
      </p>

      <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
        <li><strong>Non-discrimination:</strong> Admissions will not be based on race, religion, gender, or disability.</li>
        <li><strong>Transparency:</strong> Requirements and selection criteria will be communicated clearly to applicants.</li>
        <li><strong>Priority:</strong> Where demand exceeds places, priority may be given to siblings of current learners and to children who live within the zoning area, in line with our fair admissions practice.</li>
        <li><strong>Documentation:</strong> Applicants must provide identification and proof of residence as part of the application process.</li>
      </ul>

      <p className="mt-3 text-sm text-gray-600 italic">
        Note: This policy provides a summary of our process. For full legal guidance consult the referenced Acts and the school office.
      </p>
    </section>
  );
}

function ApplicationForm() {
  const [form, setForm] = useState({
    parentName: "",
    parentID: "",
    childName: "",
    childID: "",
    grade: "",
    dob: "",
    address: "",
    phone: "",
    email: "",
    previousSchool: "",
    medical: "",
    additionalInfo: ""
  });

  const formRef = useRef(null);

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // For demo, open mail client with summary; for official use connect to backend
    const subject = encodeURIComponent("Admission application - Modubatse Secondary School");
    const body = encodeURIComponent(
      `Parent/Guardian: ${form.parentName}\nParent ID: ${form.parentID}\nChild: ${form.childName}\nChild ID: ${form.childID}\nGrade: ${form.grade}\nDOB: ${form.dob}\nAddress: ${form.address}\nPhone: ${form.phone}\nEmail: ${form.email}\nPrevious School: ${form.previousSchool}\nMedical: ${form.medical}\nAdditional: ${form.additionalInfo}`
    );
    window.location.href = `mailto:admissions@modubatsesecondaryschool.co.za?subject=${subject}&body=${body}`;
  }

  function handlePrint() {
    // Print only the form area: create a print window
    if (!formRef.current) return;
    const original = document.body.innerHTML;
    const html = formRef.current.innerHTML;
    const printWindow = window.open("", "_blank", "width=800,height=600");
    printWindow.document.write(`
      <html><head><title>Modubatse Secondary School - Application Form</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; color: #111; }
        h2 { color: #1e3a8a; }
        .field { margin-bottom: 12px; }
        .label { font-weight: 600; }
      </style>
      </head><body>
      <h2>Modubatse Secondary School - Application Form</h2>
      ${html}
      <p style="font-size:11px;color:#555;margin-top:20px;">Admissions administered in accordance with: Constitution (Act 108 of 1996); South African Schools Act (Act 84 of 1996); National Education Policy Act (Act 27 of 1996).</p>
      </body></html>
    `);
    printWindow.document.close();
    printWindow.focus();
    // give the browser a moment
    setTimeout(() => {
      printWindow.print();
      // optionally close: printWindow.close();
    }, 500);
  }

  function handleDownload() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(form, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `modubatse-application-${form.childName || "unnamed"}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
  }

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
      <div ref={formRef}>
        <h4 className="font-semibold text-lg">Application Form</h4>
        <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <input required name="parentName" value={form.parentName} onChange={onChange} placeholder="Parent / Guardian full name" className="p-3 rounded border" />
            <input name="parentID" value={form.parentID} onChange={onChange} placeholder="Parent ID number" className="p-3 rounded border" />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <input required name="childName" value={form.childName} onChange={onChange} placeholder="Child full name" className="p-3 rounded border" />
            <input name="childID" value={form.childID} onChange={onChange} placeholder="Child ID number (if available)" className="p-3 rounded border" />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <input required name="grade" value={form.grade} onChange={onChange} placeholder="Applying for (e.g., Grade 8)" className="p-3 rounded border" />
            <input name="dob" type="date" value={form.dob} onChange={onChange} className="p-3 rounded border" />
          </div>

          <input required name="address" value={form.address} onChange={onChange} placeholder="Home address" className="p-3 rounded border" />
          <div className="grid sm:grid-cols-2 gap-3">
            <input required name="phone" value={form.phone} onChange={onChange} placeholder="Phone number" className="p-3 rounded border" />
            <input required name="email" type="email" value={form.email} onChange={onChange} placeholder="Email address" className="p-3 rounded border" />
          </div>

          <input name="previousSchool" value={form.previousSchool} onChange={onChange} placeholder="Previous school (if any)" className="p-3 rounded border" />
          <textarea name="medical" value={form.medical} onChange={onChange} placeholder="Medical information / allergies" rows={3} className="p-3 rounded border" />

          <textarea name="additionalInfo" value={form.additionalInfo} onChange={onChange} placeholder="Any additional information" rows={3} className="p-3 rounded border" />

          <div className="flex gap-3 mt-2">
            <button type="submit" className="bg-indigo-600 text-white px-5 py-2 rounded">Send Application (email)</button>
            <button type="button" onClick={handlePrint} className="px-4 py-2 border rounded">Print / Save as PDF</button>
            <button type="button" onClick={handleDownload} className="px-4 py-2 border rounded">Download application</button>
          </div>
        </form>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p><strong>Note:</strong> Submitting via email opens your mail client with the application details. For official submission, include required documents (ID, proof of residence) to the school office.</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="mt-2 text-gray-600">Questions? Book a tour or drop us a message.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold">School Details</h3>
          <p className="mt-2 text-gray-700">
            Modubatse Secondary School<br />
            Stand 921, Home2000, Ga-Kgapane<br />
            0838 Greater Letaba, South Africa
          </p>
          <p className="mt-2">Phone: <a href={TEL(PHONE)} className="text-indigo-600">{PHONE}</a></p>
          <p>Email: <a href={`mailto:${EMAIL}`} className="text-indigo-600">{EMAIL}</a></p>

          <div className="mt-4">
            <h4 className="font-semibold">Opening Hours</h4>
            <p className="text-gray-600">Mon–Fri: 07:30 — 15:30</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold">Send a message</h3>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

function ContactForm() {
  const [msg, setMsg] = useState({ name: "", email: "", message: "" });
  const onChange = (e) => setMsg({ ...msg, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Modubatse Secondary School Website Enquiry");
    const body = encodeURIComponent(`From: ${msg.name} (${msg.email})\n\n${msg.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };
  return (
    <form onSubmit={onSubmit} className="mt-4 grid gap-3">
      <input required name="name" value={msg.name} onChange={onChange} placeholder="Your name" className="p-3 rounded border" />
      <input required name="email" type="email" value={msg.email} onChange={onChange} placeholder="Your email" className="p-3 rounded border" />
      <textarea required name="message" value={msg.message} onChange={onChange} rows={4} placeholder="Message" className="p-3 rounded border" />
      <div className="flex gap-3">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">Send Message</button>
        <button type="button" onClick={() => setMsg({ name: "", email: "", message: "" })} className="px-4 py-2 border rounded">Reset</button>
      </div>
    </form>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold text-lg">Modubatse Secondary School</h4>
          <p className="mt-2 text-sm text-gray-300">Knowledge is power — join our community and book a tour today.</p>
        </div>
        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-2 space-y-1 text-sm text-gray-300">
            <li><a href="#/">Home</a></li>
            <li><a href="#/about">About</a></li>
            <li><a href="#/programs">Programs</a></li>
            <li><a href="#/admissions">Admissions</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="text-sm text-gray-300">{PHONE}<br />{EMAIL}</p>
        </div>
      </div>
      <div className="border-t border-white/10 text-sm text-gray-400 py-4">© {new Date().getFullYear()} Modubatse Secondary School — All rights reserved.</div>
    </footer>
  );
}

function Home() {
  return (
    <div>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <h2 className="text-2xl font-bold">Trusted by parents</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="italic text-gray-700">"Supportive teachers and great discipline — my child thrives."</p>
            <p className="mt-4 font-semibold">— A Parent</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="italic text-gray-700">"Practical ICT and strong maths program."</p>
            <p className="mt-4 font-semibold">— B Parent</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="italic text-gray-700">"Good focus on values and school culture."</p>
            <p className="mt-4 font-semibold">— C Parent</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function NotFound() {
  return (
    <main className="max-w-4xl mx-auto px-4 md:px-8 py-20 text-center">
      <h2 className="text-4xl font-bold">404 — Page not found</h2>
      <p className="mt-4 text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
      <a href="#/" className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded">Back to Home</a>
    </main>
  );
}

export default function App() {
  const routes = {
    "/": Home,
    "/about": About,
    "/programs": Programs,
    "/gallery": Gallery,
    "/admissions": Admissions,
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


