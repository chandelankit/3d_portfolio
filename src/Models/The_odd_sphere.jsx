/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Polygonal Miniatures (https://sketchfab.com/Polygonal_Miniatures)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/the-odd-sphere-d1e0bd2956f448f683951a4af1e7258e
Title: The odd Sphere
*/

import { useRef,useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame,useThree } from "@react-three/fiber";
import {a} from '@react-spring/three'

import the_odd_sphereScene from '../assets/3d/the_odd_sphere.glb'

const the_odd_sphere=(props)=> {
  const the_odd_sphereRef = useRef();
  const { nodes,scene, materials } = useGLTF(the_odd_sphereScene);
  return (
    <a.group ref={the_odd_sphereRef} {...props}>
      <mesh
      castShadow
      receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.defaultMat}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </a.group>
  );
}

export default the_odd_sphere;
