import React from "react";
import { Code, Palette, Zap } from "lucide-react";
import profile from "@/assets/profile.jpeg"; // kalau alias '@' belum ada, ganti: "../assets/profile.jpeg"

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code with best practices and modern technologies.",
  },
  {
    icon: <Palette className="w-8 h-8 text-purple-600" />,
    title: "Creative Design",
    description:
      "Crafting beautiful, intuitive user interfaces that provide exceptional user experiences.",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-600" />,
    title: "Performance",
    description:
      "Building fast, optimized applications that deliver results and exceed expectations.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">Tentang Saya</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 mb-6" />
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Saya adalah seorang developer yang bersemangat dengan pengalaman 5+
            tahun dalam menciptakan solusi digital yang membuat perbedaan. Saya
            suka mengubah masalah kompleks menjadi desain yang sederhana dan
            indah.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-start gap-5 md:gap-6 lg:gap-8 md:grid-cols-12">
          {/* Foto */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="relative mx-auto md:mx-0 w-[clamp(160px,28vw,320px)]">
              <img
                src={profile}
                alt="Sri Haryo Trah Pamungkas"
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl ring-1 ring-black/5"
                loading="lazy"
                sizes="(min-width:1024px) 28vw, (min-width:640px) 40vw, 70vw"
              />
              {/* dekor tipis */}
              <div className="pointer-events-none absolute -z-10 -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl" />
            </div>
          </div>

          {/* Teks */}
          <div className="md:col-span-7 order-1 md:order-2">
            <h3 className="text-2xl font-semibold text-slate-800">
              Perjalanan Saya
            </h3>
            <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Dimulai sebagai mahasiswa yang penasaran dan suka memecahkan
                masalah melalui dunia komputer. Selama bertahun-tahun, saya
                telah mengeksplorasi teknologi dan membantu mewujudkan visi
                digital yang ada.
              </p>
              <p>
                Saya percaya pada pembelajaran berkelanjutan dan tetap update
                dengan teknologi terbaru. Ketika tidak coding, Anda akan
                menemukan saya mengeksplorasi tren desain baru, berkontribusi
                pada open source, atau berbagi pengetahuan dengan komunitas
                developer.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-6 max-w-md">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">30+</div>
                <div className="text-slate-500 text-sm">Proyek Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-slate-500 text-sm">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h4 className="text-xl font-semibold text-slate-800 mb-2">
                {f.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
