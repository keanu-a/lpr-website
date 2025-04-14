import { philanthropyPhotos } from '@/data/philanthropy';

export default function ScrollingGallery() {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex w-max animate-scroll">
        {philanthropyPhotos.map(({ photo, alt }, index) => (
          <img
            key={index}
            src={photo}
            alt={alt}
            className="object-cover rounded-lg w-96 mx-2 h-96"
          />
        ))}
      </div>
    </div>
  );
}
