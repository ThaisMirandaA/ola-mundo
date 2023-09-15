import styles from "./SobreMim.module.css"
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"

const SobreMim = () => {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo={'Sobre Mim'}
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Thaís!
            </h3>

            <img
                className={styles.fotoSobreMim}
                src={fotoSobreMim}
                alt="Foto Thaís sorrindo"
            />
            <p className={styles.paragrafo}>
                Sou estudante de programação na Alura e estou feliz em te ver por aqui!
            </p>

            <p className={styles.paragrafo}>
                Sou farmacêutica, formada na Universidade Federal de Ouro Preto. Logo após me formar, comecei a trabalhar na indústria farmacêutica, onde fiquei por 4 anos.   
            </p>

            <p className={styles.paragrafo}>
                Minha história com programação começou vendo meu esposo programar, eu queria entender o que estava se passando detrás daquelas letrinhas.
                Ele começou a me explicar e eu me inscrevi em um Bootcamp de JavaScript, gostei bastante, e como não estava satisfeita na área que atuava, decidi que ficaria o restante do ano trabalhando na indústria farmacêutica e sairia em dezembro para me dedicar aos estudos e realizar minha transição de carreira.  
            </p>

            <p className={styles.paragrafo}>
                Assim fiz, saí do meu emprego ao final de 2022 e aqui estou hoje como estudante da Alura!
            </p>

            <p className={styles.paragrafo}>
                Pretendo continuar estudando bastante para que possa conquistar minha sonhada vaga como dev. 
            </p>

            <p className={styles.paragrafo}>
                Estou muito feliz com tudo que estou aprendendo e muito empolgada para continuar essa jornada!
            </p>
        </PostModelo >

    )
}

export default SobreMim; 