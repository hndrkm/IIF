import Head from 'next/head'
import Image from 'next/image'
import Events from '../components/Page/Events'
import Herocarrusel from '../components/Page/Herocarrusel'
import Publications from '../components/Page/Publications'
export default function Home() {
  return (
    <div >
      <Herocarrusel />

      <div className="flex my-10">
        <Publications />
        <div className="border-2"></div>
        <Events />
      </div>

    </div>
  )
}
