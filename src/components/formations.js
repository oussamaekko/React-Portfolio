import React from "react";
import { Card } from "react-bootstrap";

function Formations() {
    const formations = [
        {
            diplome: "COMPUTER ENGINEERING AND NETWORKS STUDENT",
            etablissement: "EMSI MARRAKECH ",
            annees: "2021-PRESENT",
        },
        {
            diplome: "UNIVERSITY TECHNOLOGY DIPLOMA",
            etablissement: "EST KHENIFRA",
            annees: "2019-2021",
        },
        {
            diplome: "BAC Sciences Physiques et Chimie",
            etablissement: " Lycée Tarik",
            annees: "2019",
        },
    ];

    return (
        <section className="section">
            {formations.map((formation) => (
                <Card key={formation.diplome} className="mb-3">
                    <Card.Body>
                        <Card.Title>{formation.diplome}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {formation.etablissement}
                        </Card.Subtitle>
                        <Card.Text>{formation.annees}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
}

export default Formations;
