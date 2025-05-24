
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";

const EducationMarker2 = ({ position, label }) => {
   const sscRef = useRef();
     const { scene, animations } = useGLTF("/bird.glb"); // Use a different model for SSC
     const { actions } = useAnimations(animations, sscRef);
   
     useEffect(() => {
        if (actions["Armature|ArmatureAction"]) {
            actions["Armature|ArmatureAction"].play();
          }
     }, [actions]);
   
     return (
       <group ref={sscRef} position={position} scale={0.7} >
         <primitive object={scene} />
         <Html position={[0, 1, 0]}>
           <div style={{ color: "white", cursor: "pointer" }}>{label}</div>
         </Html>
       </group>
     );
};

export default EducationMarker2;
