import axios from 'axios';
import {
  ArrowLeft,
  FileIcon,
  Info,
  Mail,
  Phone,
  School,
  User,
} from 'lucide-react';
import type React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../components/Register/FormField';
import FormHeader from '../components/Register/FormHeader';
import SelectField from '../components/Register/SelectField';
import SubmitButton from '../components/Register/SubmitButton';
import SuccessModal from '../components/Register/SuccessModal';
import { competitions } from '../constant/competitions';
import { validateForm } from '../utils/validation';
import type { FormData, FormErrors } from './../types';
import ModalInfo from './Register/ModalInfo';

const FormRegister: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nama: '',
    sekolah: '',
    telepon: '',
    email: '',
    lomba: '',
    kartupelajar: '',
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
        [name]: '',
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
    const form = document.getElementById('formRegister');
    if (!form || !(form instanceof HTMLFormElement)) {
      setIsSubmitting(false);
      setErrors({ ...newErrors, form: 'Form not found or invalid.' });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      const formData = new FormData(form);

      await axios.post(
        'https://script.google.com/macros/s/AKfycbwa9PZRzHjGJ0srJf6WLRu6i5mYQTD5LqcZwvyVwzxRIcTGvZnOJ2ivGeWpg24sOEY/exec',
        formData
      );

      console.log('Form submitted:', formData);

      // Ambil data dari form
      const nama = form.nama.value;
      const lomba = form.lomba.value;
      let nomor = form.telepon.value.trim();
      if (nomor.startsWith('08')) {
        nomor = '62' + nomor.slice(1);
      }

      // Kirim pesan ke bot WhatsApp
      try {
        await axios.post(
          'https://api.aliffajriadi.my.id/botwa/api/kirim',
          {
            nomor: nomor,
            pesan: `Halo ${nama}!\n\nTerima kasih sudah mendaftar di lomba *${lomba}* 🎉\n\nPendaftaranmu akan segera kami proses 💼\nPastikan semua data dan berkas yang kamu kirimkan sudah lengkap dan sesuai, ya!\n\nUntuk info selanjutnya dan koordinasi lomba, yuk gabung ke grup WhatsApp resmi lewat link berikut:\n${selectedCompetition?.whatsapp}\n\nKami tunggu semangat dan aksi terbaikmu di ajang ini! 💪🔥\n\n💡 Go Open Source, Be the Change! 🚀`,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': 'CUKIMAYANJAY7778yhuyjhhguywdbaswu909u98',
            },
          }
        );
      } catch (error) {
        console.error('Gagal kirim pesan ke bot WA:', error);
      }

      setShowSuccessModal(true);
      document.body.style.overflow = 'hidden';
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = (): void => {
    setShowSuccessModal(false);
    document.body.style.overflow = 'unset';

    // Reset form
    setFormData({
      nama: '',
      sekolah: '',
      telepon: '',
      email: '',
      lomba: '',
      kartupelajar: '',
    });
    setErrors({});
  };

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
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
      <div
        onClick={() => setOpenModal(true)}
        className="fixed bottom-10 right-5 z-30 bg-orange-500 text-white rounded-full p-3 shadow-lg hover:bg-orange-600 transition-colors cursor-pointer"
      >
        <Info size={20} />
      </div>
      <Link
        to={'/'}
        className="fixed bottom-25 right-5 z-30 bg-orange-500 text-white rounded-full p-3 shadow-lg hover:bg-orange-600 transition-colors cursor-pointer"
      >
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
              label="Asal Sekolah/Instansi"
              name="sekolah"
              value={formData.sekolah}
              onChange={handleInputChange}
              placeholder="Nama sekolah/universitas"
              error={errors.sekolah}
              icon={School}
            />

            <FormField
              label="Berkas"
              name="kartupelajar"
              value={formData.kartupelajar}
              onChange={handleInputChange}
              placeholder="Masukkan link"
              error={errors.kartupelajar}
              icon={FileIcon}
              description="Harap Masukkan link berkas berupa Kartu pelajar / identitas dan bukti pembayaran dalam google drive, dan pastikan link dapat di akses oleh admin / publik."
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
      <ModalInfo isOpen={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default FormRegister;
