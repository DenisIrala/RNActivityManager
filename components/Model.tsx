import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/native'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane008: THREE.Mesh
    Plane008_1: THREE.Mesh
    Plane008_2: THREE.Mesh
  }
  materials: {
    Clock: THREE.MeshStandardMaterial
    Silver: THREE.MeshStandardMaterial
    Texture: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(require('../assets/models/Model.glb')) as GLTFResult
  return (
    <group {...props} dispose={null} position={[0, -2, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials.Clock}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008_1.geometry}
        material={materials.Silver}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008_2.geometry}
        material={materials.Texture}
      />
    </group>
  )
}

useGLTF.preload(require('../assets/models/Model.glb'))
