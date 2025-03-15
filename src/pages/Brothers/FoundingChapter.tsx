import {
  foundingFathers,
  foundingChapterBrothers,
} from '@/data/foundingChapter';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Title from '@/components/Title';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function FoundingChapter() {
  return (
    <div className="flex flex-col gap-4 max-w-6xl mx-auto">
      <h1 className="flex justify-center text-2xl my-4 font-bold md:text-4xl">
        Founding Chapter
      </h1>

      <div className="flex flex-col gap-4">
        <Title title="11 Distinguished Gentlemen" subtitle="Founding Fathers" />

        <ImagePlaceholder className="h-96 w-full" />

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {foundingFathers.map((name, fatherIndex) => (
            <li className="md:text-lg" key={fatherIndex}>
              {name}
            </li>
          ))}
        </ul>
      </div>

      <Accordion type="single" collapsible>
        {foundingChapterBrothers.map((data, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="hover:no-underline hover:text-maroon transition-all duration-300">
              <p className="uppercase sm:text-lg">
                {data.greekLetter} - {data.className}
              </p>
            </AccordionTrigger>
            <AccordionContent
              className={`flex flex-col justify-around items-center gap-2 md:flex-row ${
                index % 2 === 0 && 'md:flex-row-reverse'
              }`}
            >
              {data.photo ? (
                <img
                  src={data.photo}
                  className="w-fit rounded-md shadow-xl h-[16rem] object-cover md:h-[26rem] md:w-1/2"
                  loading="lazy"
                />
              ) : (
                <ImagePlaceholder className="w-96 h-72" />
              )}
              <div className="flex flex-col gap-2 p-2">
                <Title title={data.className} subtitle={data.greekLetter} />
                <ul className="flex flex-wrap justify-center gap-4 md:flex-col">
                  {data.brothers.map((name, brotherIndex) => (
                    <li className="md:text-base" key={brotherIndex}>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
