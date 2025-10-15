import Image, { StaticImageData } from 'next/image'

export default function CoreConcept({
    image, title, description
} : {
    image:StaticImageData; 
    title:string; 
    description:string
}) {
  return (
    <>
        <li className="flex flex-col items-center justify-center">
            <Image src={image} alt="React Components" className="w-32"></Image>
            <h2 className="text-xl font-bold text-slate-100">{title}</h2>
            <p className="p-3 mt-2 text-slate-200">
                {description}
            </p>
        </li>
    </>
  )
}
