import type { FormData, FormErrors } from "../types"

export const validateForm = (formData: FormData): FormErrors => {
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
