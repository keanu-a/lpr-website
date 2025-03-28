import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Youtube, Instagram } from 'lucide-react';
import { InstagramEmbed } from 'react-social-media-embed';
import { AnimatePresence, motion } from 'motion/react';

import Nav from '../components/Nav';
import heroBg from '@/assets/hero.jpg';
import Footer from '@/components/Footer';
import Title from '@/components/Title';
import Loader from '@/components/Loader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  // Home page always loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="popLayout">
        {loading && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="bg-white flex h-screen items-center justify-center"
            key="loader"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
            <Nav className="relative z-15" />

            <div className="absolute top-1/2 transform -translate-y-1/2 inset-0 flex flex-col items-center justify-center h-fit text-white z-5">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-md md:text-3xl"
                >
                  Each Man a Foundation For
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                  className="text-6xl sm:text-8xl md:text-9xl lg:text-[9rem] text-maroon uppercase font-bold"
                >
                  Excellence
                </motion.h1>
              </div>

              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="mt-20 md:text-xl"
                >
                  The University of Nevada, Reno Est. 2006
                </motion.h2>
              </div>
            </div>
          </div>

          <div className="my-8 flex flex-col gap-4 justify-center items-center md:flex-row">
            <InstagramEmbed url="https://www.instagram.com/lambdapsirho/" />

            <div className="flex flex-col gap-4">
              <Title title="Keep up with us" subtitle="Social Media" />

              <div className="flex gap-2 items-center">
                <Link
                  to="https://www.youtube.com/user/lambdapsirho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-maroon transition-all"
                >
                  <Youtube size={30} />
                </Link>
                <Link
                  to="https://www.instagram.com/lambdapsirho/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-maroon transition-all"
                >
                  <Instagram />
                </Link>
              </div>
            </div>
          </div>

          <Footer />
        </motion.div>
      )}
    </div>
  );
}
