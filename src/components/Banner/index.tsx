import { BannerTitle, Image, Prices } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <BannerTitle>
        Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5
      </BannerTitle>
      <Prices>
        De <span>R$ 250,00</span> <br />
        por apenas R$ 99,90
      </Prices>
    </div>
  </Image>
)

export default Banner
