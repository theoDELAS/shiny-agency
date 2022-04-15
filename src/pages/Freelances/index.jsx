import Card from "../../components/Card";

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

function Freelances() {
    return (
        <div>
            <h1>Freelances 👨‍🎓</h1>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
        </div>
    );
}

export default Freelances;
