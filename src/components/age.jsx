import { createEffect, createSignal } from "solid-js";




function Age(){
    const[age,setAge] = createSignal(10);
    createEffect(()=>{
        alert(`your age has been updated,${age()}`);
    });

    return(
        <div>
        <p>Age: {age()}</p>
        <button onclick={()=>setAge(age()+1)}>Increase Age</button>
        </div>
    );
}

export default Age