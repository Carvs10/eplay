import { Container, FooterSection, Link, Links, SectionTitle } from './styles'
const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link title="Clique aqui para Jogos de RPG" to="/categories#rpg">
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para Jogos de Ação"
              to="/categories#action"
            >
              Ação
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para Jogos de Esportes"
              to="/categories#sports"
            >
              Esportes
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para Jogos de Simulação"
              to="/categories#simulation"
            >
              Simulação
            </Link>
          </li>
          <li>
            <Link title="Clique aqui para Jogos de Luta" to="/categories#fight">
              Luta
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link title="Clique aqui para a seção de Promoções" to="/#on-sale">
              Promoções
            </Link>
          </li>
          <li>
            <Link title="Clique aqui para Jogos a lançar" to="/#coming-soon">
              Em breve
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os diretos reservados</p>
    </div>
  </Container>
)
export default Footer
