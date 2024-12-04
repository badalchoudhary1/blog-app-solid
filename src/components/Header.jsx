import { createSignal } from "solid-js";
import { A } from "@solidjs/router";


// const Header = () => {
//     const [show, setShow] = createSignal(false);

//     setShow(false)
//     setShow(t => !t)

//     return (<div>
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <a class="navbar-brand" href="#">Navbar</a>
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//         </button>

//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav mr-auto">
//             <li class="nav-item active">
//                 <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" href="#">Link</a>
//             </li>
//             <li class="nav-item dropdown">
//                 <a onClick={() =>{
//                     console.log("this is onclic")
//                     setShow(t => !t)}} class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 Dropdown
//                 </a>
//                 <div class={`dropdown-menu ${show() ? "show" : ""}`} aria-labelledby="navbarDropdown">
//                 <a class="dropdown-item" href="#">Action</a>
//                 <a class="dropdown-item" href="#">Another action</a>
//                 <div class="dropdown-divider"></div>
//                 <a class="dropdown-item" href="#">Something else here</a>
//                 </div>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link disabled" href="#">Disabled</a>
//             </li>
//             </ul>
//             <form class="form-inline my-2 my-lg-0   d-flex gap-2">
//             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//             <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//         </form>
//   </div>
// </nav>
// </div>

//     )
// }

const Header = () => {
    const [show, setShow] = createSignal(false);

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">My Blog</a>
                <button class="navbar-toggler" type="button" onClick={() => setShow((prev) => !prev)}>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class={`collapse navbar-collapse ${show() ? "show" : ""}`}>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <A class="nav-link" href="/">Home</A>
                        </li>
                        <li class="nav-item">
                            <A class="nav-link" href="/about">About</A>
                        </li>
                        <li class="nav-item">
                            <A class="nav-link" href="/contact">Contact</A>
                        </li>
                        <li class="nav-item">
                            <A class="nav-link" href="/blogs">Blogs</A>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;
