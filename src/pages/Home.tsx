import Nav from '../components/Nav';
import heroBg from '../assets/active-house.jpg';

export default function Home() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <Nav className="relative z-10" />

      <div className="text-white relative z-10">
        <h1 className="">Each Man a Foundation For Excellence</h1>
      </div>
    </div>
  );
}
