import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const title = 'AlgoNugz - An NFT Weed Dispensary';
  const description =
    'An NFT dispensary with all of your favorite strains on the Algorand blockchain.';
  const strains = [
    {
      url: 'https://ab2.gallery/asset/432941101',
      image: '/nugz/NUG001.png',
      id: 'NUG001',
      name: 'Sour Diesel',
      quantity: 47,
      total: 50,
    },
    {
      url: 'https://ab2.gallery/asset/433312974',
      image: '/nugz/NUG002.png',
      id: 'NUG002',
      name: 'Jack Herer',
      quantity: 7,
      total: 10,
    },
    {
      url: 'https://ab2.gallery/asset/434879391',
      image: '/nugz/NUG003.png',
      id: 'NUG003',
      name: 'Wedding Cake',
      quantity: 9,
      total: 10,
    },
    {
      url: 'https://ab2.gallery/asset/434881568',
      image: '/nugz/NUG004.png',
      id: 'NUG004',
      name: 'Durban Poison',
      quantity: 9,
      total: 10,
    },
    {
      url: 'https://ab2.gallery/asset/435489865',
      image: '/nugz/NUG005.png',
      id: 'NUG005',
      name: 'Purple Urkle',
      quantity: 8,
      total: 10,
    },
    {
      url: 'https://ab2.gallery/asset/435492533',
      image: '/nugz/NUG006.png',
      id: 'NUG006',
      name: 'Super Lemon Haze',
      quantity: 9,
      total: 10,
    },
    // {
    //   url: '',
    //   image: '/nugz/NUG007.png',
    //   id: 'NUG007',
    //   name: 'Northern Lights',
    //   quantity: 10,
    //   total: 10,
    // },
    // {
    //   url: '',
    //   image: '/nugz/NUG008.png',
    //   id: 'NUG008',
    //   name: 'OG Kush',
    //   quantity: 10,
    //   total: 10,
    // },
    // {
    //   url: '',
    //   image: '/nugz/NUG009.png',
    //   id: 'NUG009',
    //   name: 'Blue Dream',
    //   quantity: 10,
    //   total: 10,
    // },
    // {
    //   url: '',
    //   image: '/nugz/NUG010.png',
    //   id: 'NUG010',
    //   name: 'Gelato',
    //   quantity: 10,
    //   total: 10,
    // },
    // {
    //   url: '',
    //   image: '/nugz/NUG010.png',
    //   id: 'NUG011',
    //   name: 'Purple Haze',
    //   quantity: 10,
    //   total: 10,
    // },
    // {
    //   url: '',
    //   image: '/nugz/NUG010.png',
    //   id: 'NUG012',
    //   name: 'Pineapple Express',
    //   quantity: 10,
    //   total: 10,
    // },
  ];
  const glass = [
    {
      url: 'https://ab2.gallery/asset/440195494',
      image: '/glass/GLASS001.png',
      id: 'GLASS001',
      quantity: 1,
      total: 1,
    },
    {
      url: 'https://ab2.gallery/asset/440198867',
      image: '/glass/GLASS002.png',
      id: 'GLASS002',
      quantity: 1,
      total: 1,
    },
    {
      url: 'https://ab2.gallery/asset/440202528',
      image: '/glass/GLASS003.png',
      id: 'GLASS003',
      quantity: 1,
      total: 1,
    },
    {
      url: 'https://ab2.gallery/asset/440204216',
      image: '/glass/GLASS004.png',
      id: 'GLASS004',
      quantity: 1,
      total: 1,
    },
    // {
    //   url: 'https://ab2.gallery/asset/440209551',
    //   image: '/glass/GLASS005.png',
    //   id: 'GLASS005',
    //   quantity: 1,
    //   total: 1,
    // },
    // {
    //   url: 'https://ab2.gallery/asset/440211179',
    //   image: '/glass/GLASS006.png',
    //   id: 'GLASS006',
    //   quantity: 1,
    //   total: 1,
    // },
  ];

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
          <h2 className='mb-10 text-xl text-green-50'>
            An NFT weed dispensary with all of your favorite strains.
            <br /> Check out our home-grown collection of weed nugz.
          </h2>
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
            <h2 className='text-3xl text-green-50'>Strains</h2>
            <div className='grid grid-cols-2 gap-5 mt-6 md:grid-cols-3 lg:grid-cols-6'>
              {strains.map((it, index) => (
                <a href={it.url} className='group' key={index}>
                  <Image
                    src={it.image}
                    alt={it.name}
                    width={200}
                    height={200}
                    className='rounded-lg'
                  />
                  <p className='text-green-50'>
                    {it.id} &middot; {it.quantity}/{it.total}
                  </p>
                  <h3 className='text-green-50'>{it.name}</h3>
                </a>
              ))}
            </div>
          </div>
          <div className='mt-10'>
            <h2 className='text-3xl text-green-50'>Glass Pipes</h2>
            <div className='grid grid-cols-2 gap-5 mt-6 mt-10 md:grid-cols-3 lg:grid-cols-6'>
              {glass.map((it, index) => (
                <a href={it.url} className='group' key={index}>
                  <Image
                    src={it.image}
                    alt={it.id}
                    width={200}
                    height={200}
                    className='rounded-lg'
                  />
                  <p className='text-green-50'></p>
                  <h3 className='text-green-50'>
                    {it.id} &middot; {it.quantity}/{it.total}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
