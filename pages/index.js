import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const title = 'AlgoNugz | An NFT Collection';
  const description =
    'A Pixel Art Weed NFT Collection on the Algorand blockchain';

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-[#354c25] font-body'>
      <Head>
        <title>{title}</title>

        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />

        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta
          name='twitter:image'
          content={'https://www.algonugz.com/twitter-share-image.png'}
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      <main className='px-5 py-10 md:px-20'>
        <div>
          <h1 className='mb-2 text-5xl font-bold text-green-300'>AlgoNugz</h1>
          <h2 className='text-xl text-green-50'>
            Coming Soon - A Pixel Art Weed NFT Collection on the Algorand
            blockchain
          </h2>
          <div className='mt-10'>
            <Image
              src='/nugz/algonugz001.png'
              alt='AlgoNugz #001'
              width={200}
              height={200}
              className='rounded-lg'
            />
          </div>
        </div>
      </main>
    </div>
  );
}
