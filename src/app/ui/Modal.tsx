'use client'
export default function Modal() {
  return (
    <div className="bg-black/50 fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center">
      <div className="w-full max-w-md rounded bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Popup Title</h2>
          <button className="text-gray-500 hover:text-gray-700">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}