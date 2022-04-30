import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
id:string
name:string
socialId: string
link: string
}

const Member: React.FC<Props> = ({id, name , socialId,link}) => (
    <div>
        <Image loading="lazy" src={`/margelo_faces_${id}.svg`}
         alt='lol'
          width={1366}
           height={1555}/>
           <div className="text-2xl xl:text-3xl">{name}</div>
           <div className="text-xl">
               <Link href={link}>
                   <a className="hover:text-red-500" target='_blank'>{socialId}</a>
               </Link>
           </div>
    </div>
)

export default Member