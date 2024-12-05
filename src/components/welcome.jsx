import { onMount } from "solid-js";


function WelcomeComponent(){
    onMount(()=>{
        console.log("Welcome component has been mounted")
    });
    return <h1>welcome to solid js</h1>;
}


export default WelcomeComponent