import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const title = 'AlgoNugz';
  const description =
    'Coming Soon - An NFT dispensary on the Algorand blockchain.';

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
        {/* <div className='mb-8'>
          <a href='https://twitter.com/algonugz' target='_blank'>
            <svg width='32' height='32' viewBox='0 0 32 32'>
              <g fill='none' fill-rule='evenodd'>
                <circle fill='#00AAEC' cx='16' cy='16' r='16'></circle>
                <path
                  d='M26 11.657a7.614 7.614 0 01-2.12.557 3.573 3.573 0 001.623-1.955 7.588 7.588 0 01-2.346.856A3.763 3.763 0 0020.462 10c-2.038 0-3.692 1.583-3.692 3.534 0 .277.032.546.095.805-3.069-.148-5.79-1.553-7.612-3.694a3.414 3.414 0 00-.5 1.779c0 1.225.652 2.307 1.643 2.941a3.823 3.823 0 01-1.673-.44v.043c0 1.713 1.273 3.142 2.963 3.465a3.835 3.835 0 01-1.668.062c.47 1.404 1.833 2.426 3.45 2.453a7.62 7.62 0 01-4.587 1.514c-.298 0-.593-.016-.881-.049A10.813 10.813 0 0013.66 24c6.794 0 10.508-5.385 10.508-10.055 0-.154-.003-.308-.01-.458A7.301 7.301 0 0026 11.657'
                  fill='#FFF'
                ></path>
              </g>
            </svg>
          </a>
        </div> */}
        <div>
          <h1 className='mb-2 text-5xl font-bold text-green-300'>AlgoNugz</h1>
          <h2 className='text-xl text-green-50'>
            Coming Soon - An NFT dispensary on the Algorand blockchain.
          </h2>
          <div className='mt-10'>
            <Image
              src='/nugz/NUG001.png'
              alt='AlgoNugz AK-47'
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
