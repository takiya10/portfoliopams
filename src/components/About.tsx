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
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">Tentang Saya</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="mt-3 text-lg text-slate-600 max-w-3xl mx-auto">
            Saya adalah seorang developer yang bersemangat dengan pengalaman 5+ tahun dalam menciptakan solusi digital yang membuat perbedaan. 
            Saya suka mengubah masalah kompleks menjadi desain yang sederhana dan indah.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-12 items-center">
        <div className="md:col-span-5 order-2 md:order-1"></div>
          <div className="mx-auto md:mx-0 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px]">
          <img
            src={profile}
            alt="Sri Haryo Trah Pamungkas"
            className="rounded-lg shadow-lg w-full object-cover"
          />
          <div classname="absolute -z-10 -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl" />
          </div>
        </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <h3 className="text-2xl font-semibold text-slate-800">Perjalanan Saya</h3>
            <p className="mt-4 space-y-4 text-slate-600 leading-relaxed">
              Dimulai sebagai mahasiswa yang penasaran dan suka memecahkan masalah melalui dunia komputer. Selama bertahun-tahun, 
              saya telah explore teknologi , membantu  mewujudkan 
              visi digital yang ada.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Saya percaya pada pembelajaran berkelanjutan dan tetap update dengan teknologi terbaru. 
              Ketika tidak coding, Anda akan menemukan saya mengeksplorasi tren desain baru, berkontribusi pada 
              open source, atau berbagi pengetahuan dengan komunitas developer.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 max-w-md">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">30+</div>
                <div className="text-slate-500">Proyek Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-slate-500 text-sm">Tahun Pengalaman</div>
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