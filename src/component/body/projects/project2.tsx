import react, { useEffect, useState } from 'react'
import * as THREE from 'three'

export default function Project2(){
    const [main, setMain] = useState<Element|null>()

    // init once
    useEffect(()=>{
        setMain(document.querySelector('.project2-main'))
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        if (main != null){
            main.appendChild(renderer.domElement)
        }

        renderer.setSize(window.innerWidth, window.innerHeight);
        
        // add light
        scene.add(new THREE.AmbientLight(0x123123,1));
        let light = new THREE.PointLight(0xffffff,1);
        camera.add(light)

        const geometry = new THREE.ConeGeometry();
        const material = new THREE.MeshPhongMaterial();
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);


        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        return ()=>{
            // remove appended child to prevent element added many times
            if (main != null){
                main?.removeChild(renderer.domElement)
            }
        }
    },[main])

    return (
        <div className="project2-main">

        </div>
    )
}