import Head from 'next/head'
import BirthdayCard from '../components/BirthdayCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>Happy Birthday 🎉</title>
      </Head>
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 to-purple-300">
        <BirthdayCard />
      </main>
    </>
  )
}
