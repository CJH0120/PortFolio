import Image from "next/image"
import Load from "@Public/Img/Loading.gif"
const LoadingPg = () => {
   return (
      <div
         style={{
            position: "absolute",
            zIndex: "99",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            opacity: 0.3,
         }}
      >
         <Image src={Load} width={100} height={100} style={{}} />
      </div>
   )
}

export default LoadingPg
