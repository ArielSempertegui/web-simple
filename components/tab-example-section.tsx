import { EXAMPLES } from "@/scripts/data";
import { useState } from 'react'

export default function TabExampleSection() {

  const [isSelected, setSelected] = useState(false)

  return (
    <>
        <section id="tab-section" className="flex flex-col my-12 mx-4 md:mx-12">
          {/* <TabButton isSelected={isSelected}>EXAMPLES.components.title</TabButton>
          <TabButton isSelected={isSelected}>EXAMPLES.jsx.title</TabButton>
          <TabButton isSelected={isSelected}>EXAMPLES.props.title</TabButton>
          <TabButton isSelected={isSelected}>EXAMPLES.state.title</TabButton> */}
          <TabExample />
        </section>
    </>
  )
}

export function TabButton({
  children, onClick, isSelected, className
} : {
  children: string;
  onClick: () => void;
  isSelected: boolean;
  className?: string;
}) {
  let cssprops = className || "inline-block m-2 p-3 text-slate-300 rounded-md hover:bg-slate-900 hover:text-white"
  if(isSelected){
    cssprops += " bg-blue-500 text-white"
  }
  return (
    <>
        <button className={cssprops} onClick={onClick}>
          {children}
        </button>
    </>
  )
}

export function TabExample() {
  return (
    <>
        <div>que tal</div>
    </>
  )
}