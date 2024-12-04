import { A } from "@solidjs/router";
import Layout from "./Layout";

function About() {
    return (
        <Layout>
            <div class="container my-5">
                <h1>About Us</h1>
                <p>
                    Welcome to our blog! We are passionate about sharing valuable insights, creative ideas, and engaging content on various topics. Our mission is to inform, inspire, and entertain our readers through well-crafted blogs.
                </p>
                <h2>Our Vision</h2>
                <p>
                    To become a go-to platform for individuals seeking inspiration, knowledge, and fresh perspectives on a wide range of topics.
                </p>
                <h2>Our Team</h2>
                <p>
                    We are a group of enthusiastic writers, creators, and thinkers who believe in the power of storytelling. Each blog is a result of thorough research and a passion for delivering quality content.
                </p>
                <hr />
                <A href="/" class="btn btn-link">Back to Home</A>
            </div>
        </Layout>
    );
}

export default About;
