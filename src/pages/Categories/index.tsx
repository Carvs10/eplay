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
        <ProductsList
          games={action}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={sports}
          title="Esportes"
          background="grey"
          id="sports"
        />
        <ProductsList
          games={fight}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductsList games={rpg} title="RPG" background="grey" id="rpg" />
        <ProductsList
          games={simulation}
          title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Categories
