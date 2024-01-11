import Tag from '../Tag'
import { Card, Description, Title } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Title>Titulo do Jogo</Title>
    <Tag> Categoria</Tag>
    <Tag>Windows</Tag>
    <Description>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
      ipsum, omnis voluptates soluta pariatur, facere cupiditate minus qui quos
      ea voluptatem autem adipisci iure! Iure neque nisi iste sapiente
      exercitationem!
    </Description>
  </Card>
)
export default Product
