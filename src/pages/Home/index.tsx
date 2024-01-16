import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useEffect, useState } from 'react'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}
export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promotions, setPromos] = useState<Game[]>([])
  const [comingSoon, setComingSoon] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromos(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setComingSoon(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={promotions} title="Promoções" background="grey" />
      <ProductsList games={comingSoon} title="Em breve" background="black" />
    </>
  )
}

export default Home
