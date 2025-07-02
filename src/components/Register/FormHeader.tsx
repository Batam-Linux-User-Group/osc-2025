// import { Trophy } from "lucide-react"
import { logo } from "../../assets"
import BLUG from "../../assets/blug.svg"
export default function FormHeader() {
  return (
    <div className="text-center mb-8">
        
      <div className="inline-flex  space-x-4 items-center justify-center mb-4 shadow-lg">
        {/* <Trophy className="text-white" size={28} /> */}
        <img src={logo} alt="logo" className="w-20" />
        <img src={BLUG} alt="BLUG" className="" />
      </div>
    
      <h1 className="text-3xl font-bold text-white mb-2">Daftar Lomba OSC 2025</h1>
      <p className="text-gray-300">Isi form di bawah untuk mendaftar kompetisi</p>
    </div>
  )
}
