import { Container, Header, ListContainer, Card } from "./styles";

import arrow from '../../assets/images/icons/arrow.svg'
import trash from '../../assets/images/icons/trash.svg'
import edit from '../../assets/images/icons/edit.svg'

export default function ContactsList(){
    return (
        <Container>
            <Header>
                <strong> 3 Contatos </strong>
                <a href="/">Novo Contato</a>
            </Header>

            <ListContainer>
                <header>
                    <button type="button">
                        <span>Nome</span>
                        <img src={arrow} alt="Arrow" />
                    </button>
                </header>

                <Card>
                    <div className="info">
                        <div className="contact-name">
                            <strong>Yãry Castilho</strong>
                            <small>instagram</small>
                        </div>
                        <span>andradeya4@gmail.com</span>
                        <span>(19) 99999-9999</span>
                    </div>

                    <div className="actions">
                        <a href="/">
                          <img src={edit} alt="Edit" />
                        </a>
                        <button type="button">
                            <img src={trash} alt="Delete" />
                        </button>
                    </div>
                </Card>
                                <Card>
                    <div className="info">
                        <div className="contact-name">
                            <strong>Yãry Castilho</strong>
                            <small>instagram</small>
                        </div>
                        <span>andradeya4@gmail.com</span>
                        <span>(19) 99999-9999</span>
                    </div>

                    <div className="actions">
                        <a href="/">
                          <img src={edit} alt="Edit" />
                        </a>
                        <button type="button">
                            <img src={trash} alt="Delete" />
                        </button>
                    </div>
                </Card>
                                <Card>
                    <div className="info">
                        <div className="contact-name">
                            <strong>Yãry Castilho</strong>
                            <small>instagram</small>
                        </div>
                        <span>andradeya4@gmail.com</span>
                        <span>(19) 99999-9999</span>
                    </div>

                    <div className="actions">
                        <a href="/">
                          <img src={edit} alt="Edit" />
                        </a>
                        <button type="button">
                            <img src={trash} alt="Delete" />
                        </button>
                    </div>
                </Card>
            </ListContainer>
        </Container>
    )
}
