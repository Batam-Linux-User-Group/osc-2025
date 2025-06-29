export interface FormData {
    nama: string
    asalSekolah: string
    kelas: string
    nomorHp: string
    lomba: string
  }
  
  export interface Competition {
    id: string
    name: string
    contactNumber: string
    whatsapp: string
  }
  
  export interface FormErrors {
    [key: string]: string
  }
  