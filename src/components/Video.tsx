export default function Video({ title, src }: { title: string; src: string }) {
  return (
    <div>
      <iframe
        title={title}
        src={src}
        width="640"
        height="360"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}
