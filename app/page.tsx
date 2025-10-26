import Image from 'next/image';
import Header from '@/components/header'
import CoreConcept from '@/components/core-concept';
import TabExampleSection from '@/components/tab-example-section';
import Dropdown from '@/components/dropdown';

export default function Home() {
  return (
    <>
      <Header />
      <nav className="flex flex-col md:flex-row bg-violet-900 justify-center md:justify-between">
        <Dropdown menuText="Dropdown" />
        <Dropdown menuText="madremia" />
      </nav>
      <CoreConcept />
      <TabExampleSection />
    </>
  );
}
