"use client";
import { useRouter } from "next/navigation";

export default function AboutUs() {
  const router = useRouter();

  const teamMembers = [
    {
      name: "M. Fathin Halim",
      img: "https://ik.imagekit.io/9hpbqscxd/SG/image-100.jpg?updatedAt=1705798245623",
    },
    {
      name: "Gorengan Hunter",
      img: "https://avatars.githubusercontent.com/u/112301912?v=4",
    },
    {
      name: "Akadanar",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=akadanar",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl font-bold">About Us</h1>

        <p className="text-lg opacity-80 leading-relaxed">
          Kami adalah{" "}
          <span className="font-semibold">
            Software Engineering Squad And Technology (SESAT)
          </span>
          , sebuah tim kecil yang berfokus pada pengembangan solusi teknologi
          yang berdampak nyata. Kami percaya bahwa setiap developer lokal berhak
          mendapatkan feedback yang berguna untuk meningkatkan kualitas aplikasi
          mereka.
        </p>

        <p className="text-lg opacity-80 leading-relaxed">
          Platform ini dibuat untuk membantu para usahawan programmer lokal
          dalam memahami review yang diberikan pengguna terhadap aplikasi
          mereka, sehingga mereka dapat memperbaiki dan meningkatkan karya
          mereka menjadi lebih baik lagi.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Meet Our Team 👋</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {teamMembers.map((person, i) => (
              <div
                key={i}
                className="p-5 bg-white shadow-sm rounded-xl flex flex-col items-center gap-3"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <p>{person.name}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-md opacity-70">
          💡 "Kami membangun, belajar, dan berkembang bersama"
        </p>

        <button
          onClick={() => router.push("/")}
          className="mt-8 px-5 py-2 rounded-lg bg-[#F3DBC4] hover:bg-[#F3DBC4]/60  transition font-medium"
        >
          ← Kembali
        </button>
      </div>
    </div>
  );
}
