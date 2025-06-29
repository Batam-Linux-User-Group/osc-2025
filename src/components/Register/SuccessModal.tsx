import { CheckCircle, X } from "lucide-react"
import type { FormData, Competition } from "../../types"
import RegistrationSummary from "./RegistrationSummary"
import NextSteps from "./NextSteps"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  formData: FormData
  selectedCompetition: Competition
  copyToClipboard: (text: string) => Promise<void>
}

export default function SuccessModal({
  isOpen,
  onClose,
  formData,
  selectedCompetition,
  copyToClipboard,
}: SuccessModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-md w-full border border-gray-700 shadow-2xl max-h-screen overflow-y-auto">
        {/* Modal Header */}
        <div className="relative p-6 text-center border-b border-gray-700">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
            <X size={20} />
          </button>

          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
            <CheckCircle className="text-white" size={32} />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Pendaftaran Berhasil! 🎉</h2>
          <p className="text-gray-300">
            Selamat <span className="font-semibold text-orange-300">{formData.nama}</span>, Anda telah terdaftar untuk
            lomba <span className="font-semibold text-blue-300">{selectedCompetition.name}</span>
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Registration Summary */}
          <RegistrationSummary formData={formData} selectedCompetition={selectedCompetition} />

          {/* Next Steps */}
          <NextSteps selectedCompetition={selectedCompetition} copyToClipboard={copyToClipboard} />

          {/* Important Note */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-yellow-300 text-sm">
              <strong>Catatan Penting:</strong> Pastikan untuk menghubungi PIC lomba dan bergabung ke grup WhatsApp
              untuk mendapatkan informasi terbaru tentang kompetisi!
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-all"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  )
}
