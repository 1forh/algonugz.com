import Head from 'next/head';
import Link from 'next/link';
import Card from '../components/Card';
import {
  glass,
  prerolls,
  greenLabelStrains,
  goldLabelStrains,
  displayGoldLabelStrains,
} from '../data';

const scheduleVisible = false;

export default function Home() {
  const title = 'AlgoNugz - An NFT Weed Dispensary';
  const description =
    'An NFT dispensary with all of your favorite strains on the Algorand blockchain.';

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
          <div className='flex justify-between'>
            <div>
              <h1 className='mb-2 text-5xl font-bold text-green-300'>
                AlgoNugz
              </h1>
              <h2 className='mb-10 text-xl text-green-50'>
                An NFT weed dispensary with all of your favorite strains.
                <br /> Check out our home-grown collection of weed nugz.
              </h2>
            </div>
            {scheduleVisible && (
              <div>
                <Link href='/schedule'>
                  <a className='flex items-center space-x-3 text-lg font-medium text-green-300 transition-colors duration-150 hover:text-green-500'>
                    <svg className='w-5 h-5' viewBox='0 0 448 512'>
                      <path
                        fill='currentColor'
                        d='M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z'
                      ></path>
                    </svg>
                    <span>Schedule</span>
                  </a>
                </Link>
              </div>
            )}
          </div>
          <h3 className='overflow-scroll text-xl text-green-50'>
            Official Address:
            VBGCZBQ34IM6LARXM4R3SBMF4QGWXPQ7DPJF7ARU7I4SHKRRLV2YEMUOMA
          </h3>
          <div className='mt-10 space-x-5'>
            <a
              href='https://ab2.gallery/address/VBGCZBQ34IM6LARXM4R3SBMF4QGWXPQ7DPJF7ARU7I4SHKRRLV2YEMUOMA'
              className='inline-flex items-center px-5 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
            >
              AB2 Gallery
            </a>
            <a
              href='https://twitter.com/algonugz'
              className='inline-flex items-center px-5 py-2 space-x-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
            >
              <svg
                className='w-4 h-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  fill='currentColor'
                  d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
                ></path>
              </svg>
              <span>Twitter</span>
            </a>
          </div>
          <div className='mt-10'>
            <h2 className='mb-6 text-3xl text-green-50'>Strains</h2>
            <div>
              <h3 className='text-2xl text-green-50'>Green Label</h3>
              <div className='grid grid-cols-2 gap-5 mt-6 md:grid-cols-3 lg:grid-cols-6'>
                {greenLabelStrains.map((it, index) => (
                  <Card item={it} key={index} />
                ))}
              </div>
            </div>
            {displayGoldLabelStrains && (
              <div className='mt-10'>
                <h3 className='text-2xl text-green-50'>Gold Label</h3>
                <div className='grid grid-cols-2 gap-5 mt-6 md:grid-cols-3 lg:grid-cols-6'>
                  {goldLabelStrains.map((it, index) => (
                    <Card item={it} key={index} />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className='mt-10'>
            <h2 className='mb-6 text-3xl text-green-50'>Glass Pipes</h2>
            <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6'>
              {glass.map((it, index) => (
                <Card item={it} key={index} />
              ))}
            </div>
          </div>
          <div className='mt-10'>
            <h2 className='mb-6 text-3xl text-green-50'>Prerolls</h2>
            <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6'>
              {prerolls.map((it, index) => (
                <Card item={it} key={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
