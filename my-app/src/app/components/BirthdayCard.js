import { useState } from 'react'

export default function BirthdayCard() {
  const [message, setMessage] = useState('🎉 Happy Birthday Sankalpa! 🎉')

  return (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center max-w-md">
      <h1 className="text-3xl font-bold text-pink-700 mb-4">{message}</h1>
      <p className="text-gray-700 mb-6">Wishing you joy, health & success 🎂✨</p>
      <button
        onClick={() => setMessage('🎁 Have an Amazing Year Ahead! 🎁')}
        className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-md hover:scale-105 transition-transform"
      >
        Click Me 🎈
      </button>
    </div>
  )
}
