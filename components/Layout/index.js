import Footer from "../Footer"
import Navbar from "../Navbar"




export default function Layout({children}) {
    return(
        <>
        
            
            <title>Pokedex</title>
        
        <Navbar />
        <main className="main-container">{children}</main>
        <Footer />
        </>
    )
}