import '../styles/globals.css'
import "../pages/components/Login/Login.css"
import '../pages/components/Order/Order.css'
import '../pages/components/Product/Product.css'
import '../pages/components/AdminPage/AdminPage.css'
import '../pages/components/InsertForm/InsertForm.css'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
