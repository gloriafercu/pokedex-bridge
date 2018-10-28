import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Details extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  };


  // paquito() {
  //   console.log(this.props);
  //   const { id } = this.props.match.params;
  //   // const { match } = this.props;
  //   console.log({ id });
  //   // console.log({ match });
  //   const { pokemons, match } = this.props;

  //   console.log('details', { pokemons, match })

  //   const paco = pokemons.find(item => item.id == id);

  //   console.log(paco[0])
  // }

  render() {
    const poke = this.props.pokemons[0];

    console.log(poke)
    if (poke == undefined) {
      return (
        <div className="details__outside">
          <div className="details__container error-msg">
            <div className="details-not-found--msg">No podemos mostrale ahora mismo la información que solicita. Por favor, regrese al listado y seleccione otro teléfono.</div>
          </div>
        </div>
      )
    }
    return (
      <section className="pokemon__details__container">


        <div className="modal__background"></div>
        <div className="modal__card">
          <Link className="link__button--close" to='/'>
            <div className="button--close">
              <span className="btn-text">Close</span>
            </div>
          </Link>

          <p>{poke.name}</p>

          {// <div className="pokemon__details" >
            //   <div className="cover">
            //     <img className="front_default" src={item.sprites.front_default} alt={item.name} />
            //     <span className="details__id">#{item.id.toLocaleString('en-US', { minimumIntegerDigits: 2 })}</span>
            //   </div>
            // </div>
          }
        </div>
      </section>

    );
  }
}