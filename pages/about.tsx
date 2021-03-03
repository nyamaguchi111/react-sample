import styles from '../styles/Home.module.css'
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>アバウトページだよ</h1>
      <Link href="/">
        aboutページへ
      </Link>
    </div>
  );
}
