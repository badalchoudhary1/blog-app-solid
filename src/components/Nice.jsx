import { A } from "@solidjs/router";
import Layout from "./Layout";

function About() {

    return(
        <Layout>
            <div>
                <hi>hello Nice page</hi>
                <A href="/about">Abuot</A><br />
                <A href="/contact">Contact</A><br />
                <A href="/">Home</A><br />
            </div> 
       </Layout>
    )
 
 }
 
 export default About