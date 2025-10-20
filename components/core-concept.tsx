import Image, { StaticImageData } from 'next/image'
import { CORE_CONCEPTS } from '@/scripts/data';

export default function CoreConcept(){

    return(
        <>
            <section id="conceptos" className="flex flex-col m-12 justify-center bg-violet-800 min-w-44">
            <h1 className="text-2xl text-center font-extrabold text-slate-100 p-3 mx-auto mb-6 overflow-clip">
                Conceptos básicos de React
            </h1>
            <ul className="flex flex-col m-3 md:m-8 md:flex-row space-y-16 md:space-y-0 md:space-x-6">
                {CORE_CONCEPTS.map((elemento) => 
                    <CoreConceptListItem key={elemento.title} image={elemento.image} title={elemento.title} description={elemento.description} />
                    //<CoreConceptListItem key={elemento.title} {...elemento} />
                )}
            </ul>
            </section>
        </>
    )
}



export function CoreConceptListItem({
        image, title, description
    } : {
        image: StaticImageData; 
        title: string; 
        description: string
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
