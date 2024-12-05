import { createSignal, onCleanup, onMount } from "solid-js";



function Timer(){
    const[seconds,setSeconds]=createSignal(0);
    let timerId;

    onMount(()=>{
        console.log("timer started");

        timerId=setInterval(() => {
            setSeconds(seconds()+1);
        }, 900);
        
    });

    onCleanup(()=>{
        clearInterval(timerId);
        console.log("timer stop");
        
    });

    const stopTimer=()=>{
        clearInterval(timerId);
        console.log("timer stop manualy");
        

    }
    return(
        <div>
            <h2>Simple timer</h2>
            <p>Elapsed timer{seconds()} seconds </p>
            <button onclick={stopTimer}>stoptimer</button>
        </div>
        

    );

}


export default Timer