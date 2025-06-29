import type React from "react"
import { Trophy } from "lucide-react"
import type { Competition } from "../../types"

interface SelectFieldProps {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: Competition[]
  error?: string
}

export default function SelectField({ label, name, value, onChange, options, error }: SelectFieldProps) {
  return (
    <div>
      <label className="block text-white text-sm font-medium mb-2">
        <Trophy className="inline mr-2" size={16} />
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-600 focus:ring-orange-500 focus:border-orange-500"
        }`}
      >
        <option value="" className="bg-gray-800">
          Pilih lomba yang akan diikuti
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id} className="bg-gray-800">
            {option.name}
          </option>
        ))}
      </select>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  )
}
