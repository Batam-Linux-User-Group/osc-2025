import type { FormData, Competition } from "../../types";

interface RegistrationSummaryProps {
  formData: FormData;
  selectedCompetition: Competition;
}

export default function RegistrationSummary({
  formData,
  selectedCompetition,
}: RegistrationSummaryProps) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-4 space-y-2">
      <h3 className="text-white font-semibold mb-3">Detail Pendaftaran:</h3>
      <div className="text-sm space-y-1">
        <p className="text-gray-300">
          <span className="text-orange-300">Nama:</span> {formData.nama}
        </p>
        <p className="text-gray-300">
          <span className="text-orange-300">Sekolah:</span> {formData.sekolah}
        </p>
        <p className="text-gray-300">
          <span className="text-orange-300">Lomba:</span>{" "}
          {selectedCompetition.name}
        </p>
      </div>
    </div>
  );
}
