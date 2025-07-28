import type React from "react";
import type { LucideIcon } from "lucide-react";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  icon: LucideIcon;
  description?: string;
}

export default function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  icon: Icon,
  description,
}: FormFieldProps) {
  return (
    <div>
      <label className="block text-white text-sm font-medium mb-2">
        <Icon className="inline mr-2" size={16} />
        {label}
      </label>
      {description && (
        <div>
          <p className="text-gray-400 text-sm mb-2">{description}</p>
          <p className="text-gray-400 text-sm mb-2">PerLomba dikenakan biaya <b>Rp. 15.000</b> <br />Pembayaran: <br />Dana: 082287690013 Nayla Amirah <br />Shopepay: 082287690013 Nayla Amirah</p>
        </div>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-600 focus:ring-orange-500 focus:border-orange-500"
        }`}
        placeholder={placeholder}
      />
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}
