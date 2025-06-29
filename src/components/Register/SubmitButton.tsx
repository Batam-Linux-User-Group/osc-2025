interface SubmitButtonProps {
    isSubmitting: boolean
  }
  
  export default function SubmitButton({ isSubmitting }: SubmitButtonProps) {
    return (
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Mendaftar...
          </div>
        ) : (
          "Daftar Sekarang"
        )}
      </button>
    )
  }
  