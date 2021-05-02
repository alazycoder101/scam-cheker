import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scam Checker</title>
        <meta name="description" content="Scam checker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Welcome to Scam Checker!
        </h3>

        <p className={styles.description}>
          Please report the scam
        </p>
        <form action="/reports" method="POST">
        <ul>
        <li>
        <label for="phone_no">Phone No</label>
        <input id="phone_no" type="text" autoComplete="phone_no" required />
        </li>
        <li>
        <label for="content">Content</label>
        <textarea id="content"/>
        </li>
        <li>
        <button type="submit">Register</button>
        </li>
        </ul>
        </form>
      </main>
    </div>
  )
}
