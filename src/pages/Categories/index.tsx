import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: action, isLoading: isLoadingAction } = useGetActionGamesQuery()
  const { data: sports, isLoading: isLoadingSports } = useGetSportsGamesQuery()
  const { data: fight, isLoading: isLoadingFight } = useGetFightGamesQuery()
  const { data: rpg, isLoading: isLoadingRPG } = useGetRpgGamesQuery()
  const { data: simulation, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()

  return (
    <>
      <ProductsList
        games={action}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sports}
        title="Esportes"
        background="grey"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={fight}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={rpg}
        title="RPG"
        background="grey"
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ProductsList
        games={simulation}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
