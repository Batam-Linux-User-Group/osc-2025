export interface FormData {
  nama: string;
  sekolah: string;
  telepon: string;
  lomba: string;
  kartupelajar: string;
  email: string;
}

export interface Competition {
  id: string;
  name: string;
  contactNumber: string;
  whatsapp: string;
}

export interface FormErrors {
  [key: string]: string;
}
