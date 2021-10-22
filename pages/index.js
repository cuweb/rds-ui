import Head from 'next/head';
import Button from '../components/Button/Button';

export default function Home() {
  const styles = {
    h2: `text-2xl font-semibold`,
    section: `mb-12`,
  };
  return (
    <div className='home'>
      <Head>
        <title>RDS - PoC</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container mx-auto p-6'>
        <h1 className='text-4xl font-bold pb-8 underline'>Components</h1>
        <section className={styles.section}>
          <h2 className={styles.h2}>CTA 👻 Ghost CTA buttonButton</h2>
          <Button
            text={'Join the darkside'}
            link={'http://www.nooooooooooooooo.com/'}
            target={'blank'}
          />
        </section>
        <section className={styles.section}>
          <h2 className={styles.h2}>👻 Ghost CTA button</h2>
          <Button
            text={'Stay Puft'}
            link={'https://en.wikipedia.org/wiki/Stay_Puft_Marshmallow_Man'}
            ghost
          />
        </section>
        <section className={styles.section}>
          <h2 className={styles.h2}>CTA button with icon</h2>
          <Button
            text={'Download our free ebook'}
            link={'#'}
            icon={'arrowDown'}
          />
        </section>
        <section className={styles.section}>
          <h2 className={styles.h2}>Full-width buttons</h2>
          <Button text={'Add to Calendar'} link={'#'} icon={'plus'} full />
        </section>
      </main>
    </div>
  );
}
