import Head from 'next/head';
import TheSchedule from '../components/TheSchedule';
import { events } from '../data';

export default function Home() {
  const title = 'Events - AlgoNugz';
  const description = 'A list of upcoming and past events';

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-[#354c25] font-body'>
      <Head>
        <title>{title}</title>

        <meta property='og:title' content={title} />
        <meta name='description' content={description} />

        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta
          name='twitter:image'
          content={'https://www.algonugz.com/twitter-share-image.png'}
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      <main className='px-5 py-10 md:px-20'>
        <TheSchedule events={events} />
      </main>
    </div>
  );
}
