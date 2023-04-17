import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout, {siteTitle} from '../components/layout';

import { getPostsData } from '../lib/post';

import Link from 'next/link';
import utilStyle from '../styles/utils.module.css';

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  //id, title, date, thumbnail
  return {
    props: {
      allPostsData,
    },
  };
}

// //SSRの場合
// export async function getServerSideProps(context) {

//   return {
//     props: {
//       //コンポーネントに渡すためのprops
//     },
//   };
// }

export default function Home({ allPostsData }) {
  return (
    // <div className={styles.container}>
      <Layout home >
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyle.headingMd}>
          <p>
            Hi there! I'm Cuc Nguyen. I love learning new things, especially love to support people. I am learning about the knowledge related to programming languages to help increase the work efficiency of the development team.
          </p>
          <p>
          (This is my sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.)
        </p>
        </section>

        <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
            <h2>📝Bridge Engineerのブログ</h2>
            <div className={styles.grid}>
              {allPostsData.map(({id,title,date,thumbnails}) => (
                <article key={id}>
                  <Link href={`/posts/${id}`}>
                    <img 
                      src={`${thumbnails}`}  className={styles.thumbnailImage}/>  
                  </Link>
                  <Link legacyBehavior href={`/posts/${id}`}>
                  <a className={utilStyle.boldText}>{title}</a>
                  </Link>
                  <br/>
                  {date}
                </article>
                ))}

            </div>
        </section>

      </Layout>
    // </div>
      
  );
}


