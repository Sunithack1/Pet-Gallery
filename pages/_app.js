import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import '../public/static/site.css';
import '../pages/styles.scss'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
