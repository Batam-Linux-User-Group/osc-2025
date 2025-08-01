import React from "react";
import { Phone, User, Megaphone, X, Info } from "lucide-react";
import type { Kontak } from "../../types";

interface ModalInfoProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalInfo: React.FC<ModalInfoProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const KontakLomba: Kontak[] = [
    {
      nomor: "085763542044",
      whatsapp: "6285763542044",
      nama: "Mifta",
      lomba: "Mascot Design",
    },
    {
      nomor: "081362363862",
      whatsapp: "6281362363862",
      nama: "Tomi",
      lomba: "Web Design",
    },
    {
      nomor: "08127003162",
      whatsapp: "628127003162",
      nama: "Syahdan",
      lomba: "Network Simulation",
    },
    {
      nomor: "0895370677717",
      whatsapp: "628127003162",
      nama: "Numa",
      lomba: "Linux System Administrator",
    },
  ];
  function urlKontak(
    nomornya: string,
    namanya: string,
    lombanya: string
  ): string {
    const pesan: string = `Hallo kak ${namanya}, saya ingin bertanya tentang lomba ${lombanya}nya`;
    const encodedPesan: string = encodeURIComponent(pesan);
    return `https://wa.me/${nomornya}?text=${encodedPesan}`;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div
        style={{
          animation: "fadeInZoom 0.3s ease-out",
          transformOrigin: "center",
        }}
        className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative"
      >
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-600 hover:text-red-500"
        >
          <X size={20} />
        </button>

        {/* Judul */}
        <h3 className="text-2xl font-semibold text-center text-slate-800 mb-6 flex items-center justify-center gap-2">
          <Megaphone size={24} /> Kontak PIC Lomba
        </h3>

        {/* Daftar Kontak */}
        <div className="space-y-4 max-h-80 overflow-y-auto">
          <div className="text-orange-300 animate-pulse duration-75 transition-all flex items-center space-x-2">
            <Info />
            <p className="text-sm">Kontak Hanya Melalui Via Whatsapp</p>
          </div>
          <p></p>
          {KontakLomba.map((kontak, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-800 flex items-center gap-2 mb-1">
                <Megaphone size={16} /> {kontak.lomba}
              </p>
              <p className="text-slate-700 flex items-center gap-2 text-sm">
                <Phone size={16} /> <a href={urlKontak(kontak.whatsapp, kontak.nama, kontak.lomba)} className="text-blue-500 underline">{kontak.nomor}</a>
              </p>
              <p className="text-slate-700 flex items-center gap-2 text-sm">
                <User size={16} /> {kontak.nama}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
