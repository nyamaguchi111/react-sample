import styles from '../styles/Home.module.css'
import TestComponent from "../components/TestComponent";
import TestComponent2 from "../components/TestComponent2";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>トップ</h1>
      <h2>クラスコンポーネント</h2>
      <TestComponent></TestComponent>
      <TestComponent2 title={"アイウエオ"}></TestComponent2>
      <Link href="/about">
        <a>aboutページへ</a>
      </Link>
    </div>
  );
}
