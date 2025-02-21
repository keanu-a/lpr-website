import { Link } from 'react-router';

import nnccffLogo from '@/assets/philanthropy/nnccf-logo.jpg';

import { Button } from '@/components/ui/button';
import ScrollingGallery from '@/components/ScrollingGallery';
import Title from '@/components/Title';

export default function LocalPhilanthropies() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="flex justify-center text-2xl mt-4 font-bold md:text-4xl">
        Local Philanthropies
      </h1>
      <div className="mt-4 flex flex-col gap-8 items-center">
        <img
          src={nnccffLogo}
          alt="Northern Nevada Children's Cancer Foundation Logo"
          className="md:w-1/2"
        />

        <Button>
          <Link
            to="https://www.nvchildrenscancer.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit nvchildrenscancer.org
          </Link>
        </Button>
      </div>

      <p>
        Lambda Psi Rho's philanthropy is the Northern Nevada Children's Cancer
        Foundation. The NNCCF is the only organization that supports children
        fighting against cancer in the Northern and East Sierra regions of
        Nevada. Lambda Psi Rho has supported NNCCF every year with three major
        philanthropic events including Pholanthropy, Hoops For Hope, Lambda Psi
        Rholls, and Shave to Save. The Northern Nevada Children's Cancer
        Foundation strives to enhance the quality of lives of children battling
        cancer and their families by providing emotional and financial support.
        The NNCCF symbol is made up of flags which symbolize joy, hope,
        innocence and imagination.
      </p>

      <ScrollingGallery />

      <Title title="Hoops 4 Hope" subtitle="Basketball Tournament" />
      <p>
        Hosted in the Fall, we work directly with the NNCCF to host a week full
        of events that are solely focused on raising awareness and money for the
        foundation. At the end of the week, we host a basketball tournament for
        the Greek community to participate in.
      </p>

      <Title title="Lambda Psi Rholls" subtitle="AYCE Sushi" />
      <p>
        The gentlemen of Lambda Psi Rho host an all you can eat sushi roll event
        in support of the NNCCF every spring. The event runs from the late
        evening to the early hours of the morning with brothers serving sushi to
        continue the fight against childhood cancer.
      </p>

      <Title title="Pholanthropy" subtitle="Pho Event" />
      <p>
        The gentlemen of Lambda Psi Rho also host a pho event in support of the
        NNCCF. The event runs from 5pm - 8pm and all proceeds go to NNCCF. Food
        sold will be catered through partnering with Ijji Noodle House to sell
        Pho with noodles/meat/toppings and potstickers. The event includes
        raffles and tabling from different organizations such as ACDC and Open
        APIA.
      </p>

      <Title title="Shave for the Brave" subtitle="St. Baldricks" />
      <p>
        Members of the community come together and shave their heads to raise
        money to show solidarity for the numerous children fighting against
        cancer. Shave for the Brave is an NNCCF event thats partered with St.
        Baldricks. The brothers of Lambda Psi Rho, along with many organizations
        on campus, participate in Shave to Save every year to support NNCCF.
      </p>
    </div>
  );
}
