
import type React from "react"
import { useState } from "react"
import { User, School, GraduationCap, Phone, Info } from "lucide-react"
import type { FormData, FormErrors } from "./../types"
import { competitions } from "../constant/competitions"
import { validateForm } from "../utils/validation"
import FormHeader from "../components/Register/FormHeader"
import FormField from "../components/Register/FormField"
import SelectField from "../components/Register/SelectField"
import SubmitButton from "../components/Register/SubmitButton"
import SuccessModal from "../components/Register/SuccessModal"

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    const newErrors = validateForm(formData)
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

  const selectedCompetition = competitions.find((comp) => comp.id === formData.lomba)

  return (
    <div className="bg-gradient-to-br from-[#423E40] via-gray-800 to-slate-900 min-h-screen flex items-center justify-center p-4 py-10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-bounce"></div>
      </div>
      <div className="fixed bottom-10 right-10 z-30 bg-orange-500 text-white rounded-full p-3 shadow-lg hover:bg-orange-600 transition-colors cursor-pointer">
      <Info size={20} />
    </div>
      {/* Main Form Container */}
      <div className="relative w-full max-w-md">
      
        <FormHeader />

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl"
        >
          <div className="space-y-6">
            <FormField
              label="Nama Lengkap"
              name="nama"
              value={formData.nama}
              onChange={handleInputChange}
              placeholder="Masukkan nama lengkap"
              error={errors.nama}
              icon={User}
            />

            <FormField
              label="Asal Sekolah/Universitas"
              name="asalSekolah"
              value={formData.asalSekolah}
              onChange={handleInputChange}
              placeholder="Nama sekolah/universitas"
              error={errors.asalSekolah}
              icon={School}
            />

            <FormField
              label="Kelas/Semester"
              name="kelas"
              value={formData.kelas}
              onChange={handleInputChange}
              placeholder="Contoh: XII IPA 1 / Semester 5"
              error={errors.kelas}
              icon={GraduationCap}
            />

            <FormField
              label="Nomor HP"
              name="nomorHp"
              type="tel"
              value={formData.nomorHp}
              onChange={handleInputChange}
              placeholder="Contoh: 08123456789"
              error={errors.nomorHp}
              icon={Phone}
            />

            <SelectField
              label="Pilih Lomba"
              name="lomba"
              value={formData.lomba}
              onChange={handleInputChange}
              options={competitions}
              error={errors.lomba}
            />

            <SubmitButton isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {selectedCompetition && (
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={closeModal}
          formData={formData}
          selectedCompetition={selectedCompetition}
          copyToClipboard={copyToClipboard}
        />
      )}
    </div>
  )
}

export default FormRegister
