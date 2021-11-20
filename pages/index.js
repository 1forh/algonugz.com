import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-[#354c25] font-body'>
      <Head>
        <title>AlgoNugz | A Pixel Art Weed NFT Collection</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='mask-icon'
          href='/favicons/safari-pinned-tab.svg'
          color='#202020'
        />
        <meta name='msapplication-TileColor' content='#e5ffd7' />
        <meta name='theme-color' content='#ffffff' />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
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
