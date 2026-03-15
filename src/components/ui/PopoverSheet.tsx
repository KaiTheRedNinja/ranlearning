import React, { useRef, useState, useEffect } from "react"
import { ProgrammeInfo, MD } from "@/lib/localisation"

type PopoverSheetProps = {
  externalData: ProgrammeInfo | null
  onClose: () => void
}

export const PopoverSheet: React.FC<PopoverSheetProps> = ({ externalData, onClose }) => {
  const sheetRef = useRef<HTMLDivElement | null>(null)

  const [localData, setLocalData] = useState<ProgrammeInfo | null>(externalData)
  const [isOpen, setIsOpen] = useState<boolean>(externalData !== null)

  useEffect(() => {
    if (externalData !== null) {
      setLocalData(externalData)
      setIsOpen(true)
    }
  }, [externalData])

  const closeSheet = () => {
    setIsOpen(false)
    onClose()

    setTimeout(() => {
      setLocalData(null)
    }, 500)
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sheetRef.current && !sheetRef.current.contains(e.target as Node)) {
      closeSheet()
    }
  }

  return (
    <div
      className={`fixed inset-0 transition-all duration-500 ease-in-out ${
        isOpen ? "bg-black/50" : "bg-opacity-0 pointer-events-none"
      } flex items-end md:items-center justify-center z-50 text-left`}
      onClick={handleBackdropClick}
    >
      <div
        ref={sheetRef}
        className={`
          w-full md:w-3/5 lg:h-auto max-w-[800px] max-h-[90vh] overflow-auto rounded-t-lg md:rounded-lg shadow-xl flex flex-col
          transform transition-all duration-500 ease-in-out
          ${isOpen ? "translate-y-0" : "translate-y-[100vh]"}
        `}
        style={{ backgroundColor: localData?.backgroundColor }}
      >
        {localData && (
          <div>
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
              <h3 className="text-2xl font-semibold" style={{ color: localData.titleColor }}>{localData.title}</h3>
              <button
                onClick={closeSheet}
                className="p-1 rounded-full hover:bg-gray-200"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div
              className="p-6 overflow-auto space-y-4 whitespace-pre-line"
              style={{ color: localData.bodyColor }}
            >
              {localData.fullImage && (
                <img
                  src={localData.fullImage}
                  alt={localData.title}
                  className="w-full h-auto rounded shadow-md"
                />
              )}

              <MD>{localData.description}</MD>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}