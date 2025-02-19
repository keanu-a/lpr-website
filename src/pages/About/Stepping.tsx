import { steppingPageVideos } from '@/data/videos';

const VIDEO_WIDTH = 640;
const VIDEO_HEIGHT = 360;

export default function Stepping() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold md:text-4xl">Stepping</h1>

      <div className="flex flex-col gap-4">
        {steppingPageVideos.map((data, videoIdx) => (
          <iframe
            key={videoIdx}
            title={data.title}
            src={data.src}
            width={VIDEO_WIDTH}
            height={VIDEO_HEIGHT}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        ))}
      </div>
    </div>
  );
}
