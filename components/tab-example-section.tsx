'use client'
import { EXAMPLES } from "@/scripts/data";
import { useState } from "react"

export default function TabExampleSection() {

  const [index, setIndex] = useState(3)
  const handleClick = (arrayIndex: number) => setIndex(arrayIndex)

  return (
    <>
        <section id="tab-section" className="flex flex-col my-12 mx-4 md:mx-12">
          <div className="flex justify-start space-x-2">
            {EXAMPLES.map((elemento, arrayIndex) =>
              <button 
                onClick={() => handleClick(arrayIndex)}
                key={elemento.title}
                className={`inline-block m-2 p-3 text-slate-300 rounded-md ${arrayIndex === index ? 'bg-blue-500 text-white' : 'hover:bg-slate-900 hover:text-white'}`}
              >
                {elemento.title}
              </button>
            )}
          </div>
          <TabExample />
        </section>
    </>
  )
}

export function TabExample() {
  
  return (
    <>
        <div>que tal estamos</div>
    </>
  )
}