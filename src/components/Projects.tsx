import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Platform E-Commerce",
      description: "Solusi e-commerce full-stack dengan React, Node.js, dan integrasi Stripe. Fitur termasuk autentikasi pengguna, manajemen produk, dan pemrosesan pesanan.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 2,
      title: "Aplikasi Manajemen Tugas",
      description: "Aplikasi manajemen tugas kolaboratif dengan update real-time, fitur kolaborasi tim, dan kemampuan pelacakan proyek yang canggih.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 3,
      title: "Dashboard Cuaca",
      description: "Dashboard cuaca interaktif dengan visualisasi data yang indah, prakiraan berbasis lokasi, dan desain responsif untuk semua perangkat.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "D3.js", "Weather API"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ]
}