import Card from "../../components/Card";
import styled from "styled-components";

const freelanceProfiles = [
    {
        name: "Jane Doe",
        jobTitle: "Devops",
        picture: "https://picsum.photos/200/301",
    },
    {
        name: "John Doe",
        jobTitle: "Developpeur frontend",
        picture: "https://picsum.photos/200/302",
    },
    {
        name: "Jeanne Biche",
        jobTitle: "Développeuse Fullstack",
        picture: "https://picsum.photos/200/303",
    },
];

const HeaderText = styled.div`
    text-align: center;
    margin-bottom: 4rem;
    & > h1.title {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
    }

    & > p.subtitle {
        color: #8186a0;
    }
`;

const CardsContainer = styled.div`
    margin: auto;
    width: 60%;
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`;

function Freelances() {
    return (
        <div>
            <HeaderText>
                <h1 className="title">Trouvez votre prestataire</h1>
                <p className="subtitle">
                    Chez Shiny nous réunissons les meilleurs profils pour vous.
                </p>
            </HeaderText>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </div>
    );
}

export default Freelances;
