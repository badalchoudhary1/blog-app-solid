import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children}) => {

    return <>
    <Header></Header>
    <div style={{"min-height": "60vh"}}>
    {children}
    </div>
    <Footer></Footer>
    </>
}
export default Layout