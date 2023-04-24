import React from 'react';
import { Card } from 'primereact/card';

const ExperienceCard = ({ title, position, location, duration, sujet, technologie }) => {
    return (
        <Card title={title} subTitle={position} footer={location} className="md:w-25rem">
            <div>
                <div><b>Sujet : </b> {sujet}</div>
                <div><b>Technologie : </b>{technologie}</div>
                <div><b>Date : </b>{duration}</div>
            </div>
        </Card>
    );
};

const Experiences = () => {
    // Données pour chaque expérience
    const experienceData = [
        {
            title: 'Stage de fin d\'année 2022',
            position: 'Stagiaire',
            duration: 'August 2022 - septembre 2022',
            location: 'AT THE KHENIFRA PROVINCIAL HOSPITAL CENTER',
            technologie: 'Python, Tikinter, GitHub, SQL-lite',
            sujet: 'Mise en œuvre d\'une application Desktop Python pour la gestion des stagaires',
        },
    ];

    return (
        <section className="section">
            {experienceData.map((experience, index) => (
                <ExperienceCard
                    key={index}
                    title={experience.title}
                    position={experience.position}
                    duration={experience.duration}
                    location={experience.location}
                    sujet={experience.sujet}
                    technologie={experience.technologie}
                />
            ))}
        </section>
    );
};

export default Experiences;
