import Image from 'next/image'
import React from 'react'

const MiniCTASection = () => {
  return (
      <div className="relative flex justify-center items-center overflow-hidden h-[150px] md:min-h-[200px]">
        {/* Background Image */}
        <Image
          src="/Industry/images/MiniCTAStrip.jpg"
          alt="Eligibility CTA Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div  />

        {/* Content */}
        <div className="relative z-10 h-full px-6 sm:px-10 md:px-14  flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left Content */}
          <div className="max-w-[760px]">
            <h2 className="text-white text-3xl sm:text-4xl md:text-[46px] font-semibold leading-tight">
              Not sure if your industry is affected?
            </h2>

            <p className="mt-4 text-white/85 text-base sm:text-lg md:text-xl leading-relaxed max-w-[620px]">
              Take our quick eligibility check to find out how EUDR impacts
              your business.
            </p>
          </div>

          {/* Right Button */}
          <div className="shrink-0">
            <button className="bg-[#1E2A23] hover:bg-[#25352c] transition-all duration-300 text-white px-8 md:px-5 h-[58px] rounded-full text-sm sm:text-base font-medium tracking-wide ">
              Check Eligibility
            </button>
          </div>
        </div>
      </div>

  )
}

export default MiniCTASection
