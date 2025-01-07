import Nav from '../components/Nav';
import heroBg from '../assets/active-house.jpg';

export default function Home() {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <Nav className="relative z-10" />

        <div className="absolute top-1/2 transform -translate-y-1/2 inset-0 flex flex-col items-center justify-center h-fit text-white z-10">
          <h1 className="text-3xl">Each Man a Foundation For</h1>
          <h1 className="text-9xl text-[#9B0033] uppercase font-bold shadow-lg">
            Excellence
          </h1>

          <h2 className="text-xl mt-20">
            The University of Nevada, Reno Est. 2006
          </h2>
        </div>
      </div>
    </>
  );
}
