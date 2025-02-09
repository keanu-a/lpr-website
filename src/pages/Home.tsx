import Nav from "../components/Nav";
import heroBg from "../assets/active-house.jpg";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <Nav className="relative z-15" />

        <div className="absolute top-1/2 transform -translate-y-1/2 inset-0 flex flex-col items-center justify-center h-fit text-white z-5">
          <h1 className="text-md md:text-3xl">Each Man a Foundation For</h1>
          <h1 className="text-5xl sm:text-7xl md:text-9xl text-[#9B0033] uppercase font-bold shadow-lg">
            Excellence
          </h1>

          <h2 className="mt-20 md:text-xl">
            The University of Nevada, Reno Est. 2006
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}
