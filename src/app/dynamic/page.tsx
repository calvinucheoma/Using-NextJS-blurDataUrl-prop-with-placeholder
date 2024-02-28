import getBase64 from '@/lib/getLocalBase64';
import Image from 'next/image';

const DynamicPage = async () => {
  const myBlurDataUrl = await getBase64('http://localhost:3000/disney.jpg');
  return (
    <main className="min-h-screen grid place-content-center">
      <div className="w-[400px] rounded-2xl overflow-hidden">
        <Image
          src="/disney.jpg"
          alt="Disney"
          width={4016}
          height={6016}
          sizes="400px"
          placeholder="blur"
          blurDataURL={myBlurDataUrl}
          priority
        />
      </div>
    </main>
  );
};

export default DynamicPage;

// Made some changes to the next.config.mjs file for this to work
