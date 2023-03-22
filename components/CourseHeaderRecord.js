import React from 'react'

export default function CourseHeaderRecord({details}) {
// sentences.splice(sentences.length -1, 1);
  
  return (
    <div className="bg-gray-200 py-20 px-10  flex-col  item-center flex">
      <h1 className="text-2xl text-center text-gray-600 font-bold">
        {details.smallTitle} </h1>
        <span className="block text-gray-900 text-6xl text-center font-bold mb-10 ">{details.bigTitle}</span>
     <p className="mx-auto  max-w-lg text-gray-800 text-lg">{details.description}</p>
    <a href="#Pricing" className=" max-w-lg mx-auto   text-center rounded-md bg-yellow-300 mt-8 py-3 px-4 text-gray-800 text-xl hover:bg-yellow-50">{details.buttonText}</a>
    </div>
  )
}
