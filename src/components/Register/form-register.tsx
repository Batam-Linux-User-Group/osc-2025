import type React from "react"
import { useState } from "react"
import { User, School, GraduationCap, Phone, Trophy, CheckCircle, ExternalLink, Copy, X } from "lucide-react"

interface FormData {
  nama: string
  asalSekolah: string
  kelas: string
  nomorHp: string
  lomba: string
}

interface Competition {
  id: string
  name: string
  contactNumber: string
  whatsapp: string
}

interface FormErrors {
  [key: string]: string
}

const FormRegister: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nama: "",
    asalSekolah: "",
    kelas: "",
    nomorHp: "",
    lomba: "",
  })

  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const competitions: Competition[] = [
    {
      id: "mascot-design",
      name: "Mascot Design",
      contactNumber: "+62 812-3456-7890",
      whatsapp: "https://chat.whatsapp.com/mascot-design-group",
    },
    {
      id: "web-design",
      name: "Web Design",
      contactNumber: "+62 813-4567-8901",
      whatsapp: "https://chat.whatsapp.com/web-design-group",
    },
    {
      id: "netsim",
      name: "Network Simulation",
      contactNumber: "+62 814-5678-9012",
      whatsapp: "https://chat.whatsapp.com/netsim-group",
    },
    {
      id: "sysadmin",
      name: "System Administration",
      contactNumber: "+62 815-6789-0123",
      whatsapp: "https://chat.whatsapp.com/sysadmin-group",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {}

    if (!formData.nama.trim()) {
      newErrors.nama = "Nama tidak boleh kosong"
    }

    if (!formData.asalSekolah.trim()) {
      newErrors.asalSekolah = "Asal sekolah tidak boleh kosong"
    }

    if (!formData.kelas.trim()) {
      newErrors.kelas = "Kelas tidak boleh kosong"
    }

    if (!formData.nomorHp.trim()) {
      newErrors.nomorHp = "Nomor HP tidak boleh kosong"
    } else if (!/^(\+62|62|0)[0-9]{9,13}$/.test(formData.nomorHp.replace(/\s+/g, ""))) {
      newErrors.nomorHp = "Format nomor HP tidak valid"
    }

    if (!formData.lomba) {
      newErrors.lomba = "Pilih lomba yang akan diikuti"
    }

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would typically send data to your backend
      console.log("Form submitted:", formData)

      setShowSuccessModal(true)
      document.body.style.overflow = "hidden"
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = (): void => {
    setShowSuccessModal(false)
    document.body.style.overflow = "unset"

    // Reset form
    setFormData({
      nama: "",
      asalSekolah: "",
      kelas: "",
      nomorHp: "",
      lomba: "",
    })
    setErrors({})
  }

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text)
      // You could add a toast notification here
    } catch (error) {
      console.error("Failed to copy to clipboard:", error)
    }
  }

  const selectedCompetition: Competition | undefined = competitions.find((comp) => comp.id === formData.lomba)

  return (
    <div className="bg-gradient-to-br from-[#423E40] via-gray-800 to-slate-900 min-h-screen flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Main Form Container */}
      <div className="relative w-full max-w-md">
        {/* Form Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4 shadow-lg">
            <Trophy className="text-white" size={28} />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Daftar Lomba OSC 2025</h1>
          <p className="text-gray-300">Isi form di bawah untuk mendaftar kompetisi</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl"
        >
          <div className="space-y-6">
            {/* Nama */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                <User className="inline mr-2" size={16} />
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.nama
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-600 focus:ring-orange-500 focus:border-orange-500"
                }`}
                placeholder="Masukkan nama lengkap"
              />
              {errors.nama && <p className="text-red-400 text-sm mt-1">{errors.nama}</p>}
            </div>

            {/* Asal Sekolah */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                <School className="inline mr-2" size={16} />
                Asal Sekolah/Universitas
              </label>
              <input
                type="text"
                name="asalSekolah"
                value={formData.asalSekolah}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.asalSekolah
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-600 focus:ring-orange-500 focus:border-orange-500"
                }`}
                placeholder="Nama sekolah/universitas"
              />
              {errors.asalSekolah && <p className="text-red-400 text-sm mt-1">{errors.asalSekolah}</p>}
            </div>

            {/* Kelas */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                <GraduationCap className="inline mr-2" size={16} />
                Kelas/Semester
              </label>
              <input
                type="text"
                name="kelas"
                value={formData.kelas}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.kelas
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-600 focus:ring-orange-500 focus:border-orange-500"
                }`}
                placeholder="Contoh: XII IPA 1 / Semester 5"
              />
              {errors.kelas && <p className="text-red-400 text-sm mt-1">{errors.kelas}</p>}
            </div>

            {/* Nomor HP */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                <Phone className="inline mr-2" size={16} />
                Nomor HP
              </label>
              <input
                type="tel"
                name="nomorHp"
                value={formData.nomorHp}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.nomorHp
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-600 focus:ring-orange-500 focus:border-orange-500"
                }`}
                placeholder="Contoh: 08123456789"
              />
              {errors.nomorHp && <p className="text-red-400 text-sm mt-1">{errors.nomorHp}</p>}
            </div>

            {/* Pilihan Lomba */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                <Trophy className="inline mr-2" size={16} />
                Pilih Lomba
              </label>
              <select
                name="lomba"
                value={formData.lomba}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all ${
                  errors.lomba
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-600 focus:ring-orange-500 focus:border-orange-500"
                }`}
              >
                <option value="" className="bg-gray-800">
                  Pilih lomba yang akan diikuti
                </option>
                {competitions.map((competition) => (
                  <option key={competition.id} value={competition.id} className="bg-gray-800">
                    {competition.name}
                  </option>
                ))}
              </select>
              {errors.lomba && <p className="text-red-400 text-sm mt-1">{errors.lomba}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Mendaftar...
                </div>
              ) : (
                "Daftar Sekarang"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccessModal && selectedCompetition && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-md w-full border border-gray-700 shadow-2xl">
            {/* Modal Header */}
            <div className="relative p-6 text-center border-b border-gray-700">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>

              <h2 className="text-2xl font-bold text-white mb-2">Pendaftaran Berhasil! 🎉</h2>
              <p className="text-gray-300">
                Selamat <span className="font-semibold text-orange-300">{formData.nama}</span>, Anda telah terdaftar
                untuk lomba <span className="font-semibold text-blue-300">{selectedCompetition.name}</span>
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Registration Summary */}
              <div className="bg-gray-800/50 rounded-lg p-4 space-y-2">
                <h3 className="text-white font-semibold mb-3">Detail Pendaftaran:</h3>
                <div className="text-sm space-y-1">
                  <p className="text-gray-300">
                    <span className="text-orange-300">Nama:</span> {formData.nama}
                  </p>
                  <p className="text-gray-300">
                    <span className="text-orange-300">Sekolah:</span> {formData.asalSekolah}
                  </p>
                  <p className="text-gray-300">
                    <span className="text-orange-300">Kelas:</span> {formData.kelas}
                  </p>
                  <p className="text-gray-300">
                    <span className="text-orange-300">Lomba:</span> {selectedCompetition.name}
                  </p>
                </div>
              </div>

              {/* Next Steps */}
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
                  <p className="text-gray-300 text-sm mb-3">Hubungi nomor berikut untuk informasi lebih lanjut</p>
                  <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                    <span className="text-orange-300 font-mono">{selectedCompetition.contactNumber}</span>
                    <a
                      href={`tel:${selectedCompetition.contactNumber}`}
                      className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium hover:bg-orange-600 transition-colors"
                    >
                      Telepon
                    </a>
                  </div>
                </div>

                {/* WhatsApp Group Link */}
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">2. Bergabung ke Grup WhatsApp</span>
                    <button
                      onClick={() => copyToClipboard(selectedCompetition.whatsapp)}
                      className="text-green-300 hover:text-green-200 transition-colors"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">Dapatkan update terbaru dan informasi penting lomba</p>
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

              {/* Important Note */}
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <p className="text-yellow-300 text-sm">
                  <strong>Catatan Penting:</strong> Pastikan untuk menghubungi PIC lomba dan bergabung ke grup WhatsApp
                  untuk mendapatkan informasi terbaru tentang kompetisi!
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-all"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FormRegister
