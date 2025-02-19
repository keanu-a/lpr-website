import nnccfDonation2019 from '@/assets/philanthropy/nnccf-donation-2019.jpg';
import nnccfDonation2023 from '@/assets/philanthropy/nnccf-donation-2023.jpg';
import hoops4Hope2018 from '@/assets/philanthropy/hoops-4-hope.jpg';
import hoops4Hope2019 from '@/assets/philanthropy/hoops-4-hope-2.jpg';

export default function ScrollingGallery() {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex w-max animate-scroll">
        {[
          nnccfDonation2019,
          hoops4Hope2018,
          nnccfDonation2023,
          hoops4Hope2019,
          nnccfDonation2019,
          hoops4Hope2018,
          nnccfDonation2023,
          hoops4Hope2019,
          nnccfDonation2019,
          hoops4Hope2018,
          nnccfDonation2023,
          hoops4Hope2019,
        ].map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Philanthropy event"
            className="object-cover rounded-lg w-96 mx-2"
          />
        ))}
      </div>
    </div>
  );
}
