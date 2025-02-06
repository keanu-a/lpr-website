import { Link } from 'react-router';

import nnccffLogo from '@/assets/nnccf-logo.jpg';
import nnccfDonation2019 from '@/assets/nnccf-donation-2019.jpg';
import hoops4Hope2018 from '@/assets/hoops-4-hope.jpg';

import { Button } from '@/components/ui/button';

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <img
          src={nnccfDonation2019}
          alt="Lambda Psi Rho donating to the NNCCF with a big check"
          className="object-cover rounded-lg aspect-[4/3]"
        />
        <img
          src={hoops4Hope2018}
          alt="Poster for Hoops 4 Hope philanthropy event"
          className="object-cover rounded-lg aspect-[4/3]"
        />
      </div>

      <p>
        Hoops for Hope is our largest philanthropy of the year. Hosted in the
        Fall, we work directly with the NNCCF to host a week full of events that
        are solely focused on raising awareness and money for the foundation. At
        the end of the week, we host a basketball tournament for the Greek
        community to participate in.
      </p>

      <p>
        The gentlemen of Lambda Psi Rho host an all you can eat sushi roll event
        in support of the NNCCF every spring. The event runs from the late
        evening to the early hours of the morning with brothers serving sushi to
        continue the fight against childhood cancer.Shave to Save is a week
        following Lambda Psi Rholls. Members of the community come together and
        shave their heads to raise money to show solidarity for the numerous
        children fighting against cancer. The brothers of Lambda Psi Rho, along
        with many organizations on campus, participate in Shave to Save every
        year to support NNCCF.
      </p>
    </div>
  );
}
