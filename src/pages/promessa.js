import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
import { Container } from "react-bootstrap";
export default function Promessa() {
    const [pao, setpao] = useState("")

    setTimeout(() => {
        document.title = "promessa é divida";
        setpao("é uma divida");
        
    }, 2000);
    
    return <>
        <Menu />
        <Container>
            Promessa(pao==="" ? "<caregando>" : pao)
        </Container>
        <Footer />
    </>
}