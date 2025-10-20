'use client'
import { EXAMPLES } from "@/scripts/data";
import { useState } from "react"

export default function TabExampleSection() {

  const [selectedButton, setSelectedButton] = useState(3)
  const handleClick = (arrayIndex: number) => setSelectedButton(arrayIndex)

  return (
    <>
      <section id="tab-section" className="flex flex-col my-12 mx-4 md:mx-12">
        <div className="flex justify-start space-x-2">
          {EXAMPLES.map((elemento, arrayIndex) =>
            <button 
              onClick={() => handleClick(arrayIndex)}
              key={elemento.title}
              className={`inline-block m-2 p-3 text-slate-300 rounded-md ${arrayIndex === selectedButton ? 'bg-blue-500 text-white' : 'hover:bg-slate-900 hover:text-white'}`}
            >
              {elemento.title}
            </button>
          )}
        </div>
        <article className="bg-slate-600 text-slate-200 p-12 m-3">
          <h3 className="mb-10 text-lg">
            {EXAMPLES[selectedButton].title}
          </h3>
          <p className="mb-10">
            {EXAMPLES[selectedButton].description}
          </p>
          <hr />
          <pre className="mt-3 overflow-hidden">
            <code>
              {EXAMPLES[selectedButton].code}
            </code>
          </pre>
        </article>
      </section>
    </>
  )
}
