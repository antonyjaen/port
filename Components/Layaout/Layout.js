import { useState } from "react"
import Context from "../Context/Context"
import Navbar from "../Navbar"


const Layout = ({children})=>{
    const [english, setEnglish] = useState(false)
    const toggleState = (state)=>{
        setEnglish(state)
    }
    return(
    <Context.Provider value={{english,toggleState}}>
        <Navbar></Navbar>
        <main>
            {children}
        </main>
        </Context.Provider>)
}
export default Layout