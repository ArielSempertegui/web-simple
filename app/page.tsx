import Image from 'next/image';
import Header from '@/components/header'
import CoreConcept from '@/components/core-concept';
import { CORE_CONCEPTS } from '@/scripts/data';
import TabExampleSection from '@/components/tab-example-section';

export default function Home() {
  return (
    <>
      <Header />
      <section id="conceptos" className="flex flex-col m-12 justify-center bg-violet-800 min-w-44">
        <h1 className="text-2xl text-center font-extrabold text-slate-100 p-3 mx-auto mb-6 overflow-clip">
          Conceptos básicos de React
        </h1>
        <ul className="flex flex-col m-3 md:m-8 md:flex-row space-y-16 md:space-y-0 md:space-x-6">
          {CORE_CONCEPTS.map((n) => 
            <CoreConcept key={n.title} image={n.image} title={n.title} description={n.description} />
            //<CoreConcept key={n.title} {...n} />
          )}
        </ul>
      </section>
      <TabExampleSection></TabExampleSection>
    </>
  );
}
