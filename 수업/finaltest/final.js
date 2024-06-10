import * as THREE from '../build/three.module.js';
class App{
    constructor(){
        const triangleVertices = new Float32Array([
            0, 1, 0, // Top vertex
            -0.866, -0.5, 0, // Bottom left vertex
            0.866, -0.5, 0 // Bottom right vertex
            ]);
            const triangleColors = new Float32Array([
            1, 0, 0, // Red
            0, 1, 0, // Green
            0, 0, 1 // Blue
            ]);
            const triangleGeometry = new THREE.BufferGeometry();
            triangleGeometry.setAttribute('position', new THREE.BufferAttribute(triangleVertices, 3));
            triangleGeometry.setAttribute('color', new THREE.BufferAttribute(triangleColors, 3));

            const squareVertices = new Float32Array([
            -0.5, 0.5, 0, // Top left vertex (first triangle)
            0.5, 0.5, 0, // Top right vertex (first triangle)
            -0.5, -0.5, 0, // Bottom left vertex (first triangle)
            
            0.5, 0.5, 0, // Top right vertex (second triangle)
            0.5, -0.5, 0, // Bottom right vertex (second triangle)
            -0.5, -0.5, 0 // Bottom left vertex (second triangle)
            ]);
            const squareColors = new Float32Array([
            1, 0, 0, // Red (first triangle)
            0, 1, 0, // Green (first triangle)
            0, 0, 1, // Blue (first triangle)
            
            0, 1, 0, // Green (second triangle)
            1, 1, 0, // Yellow (second triangle)
            0, 0, 1 // Blue (second triangle)
            ]);
            // Create square geometry
            const squareGeometry = new THREE.BufferGeometry();
            squareGeometry.setAttribute('position', new THREE.BufferAttribute(squareVertices, 3));
            squareGeometry.setAttribute('color', new THREE.BufferAttribute(squareColors, 3));


    }

}
window.onload=function(){
    new App();}