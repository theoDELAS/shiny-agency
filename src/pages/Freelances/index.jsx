import { useState, useEffect } from "react";
import Card from "../../components/Card";
import styled from "styled-components";
import { Loader } from "../../utils/styles/Atoms";

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
    const [freelanceProfils, setFreelanceProfils] = useState([]);
    const [isDataLoading, setDataLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setDataLoading(true);
        async function fetchFreelances() {
            try {
                const response = await fetch(
                    `http://localhost:8000/freelances`
                );
                const { freelancersList } = await response.json();
                setFreelanceProfils(freelancersList);
            } catch (error) {
                console.log(error);
                setError(true);
            } finally {
                setDataLoading(false);
            }
        }
        fetchFreelances();
    }, []);

    return (
        <div>
            <HeaderText>
                <h1 className="title">Trouvez votre prestataire</h1>
                <p className="subtitle">
                    Chez Shiny nous réunissons les meilleurs profils pour vous.
                </p>
            </HeaderText>
            <CardsContainer>
                {isDataLoading ? (
                    <Loader />
                ) : (
                    freelanceProfils.map((profile, index) => (
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.jobTitle}
                            picture={profile.picture}
                            title={profile.name}
                        />
                    ))
                )}
            </CardsContainer>
        </div>
    );
}

export default Freelances;
