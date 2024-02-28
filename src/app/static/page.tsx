import Image from 'next/image';
import disneyPic from '@/app/disney.jpg';

const StaticPage = () => {
  return (
    <main className="min-h-screen grid place-content-center">
      <div className="w-[400px] rounded-2xl overflow-hidden">
        <Image
          src={disneyPic}
          alt="Disney"
          width={4016}
          height={6016}
          sizes="400px"
          placeholder="blur"
          priority
        />
      </div>
    </main>
  );
};

export default StaticPage;
