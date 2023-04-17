import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";

const name = "クックのコーデイング勉強ページ";
export const siteTitle = "Next.js blog";

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header className={styles.header}>
                {home ? (
                    < >
                        <img 
                        src="/images/profile.png"
                        alt="Cuc Nguyen" 
                        width="144" height="144" className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} 
                        />
                        <h1 className={utilStyles.headingXl}>{name}</h1>
                    </>
                ) : (
                    < >
                    <Link href="/">
                        <img 
                        src="/images/profile.png" alt="Cuc Nguyen" 
                        width="144" height="144" 
                        className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} 
                        />
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                    <Link href="/" className={utilStyles.colorInherit}>   
                        {name}
                    </Link>    
                    </h2>
                    </>
                )}
                
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/"> ←　ホームへ戻る</Link>
                </div>
            )}
    
        </div>
    );
}

