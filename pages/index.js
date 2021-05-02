import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scam Checker</title>
        <meta name="description" content="Scam checker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/reports/new">
                <a>Report Post</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
        </ul>
      </div>
      <main className={styles.main}>
        <h3 className={styles.title}>
          Welcome to Scam Checker!
        </h3>

        <p className={styles.description}>
          Please report the scam
        </p>
      </main>
    </div>
  )
}
