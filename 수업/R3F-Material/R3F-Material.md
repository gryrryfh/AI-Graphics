### meshbasicMaterial
```javascript
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three"

function MyElement3D() {
    const mesh1 = useRef()
    const mesh2 = useRef()

    useEffect(() => {
        mesh2.current.material = mesh1.current.material
    }, [])

    return (
        <>
            <OrbitControls />

            <ambientLight intensity = {0.2} />

            <directionalLight position = {[0, 1, 0]} />
            <directionalLight position = {[1, 2, 8]} intensity = {0.7} />

            <mesh 
                ref = {mesh1}
                position = {[0.7, 0, 0]}
            >
                <boxGeometry />
                <meshBasicMaterial 
                    color = "yellow" 
                    wireframe = {false}
                    visible={true}
                    transparent = {true}
                    opacity = {0.5}
                    depthTest = {true}
                    depthWrite = {true}
                    side = {THREE.DoubleSide}
                />
            </mesh>

            <mesh 
                ref = {mesh2}
                position = {[-0.7, 0, 0]}
            >
                <torusGeometry args={[0.5, 0.2]} />
            </mesh>
        </>
    )
}

export default MyElement3D
```
### meshLambertMaterial
```javascrpt
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three"

function MyElement3D() {
    const mesh1 = useRef()
    const mesh2 = useRef()

    useEffect(() => {
        mesh2.current.material = mesh1.current.material
    }, [])

    return (
        <>
            <OrbitControls />

            <ambientLight intensity = {0.2} />

            <directionalLight position = {[0, 1, 0]} />
            <directionalLight position = {[1, 2, 8]} intensity = {0.7} />

            <mesh 
                ref = {mesh1}
                position = {[0.7, 0, 0]}
            >
                <boxGeometry />

                <meshLambertMaterial
                    color = "#d25383" 
                    wireframe = {false}
                    visible={true}
                    transparent = {true}
                    opacity = {1}
                    depthTest = {true}
                    depthWrite = {true}
                    side = {THREE.FrontSide}
                    emissive={0x666600}
                />
            </mesh>

            <mesh 
                ref = {mesh2}
                position = {[-0.7, 0, 0]}
            >
                <torusGeometry args={[0.5, 0.2]} />
            </mesh>
        </>
    )
}

export default MyElement3D
```

## meshPhongMaterial
```javascript
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three"

function MyElement3D() {
    const mesh1 = useRef()
    const mesh2 = useRef()

    useEffect(() => {
        mesh2.current.material = mesh1.current.material
    }, [])

    return (
        <>
            <OrbitControls />

            <ambientLight intensity = {0.2} />

            <directionalLight position = {[0, 1, 0]} />
            <directionalLight position = {[1, 2, 8]} intensity = {0.7} />

            <mesh 
                ref = {mesh1}
                position = {[0.7, 0, 0]}
            >
                <boxGeometry />
                <meshPhongMaterial
                    wireframe = {false}
                    visible={true}
                    transparent = {true}
                    opacity = {1}
                    depthTest = {true}
                    depthWrite = {true}
                    side = {THREE.FrontSide}

                    emissive = {0x666600}
                    color = {0xff0000} 
                    specular = {0xffff00}
                    shininess = {100}
                    flatShading = {true}
                />
            </mesh>

            <mesh 
                ref = {mesh2}
                position = {[-0.7, 0, 0]}
            >
                <torusGeometry args={[0.5, 0.2]} />
            </mesh>
        </>
    )
}

export default MyElement3D
```

## meshPhysicalMaterial  
```javascript
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useControls } from "leva";
import * as THREE from "three"

function MyElement3D() {
    const mesh1 = useRef()
    const mesh2 = useRef()

    useEffect(() => {
        mesh2.current.material = mesh1.current.material
    }, [])

    const {roughness, metalness, clearcoat, clearcoatRoughness, transmission, thickness, ior} = useControls({
        roughness: {value: 0, min: 0, max: 1, step: 0.01},
        metalness: {value: 0, min: 0, max: 1, step: 0.01},
        clearcoat: {value: 0, min: 0, max: 1, step: 0.01}, 
        clearcoatRoughness: {value: 0, min: 0, max: 1, step: 0.01},
        transmission: {value: 0, min: 0, max: 1, step: 0.01},
        thickness: {value: 0, min: 0, max: 1, step: 0.01},
        ior: {value: 1.5, min: 0, max: 2.333, step: 0.01}
    })

    return (
        <>
            <OrbitControls />

            <ambientLight intensity = {0.2} />

            <directionalLight position = {[0, 1, 0]} />
            <directionalLight position = {[1, 2, 8]} intensity = {0.7} />

            <mesh 
                ref = {mesh1}
                position = {[0.7, 0, 0]}
            >
                <torusKnotGeometry args = {[0.5, 0.15, 256, 128]} />
              
                <meshPhysicalMaterial 
                    visible={true}
                    transparent = {true}
                    opacity = {0.5}
                    depthTest = {true}
                    depthWrite = {true}
                    side = {THREE.DoubleSide}
                    emissive = {0x00000}
                    flatShading = {false}
                    roughness = {roughness}
                    metalness = {metalness}

                    color = {0xffffff} 
                    wireframe = {false}
                    clearcoat = {clearcoat}
                    clearcoatRoughness = {clearcoatRoughness}

                    transmission = {transmission}
                    thickness = {thickness}
                    ior = {ior}
                />
            </mesh>

            <mesh 
                ref = {mesh2}
                position = {[-0.7, 0, 0]}
            >
                <torusGeometry args={[0.5, 0.2]} />
            </mesh>
        </>
    )
}

export default MyElement3D
```

## meshDepthMaterial
```javascript
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useControls } from "leva";
import * as THREE from "three"

function MyElement3D() {
    const mesh1 = useRef()
    const mesh2 = useRef()

    useEffect(() => {
        mesh2.current.material = mesh1.current.material
    }, [])

  
    return (
        <>
            <OrbitControls />

            <ambientLight intensity = {0.2} />

            <directionalLight position = {[0, 1, 0]} />
            <directionalLight position = {[1, 2, 8]} intensity = {0.7} />

            <mesh 
                ref = {mesh1}
                position = {[0.7, 0, 0]}
            >
                <torusKnotGeometry args = {[0.5, 0.15, 256, 128]} />
              
                <meshDepthMaterial />
            </mesh>

            <mesh 
                ref = {mesh2}
                position = {[-0.7, 0, 0]}
            >
                <torusGeometry args={[0.5, 0.2]} />
            </mesh>
        </>
    )
}

export default MyElement3D
```
```javascript
import './App.css'
import { Canvas } from '@react-three/fiber'
import MyElement3D from './Component/MyElement3D'

function App() {
  return (
    <>
      <Canvas camera = {{near: 3.5, far: 6}} >
        <MyElement3D/>
      </Canvas>   
    </>
  )
}

export default App
```
## meshMatcapMaterial
```javascript
import { OrbitControls, useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useControls } from "leva";
import * as THREE from "three"

function MyElement3D() {
    const mesh1 = useRef()
    const mesh2 = useRef()

    useEffect(() => {
        mesh2.current.material = mesh1.current.material
    }, [])

    const matcap = useTexture("./public/images/matcap.jpg")

    return (
        <>
            <OrbitControls />

            <ambientLight intensity = {0.2} />

            <mesh 
                ref = {mesh1}
                position = {[0.7, 0, 0]}
            >
                <torusKnotGeometry args = {[0.5, 0.15, 256, 128]} />

                <meshMatcapMaterial matcap={matcap} 
                    flatShading = {true}
                />
                
            </mesh>

            <mesh 
                ref = {mesh2}
                position = {[-0.7, 0, 0]}
            >
                <torusGeometry args={[0.5, 0.2]} />
            </mesh>
        </>
    )
}

export default MyElement3D
```

## meshToonMaterial
```javascript
import { OrbitControls, useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useControls } from "leva";
import * as THREE from "three"

function MyElement3D() {
    const mesh1 = useRef()
    const mesh2 = useRef()

    useEffect(() => {
        mesh2.current.material = mesh1.current.material
    }, [])


    const texture = useTexture("././public/images/threeTone.jpg")
    texture.minFilter = THREE.NearestFilter
    texture.magFilter = THREE.NearestFilter

    return (
        <>
            <OrbitControls />

            <ambientLight intensity = {0.2} />

            <mesh 
                ref = {mesh1}
                position = {[0.7, 0, 0]}
            >
                <torusKnotGeometry args = {[0.5, 0.15, 256, 128]} />

                <meshToonMaterial gradientMap={texture} color="cyan" />
                
            </mesh>

            <mesh 
                ref = {mesh2}
                position = {[-0.7, 0, 0]}
            >
                <torusGeometry args={[0.5, 0.2]} />
            </mesh>
        </>
    )
}

export default MyElement3D
```
## MeshreflectorMaterial
```javascript
import { Box, OrbitControls, MeshReflectorMaterial} from "@react-three/drei"
import { useEffect, useRef } from "react"
import { useControls } from "leva"
import * as THREE from "three"

function MyElement3D(){

  return(

  <>
  <OrbitControls />
  <ambientLight intensitiy={0.5} />
  <directionalLight position={[0, 1, 0]}/>
  <directionalLight position={[1, 2, 8]} intensity={0.7}/>

  <mesh position={[0, -0.6, 0]} rotation= {[-Math.PI /2, 0, 0]}>
    <planeGeometry args={[10, 10]}/>
    <MeshReflectorMaterial
    blur={[300, 100]}
    resolution={2048}
    mixBlur={1}
    mixStrength={30}
    roughness={0.9}
    depthScale={.7}
    minDepthThreshold={0.5}
    maxDepthThreshold={1.4}
    color="#050505"
    metalness={0.5}
    />
  </mesh>

  <mesh position={[0, 0, 0]}>
    <boxGeometry />
    <meshStandardMaterial color="cyan"/>
  </mesh>
  </>
  )
}
export default MyElement3D
```

## meshreFractionMaterial
```javascript
import { Box, OrbitControls, MeshRefractionMaterial, CubeCamera} from "@react-three/drei"

import {RGBELoader} from 'three-stdlib'
import {useLoader} from "@react-three/fiber"


function MyElement3D(){
const texture = useLoader (RGBELoader,'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')
  return(

  <>
  <OrbitControls />
  <ambientLight intensitiy={0.2} />
  <directionalLight position={[0, 1, 0]}/>
  <directionalLight position={[1, 2, 8]} intensity={0.7}/>

  <CubeCamera resolution={1024} frames={1} envMap = {texture}>
{(texture) => (
   <mesh>
  <dodecahedronGeometry/>
  <MeshRefractionMaterial
  
  envMap={texture}
  toneMapped={false}
  bounces={2}
  aberrationStrength={0.03}
  ior={2.75}
  fresnel={1}
  color='white'
  fastChroma={true}
  />  
  </mesh>)}
</CubeCamera>
 

  </>
  )
}
export default MyElement3D
```

## MeshTransmissionMaterial
```javascript
import { Box, OrbitControls, MeshTransmissionMaterial, CubeCamera} from "@react-three/drei"
import {useControls} from "leva"
import {RGBELoader} from 'three-stdlib'
import {useLoader} from "@react-three/fiber"
import { clearcoat, ior } from "three/examples/jsm/nodes/core/PropertyNode.js"
import * as THREE from "three"

function MyElement3D(){

  const config = useControls({
    transmissionSampler: false,
    backside: false,
    samples: {value: 10, min: 1, max: 32, step: 1},
    resolution: {value: 2048, min : 256, max: 2048, step: 256},
    transmission: {value:1, min: 0, max: 1},
    roughness: {value:0.0, min: 0, max: 1, step: 0.01},
    thickness: {value: 3.5, min:0, max: 10, step: 0.01},
    ior: {value: 1.5, min: 1, max: 5, step: 0.01},
    chromaticAberration: {value: 0.06, min: 0, max: 0.1},
    anisotropy: {value: 0.1, min: 0, max: 1, step: 0.01},
    distortion: {value: 0.0, min: 0, max: 1, step: 0.01},
    distortionScale: {value: 0.3, min: 0.01, max: 1, step: 0.01},
    temporalDistortion: {value: 0.5, min: 0, max: 1, step: 0.01},
    clearcoat: {value: 0, min: 0, max: 1},
    attenuationDistance: {value: 0.5, min: 0, max: 10, step: 0.01},
    attenuationColor: "#ffffff",
    color: "#c9ffal",
    bg: "#839681",

  })
  return(

  <>
  <OrbitControls />
  <ambientLight intensitiy={0.2} />
  <directionalLight position={[0, 1, 0]}/>
  <directionalLight position={[1, 2, 8]} intensity={0.7}/>

<mesh>
  <sphereGeometry args={[1, 128, 128]} />
  <MeshTransmissionMaterial
  {...config} background={new THREE.Color(config.bg)}/>
</mesh>

<mesh scale={0.3}>
  <torusGeometry args={[0.5, 0.2, 32]}/>
  <meshStandardMaterial />
</mesh>
 

  </>
  )
}
export default MyElement3D
```

## MeshWobbleMaterial
```javascript
import { MeshWobbleMaterial, OrbitControls} from "@react-three/drei"


function MyElement3D(){

  
  
  return(

  <>
  <OrbitControls />
  <ambientLight intensitiy={0.2} />
  <directionalLight position={[0, 1, 0]}/>
  <directionalLight position={[1, 2, 8]} intensity={0.7}/>

<mesh>
  <torusGeometry/>
  <MeshWobbleMaterial factor={1} speed={100} />
</mesh>
 

  </>
  )
}
export default MyElement3D
```

## meshDistortMaterial
```javascript
import { MeshDistortMaterial, OrbitControls} from "@react-three/drei"


function MyElement3D(){

  
  
  return(

  <>
  <OrbitControls />
  <ambientLight intensitiy={0.2} />
  <directionalLight position={[0, 1, 0]}/>
  <directionalLight position={[1, 2, 8]} intensity={0.7}/>

<mesh>
  <torusGeometry/>
  <MeshDistortMaterial distort={0.23} speed={1} />
</mesh>
 

  </>
  )
}
export default MyElement3D
```

## MeshDiscardMaterial
```javascript
import { MeshDiscardMaterial, OrbitControls} from "@react-three/drei"


function MyElement3D(){

  
  
  return(

  <>
  <OrbitControls />
  <ambientLight intensitiy={0.2} />
  <directionalLight position={[0, 1, 0]}/>
  <directionalLight position={[1, 2, 8]} intensity={0.7}/>

<mesh>
  <torusGeometry/>
  <MeshDiscardMaterial/>
</mesh>
 

  </>
  )
}
export default MyElement3D
```

## shadermaterial
```
import { MeshDiscardMaterial, OrbitControls, shaderMaterial} from "@react-three/drei"
import * as THREE from "three"
import {extend} from "@react-three/fiber"

const SimpleMaterial = new shaderMaterial({
uColor:new THREE.Color(1,0,0)
}, 
`
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position=projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,`
uniform vec3 uColor;
varying vec2 vUv;
void main(){
  gl_FragColor = vec4(vUv.y * uColor, 1.0)
}`


)
extend({SimpleMaterial})
function MyElement3D(){

  
  
  return(

  <>
  <OrbitControls />
  <ambientLight intensitiy={0.2} />
  <directionalLight position={[0, 1, 0]}/>
  <directionalLight position={[1, 2, 8]} intensity={0.7}/>

<mesh>
  <boxGeometry/>
  <simpleMaterial uColor={"green"}/>
</mesh>
 

  </>
  )
}
export default MyElement3D
```
