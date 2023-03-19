import style from "./home.module.css"

const Home = ({text}) => {
  return (
    <h1 className={style.titulo}>{text}</h1>
  )
}

export default Home