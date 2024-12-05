import { createEffect, createSignal } from "solid-js";


function Counter(){
    const[count,setCount]=createSignal(0);

    createEffect(()=>{
        console.log(`count is to update: ${count()}`);
    }
    );

    return (
        <div>
            <h2>Simple counter</h2>
            <p>count:{count()}</p>
            <button onclick={()=>setCount(count()+1)}>Increase count</button>
        </div>
    );

}
export default Counter