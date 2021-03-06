import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2 bg-stars'>
      <Head>
        <title>7-30.ro</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <h1 className='text-6xl font-bold text-white'>
          Bine ai venit pe{' '}
          <a className='text-blue-600' href='https://7-30.ro'>
            site-ul 7-30
          </a>
          !
        </h1>

        <p className='mt-3 text-2xl'>
          Alege una dintre <code className='rounded-md bg-gray-100 p-3 font-mono text-lg'>opțiunile de mai jos</code>:
        </p>

        <div className='mt-6 flex max-w-4xl flex-wrap items-center  justify-around sm:w-full'>
          <a
            href='https://nextjs.org/docs'
            className='bg-gray-400 mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Platformă internă &rarr;</h3>
            <p className='mt-4 text-xl text-gray-400 hover:text-gray-700'>
              Find in-depth information about Next.js features and its API.
            </p>
          </a>

          <a
            href='https://nextjs.org/learn'
            className='mt-6 w-96 rounded-xl bg-gray-400  border p-6 text-left hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Comunitate &rarr;</h3>
            <p className='mt-4 text-xl text-gray-400 hover:text-gray-700'>
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className='mt-6 w-96 rounded-xl bg-gray-400 border p-6 text-left hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Echipă &rarr;</h3>
            <p className='mt-4 text-xl text-gray-400 hover:text-gray-700'>
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className='mt-6 w-96 rounded-xl border bg-gray-400  p-6 text-left hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Alte zâne &rarr;</h3>
            <p className='mt-4 text-xl text-gray-400 hover:text-gray-700'>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className='flex h-24 w-full items-center justify-center border-t'>
        <a
          className='flex items-center justify-center gap-2'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          &copy; Magificat de 7-30 într-o vară toridă, în Hunedoara
        </a>
      </footer>
    </div>
  );
};

export default Home;
