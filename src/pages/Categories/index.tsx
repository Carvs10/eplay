import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: action } = useGetActionGamesQuery()
  const { data: sports } = useGetSportsGamesQuery()
  const { data: fight } = useGetFightGamesQuery()
  const { data: rpg } = useGetRpgGamesQuery()
  const { data: simulation } = useGetSimulationGamesQuery()

  if (action && sports && fight && rpg && simulation) {
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

  return <h4>Carregando</h4>
}

export default Categories
