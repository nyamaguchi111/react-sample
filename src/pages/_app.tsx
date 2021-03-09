import { AppProps } from "next/app";
import { Layout } from "components/layouts/Layout";
import "styles/app.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
