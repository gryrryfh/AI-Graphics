## jsx
``` jsx
import { useRef } from "react"
import {useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"
function MyElement3D() {
    const refMesh = useRef()

  
  return (
    <>
    <directionalLight position={[1,1,1]}/>

    <axesHelper scale={10}/>
    <OrbitControls/>
    <mesh  ref={refMesh}
      position-y={2}
      rotation-z={ THREE.MathUtils.degToRad(45)}
      scale={[2,1,1]}>

        <boxGeometry/>
        <meshStandardMaterial color="#7fffd4" />
        <axesHelper/>
    </mesh>
    </>
  )
}
export default MyElement3D
```
