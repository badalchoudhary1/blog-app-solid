import { A } from "@solidjs/router";
import Layout from "./Layout";

function Contact() {
    return (
        <Layout>
            <div class="container my-5">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Reach out to us using the form below:</p>
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" id="message" rows="4" placeholder="Write your message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
                <hr class="my-4" />
                <p>Or connect with us on:</p>
                <ul class="list-unstyled">
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="text-decoration-none">Facebook</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-decoration-none">Twitter</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-decoration-none">Instagram</a></li>
                </ul>
                <hr />
                <A href="/" class="btn btn-link">Back to Home</A>
            </div>
        </Layout>
    );
}

export default Contact;
