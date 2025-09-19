import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import profile from "@/assets/profile.jpeg";

export default function About() {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices and modern technologies."
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      title: "Creative Design",
      description: "Crafting beautiful, intuitive user interfaces that provide exceptional user experiences."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Performance",
      description: "Building fast, optimized applications that deliver results and exceed expectations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Tentang Saya</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Saya adalah seorang developer yang bersemangat dengan pengalaman 5+ tahun dalam menciptakan solusi digital yang membuat perbedaan. 
            Saya suka mengubah masalah kompleks menjadi desain yang sederhana dan indah.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
          <img
            src={profile}
            alt="Sri Haryo Trah Pamungkas"
            className="rounded-lg shadow-lg w-full object-cover"
          />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800">Perjalanan Saya</h3>
            <p className="text-slate-600 leading-relaxed">
              Dimulai sebagai mahasiswa yang penasaran dan suka memecahkan masalah melalui dunia komputer. Selama bertahun-tahun, 
              saya telah explore teknologi , membantu  mewujudkan 
              visi digital yang ada.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Saya percaya pada pembelajaran berkelanjutan dan tetap update dengan teknologi terbaru. 
              Ketika tidak coding, Anda akan menemukan saya mengeksplorasi tren desain baru, berkontribusi pada 
              open source, atau berbagi pengetahuan dengan komunitas developer.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">30+</div>
                <div className="text-slate-600">Proyek Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-slate-600">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}