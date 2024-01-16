import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'

import { Game } from '../Home'

const Categories = () => {
  const [action, setAction] = useState<Game[]>([])
  const [sports, setSports] = useState<Game[]>([])
  const [simulation, setSimulation] = useState<Game[]>([])
  const [fight, setFight] = useState<Game[]>([])
  const [rpg, setRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setAction(res))
    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setSports(res))
    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setSimulation(res))
    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setFight(res))
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setRpg(res))
  }, [])

  return (
    <>
      <ProductsList games={action} title="Ação" background="black" />
      <ProductsList games={sports} title="Esportes" background="grey" />
      <ProductsList games={fight} title="Luta" background="black" />
      <ProductsList games={rpg} title="RPG" background="grey" />
      <ProductsList games={simulation} title="Simulação" background="black" />
    </>
  )
}

export default Categories
