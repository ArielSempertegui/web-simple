import Image from 'next/image';
import Header from '@/components/header'
import CoreConcept from '@/components/core-concept';
import TabExampleSection from '@/components/tab-example-section';

export default function Home() {
  return (
    <>
      <Header />
      <CoreConcept />
      <TabExampleSection></TabExampleSection>
    </>
  );
}
