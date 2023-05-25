//Pagina de home
//Se encarga de mostrar el header y la lista de juegos

import React from 'react';
import PropTypes from 'prop-types';
//import Game from '../components/Game/Game';
import Header from '../../components/Header/Header';
import './Home.scss';

const Home = (props) => {
    return (
        <div className='Home'>
            <Header />
            <div className='GamesList'>
                <div className='GamesList-Container'>
                    {/* {props.game.games.map((game) => (
                        <Game key={game.id} game={game} />
                    ))} */}
                    <div className='GamesList-Card'>
                        Hola soy un juego
                    </div>
                    <div className='GamesList-Card'>
                        Hola soy un juego
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;