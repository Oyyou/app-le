import React, { Component } from 'react'
import './hall-of-fame.scss';

class HallOfFame extends Component {

    render() {

        const data = [
            {
                src: 'Hungry for Apples.jpeg',
                text: 'A newcomer to the apple scene made his debut in the Rick and Morty episode "M. Night Shaym-Aliens!". Since then, this lil apple has rosé to shinedom',
                alt: 'This deserves an Appley',
            },            
            {
                src: 'Joeys Apple.jpg',
                text: 'Perhaps the hardest to spot, but definitely easiest to hear! Joey\'s apple had a hard time recovering after the role of voice box put him in an immediate typecast. Poor apple',
                alt: 'The one with the apple',
            },            
            {
                src: 'Snow White Apple.jpg',
                text: 'Despite his villainous persona in the movie "Snow White and the Seven Dwarfs", this apple could not be any sweeter. During the production, he looked after his co-star "Adriana Caselotti" who played Snow White',
                alt: '',
            },
        ]

        return(
            <>
                <h1 className="header">Hall of Fame</h1>
                <div className="images">
                    {data.map((c, i) => {return (
                    <div key={i} className="image">
                        <img className="image-value" src={require(`../../content/hall-of-fame/${c.src}`)} alt={c.alt}></img>
                        <p className="image-description">{c.text}</p>
                    </div>
                    )
                    })}
                </div>
            </>
        );
    }
};

export default HallOfFame;