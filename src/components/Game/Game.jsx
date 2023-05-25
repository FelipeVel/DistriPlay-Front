//Componente que muestra la información de un juego
//Contiene imagen, nombre, precio y botón de compra

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Game = ({ game, addToCart }) => {
    const { id, name, price, image } = game;
    const addGame = () => {
        addToCart(game);
    };

    return (
        <div className='col-md-4'>
            <div className='card mb-4 shadow-sm'>
                <img
                    className='card-img-top'
                    src={image}
                    alt='Card image cap'
                />
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>${price}</p>
                    <button
                        type='button'
                        className='btn btn-primary'
                        onClick={addGame}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </div>
            </div>
        </div>
    );
}

Game.propTypes = {
    game: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired
};

export default Game;