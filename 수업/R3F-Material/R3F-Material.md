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
