import React,{useRef,usseState} from 'react'
import Card from './card'


function foreground() {
   const ref = useRef(null);

  const data =[
    {
      desc:"this is the first tag",
      fileSize : "9mb",
      close:false,
      tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}

    },
    {
      desc:"this is the Second tag",
      fileSize : "9mb",
      close:false,
      tag:{isOpen:true,tagTitle:"Download Now",tagColor:"blue"}

    },
    {
      desc:"this is the Third tag",
      fileSize : "9mb",
      close:false,
      tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}

    }
  ];

  return (
    <div ref={ref}  className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 '>
      {
        data.map((item,index)=>(
          <Card data={item} reference={ref}  />
        ))
      }

      </div>
  );
}

export default foreground