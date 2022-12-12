import { Html, useProgress } from "@react-three/drei";

function Loader(){
    const {progress} =useProgress();
    
    return <Html center>
   <img   src="./nvisionaries.png"></img>
<progress style={{width:'100%'}} id="file" value={progress} max="103"> {progress}% </progress>
</Html>
}

export default Loader;