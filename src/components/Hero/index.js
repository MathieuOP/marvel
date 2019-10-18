import React, { useEffect } from 'react';
import Loading from 'components/Loading';
import './Hero.scss';

const Hero = ({ getHeroById, heroId, hero, loadedHero, removeHero }) => {
    useEffect(() => {
        getHeroById(heroId)

        return () => {
            removeHero();
        }
    }, [getHeroById, heroId, removeHero]);

    return (
        loadedHero ? (
            <div className="hero">
                <h1 className="hero__title">{hero.name}</h1>
                <div className="hero__content">
                    <div className="hero__image">
                        <img className="hero__image--img" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
                    </div>

                    <div className="hero__description">
                        {
                            
                            hero.description.trim() === '' ? (
                                <p className="hero__description--p">Aucun description disponible</p>
                            ) : (
                                hero.description
                            )
                        }
                    </div>
                </div>
            </div>
        ) : (
            <Loading />
        )
    )
}

export default Hero;