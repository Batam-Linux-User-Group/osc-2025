import type React from "react";
import { useState } from "react";
import { User, School, GraduationCap, Phone, Info, Mail, SkipBack, ArrowLeft } from "lucide-react";
import type { FormData, FormErrors } from "./../types";
import { competitions } from "../constant/competitions";
import { validateForm } from "../utils/validation";
import FormHeader from "../components/Register/FormHeader";
import FormField from "../components/Register/FormField";
import SelectField from "../components/Register/SelectField";
import SubmitButton from "../components/Register/SubmitButton";
import SuccessModal from "../components/Register/SuccessModal";
import axios from "axios";
import { Link } from "react-router-dom";
import ModalInfo from "./Register/ModalInfo";

const FormRegister: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nama: "",
    sekolah: "",
    telepon: "",
    email: "",
    lomba: "",
    kartupelajar: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const form = document.getElementById("formRegister");
    if (!form || !(form instanceof HTMLFormElement)) {
      setIsSubmitting(false);
      setErrors({ ...newErrors, form: "Form not found or invalid." });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await axios.post(
        "https://script.google.com/macros/s/AKfycbwa9PZRzHjGJ0srJf6WLRu6i5mYQTD5LqcZwvyVwzxRIcTGvZnOJ2ivGeWpg24sOEY/exec",
        new FormData(form)
      );

      // Here you would typically send data to your backend
      console.log("Form submitted:", formData);

      setShowSuccessModal(true);
      document.body.style.overflow = "hidden";
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = (): void => {
    setShowSuccessModal(false);
    document.body.style.overflow = "unset";

    // Reset form
    setFormData({
      nama: "",
      sekolah: "",
      telepon: "",
      email: "",
      lomba: "",
      kartupelajar: "",
    });
    setErrors({});
  };

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };

  const selectedCompetition = competitions.find(
    (comp) => comp.id === formData.lomba
  );

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-gradient-to-br from-[#423E40] via-gray-800 to-slate-900 min-h-screen flex items-center justify-center p-4 py-10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-bounce"></div>
      </div>
      <div onClick={() => setOpenModal(true)} className="fixed bottom-10 right-5 z-30 bg-orange-500 text-white rounded-full p-3 shadow-lg hover:bg-orange-600 transition-colors cursor-pointer">
        <Info size={20} />
      </div>
      <Link to={"/"} className="fixed bottom-25 right-5 z-30 bg-orange-500 text-white rounded-full p-3 shadow-lg hover:bg-orange-600 transition-colors cursor-pointer">
        <ArrowLeft size={20} />
      </Link>
      {/* Main Form Container */}
      <div className="relative w-full max-w-md">
        <FormHeader />

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl"
          id="formRegister"
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
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Masukkan email"
              error={errors.email}
              icon={Mail}
            />

            <FormField
              label="Asal Sekolah/Universitas"
              name="sekolah"
              value={formData.sekolah}
              onChange={handleInputChange}
              placeholder="Nama sekolah/universitas"
              error={errors.sekolah}
              icon={School}
            />

            <FormField
              label="Kartu Pelajar"
              name="kartupelajar"
              value={formData.kartupelajar}
              onChange={handleInputChange}
              placeholder="Masukkan link"
              error={errors.kartupelajar}
              icon={GraduationCap}
              description="Harap masukkan link kartu pelajar yang telah di upload ke google drive, pastikan link tersebut dapat di akses oleh admin."
            />

            <FormField
              label="Nomor Whatsapp"
              name="telepon"
              type="tel"
              value={formData.telepon}
              onChange={handleInputChange}
              placeholder="Contoh: 08123456789"
              error={errors.telepon}
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
      <ModalInfo isOpen={openModal} onClose={() => setOpenModal(false)}/>
    </div>
  );
};

export default FormRegister;
