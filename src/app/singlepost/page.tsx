import React from 'react'

const SinglePost = () => {
  return (
    <div className="wrapper mb-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* Post Header */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <div className="px-3 py-1.5 bg-[#4b6bfb] rounded-md inline-flex">
              <div className="text-white text-sm font-medium leading-tight">Technology</div>
            </div>
            <div className="text-[#181a2a] text-2xl md:text-4xl font-semibold leading-snug md:leading-10">
              The Impact of Technology on the Workplace: How Technology is Changing
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#696a75]">
            <div className="flex items-center gap-2">
              <img className="w-7 h-7 rounded-full" src="/single1.png" alt="Author" />
              <span>Tracey Wilson</span>
            </div>
            <span>August 20, 2022</span>
          </div>
        </div>

        {/* Main Image */}
        <img className="w-full max-h-96 rounded-xl object-cover" src="/single1.png" alt="Main Post" />

        {/* Post Content */}
        <div className="text-[#3b3c4a] text-base md:text-xl leading-relaxed">
          <p>
            Traveling is an enriching experience that opens up new horizons&rsquo;exposes us to different cultures&rsquo; and creates memories that last a lifetime. 
            However&Isquo; traveling can also be stressful and overwhelming&Isquo; especially if you don&apos;t plan and prepare adequately. In this blog articleIsquo; we&apos;ll explore tips and tricks for a memorable journey and how to make the most of your travels.
          </p>
          <p>
            One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine&rsquo; 
            attending cultural events and festivals&rsquo; and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
          </p>
        </div>

        {/* Sections */}
<section>
Before embarking on your journey&rsquo; take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations.

</section>

         <section title="Stay Hydrated">
         Drink plenty of water throughout your trip. This can help you feel more alert and energized&rsquo; and it can also help you stay hydrated throughout the day.
         </section>
      

        <section title="Choose the Right Accommodations">
          Choose accommodations that offer a comfortable, cozy, and welcoming environment. This can help you feel more at home and less isolated.
        </section>

        <section title="Plan Your Itinerary">
          While it&apos;s essential to leave room for spontaneity, having a rough itinerary can help you make the most of your time and budget.  Prioritize the must see sights and experiences.
        </section> 

        {/* Quote */}
        <blockquote className="p-6 bg-[#f6f6f7] rounded-xl border-l-4 border-[#e8e8ea] text-[#181a2a] text-lg md:text-xl italic">
          &quot;Traveling can expose you to new environments and potential health risks&rsquo;so it&apos;s crucial to take precautions to stay safe and healthy.&quot;
        </blockquote>

        {/* Another Image */}
        <img className="w-full max-h-96 rounded-xl object-cover" src="/single2.png" alt="Additional Content" />

        {/* Ad */}
        <div className="bg-[#e8e8ea] rounded-xl p-4 text-center">
          <div className="text-[#696a75] text-sm">Advertisement</div>
          <div className="text-[#696a75] text-xl font-semibold">You can place ads</div>
          <div className="text-[#696a75] text-lg">750x100</div>
        </div>

        {/* Additional Sections */}
       
        <section title="Pack Lightly and Smartly">
          Packing can be a daunting task&rsquo; but with some careful planning, you can pack light and efficiently.
        </section>

        <section title="Stay Safe and Healthy">
          Traveling can expose you to new environments and potential health risks&rsquo;so it&apos;s crucial to take precautions to stay safe and healthy.
        </section>

        <section title="Immerse Yourself in the Local Culture">
          One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs.
        </section>

        <section title="Capture Memories">
          Finally, don&apos;t forget to capture memories of your journey.
        </section>
         

         <section title="Immerse Yourself in the Local Culture">
          One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs.
        </section>

        <section title="Capture Memories">
          Finally, don&apos;t forget to capture memories of your journey.
        </section> 
      </div>
    </div>
  )
}


export default SinglePost;
