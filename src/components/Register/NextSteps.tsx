import { Copy, ExternalLink } from "lucide-react";
import type { Competition } from "../../types";

interface NextStepsProps {
  selectedCompetition: Competition;
  copyToClipboard: (text: string) => Promise<void>;
}

export default function NextSteps({
  selectedCompetition,
  copyToClipboard,
}: NextStepsProps) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-3">Langkah Selanjutnya:</h3>

      {/* Contact PIC */}
      <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/20 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white font-medium">1. Hubungi PIC Lomba</span>
          <button
            onClick={() => copyToClipboard(selectedCompetition.contactNumber)}
            className="text-orange-300 hover:text-orange-200 transition-colors"
          >
            <Copy size={16} />
          </button>
        </div>
        <p className="text-gray-300 text-sm mb-3">
          Hubungi nomor berikut untuk informasi lebih lanjut
        </p>
        <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
          <span className="text-orange-300 font-mono">
            {selectedCompetition.contactNumber}
          </span>
          <a
            href={`tel:${selectedCompetition.contactNumber}`}
            className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium hover:bg-orange-600 transition-colors"
          >
            Kontak
          </a>
        </div>
      </div>

      {/* WhatsApp Group Link */}
      <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white font-medium">
            2. Bergabung ke Grup WhatsApp
          </span>
          <button
            onClick={() => copyToClipboard(selectedCompetition.whatsapp)}
            className="text-green-300 hover:text-green-200 transition-colors"
          >
            <Copy size={16} />
          </button>
        </div>
        <p className="text-gray-300 text-sm mb-3">
          Dapatkan update terbaru dan informasi penting lomba
        </p>
        <a
          href={selectedCompetition.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
        >
          Gabung Grup WA
          <ExternalLink size={14} className="ml-2" />
        </a>
      </div>
    </div>
  );
}
