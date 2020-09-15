import React, {useState, useEffect} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {stylesDetailP} from './styles/StyleDetail';

const Details = props => {
  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = () => {
    const {state} = props.location;
    props.getPokemonsDetail({pokemon: state.pokemon});
  };

  if (props.detailPokemons.loading) {
    return (
      <View style={stylesDetailP.viewLoading}>
        <ActivityIndicator size="large" color="#9E9E9E" />
        <Text>Cargando...</Text>
      </View>
    );
  }
  return (
    <View style={stylesDetailP.content}>
      <Text style={stylesDetailP.text}>Datos del Pokemon</Text>
      <Image
        style={stylesDetailP.image}
        source={{
          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${props.detailPokemons.pokemonsDetail.name}.png`,
        }}
      />
      <Text style={stylesDetailP.text}>
        Name: {props.detailPokemons.pokemonsDetail.name}
      </Text>
      <Text style={stylesDetailP.text}>
        Height: {props.detailPokemons.pokemonsDetail.height}
      </Text>
      <Text style={stylesDetailP.text}>
        Weight: {props.detailPokemons.pokemonsDetail.weight}
      </Text>
      <Text style={stylesDetailP.text}>
        Ability:{' '}
        {props.detailPokemons.pokemonsDetail.abilities[0] &&
          props.detailPokemons.pokemonsDetail.abilities[0].ability.name}
      </Text>
      <Text style={stylesDetailP.text}>
        Type:{' '}
        {props.detailPokemons.pokemonsDetail.abilities[0] &&
          props.detailPokemons.pokemonsDetail.types[0].type.name}
      </Text>
    </View>
  );
};

export default Details;
