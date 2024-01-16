import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starwars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import { Game } from '../Home'

const promos: Game[] = []
const soon: Game[] = []

const Categories = () => (
  <>
    <ProductsList games={promos} title="RPG" background="grey" />
    <ProductsList games={soon} title="Ação" background="black" />
    <ProductsList games={promos} title="Aventura" background="grey" />
    <ProductsList games={soon} title="FPS" background="black" />
  </>
)

export default Categories
