import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';

const Details = (props) => {
  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = () => {
    const {state} = props.location;
    props.getPokemonsDetail({pokemon: state.pokemon});
  };

  if (props.detailPokemons.loading) {
    return (
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="#9E9E9E" />
        <Text>Cargando...</Text>
      </View>
    );
  }
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={styles.text}>Datos del Pokemon</Text>
      <Image
        style={styles.image}
        source={{
          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${props.detailPokemons.pokemonsDetail.name}.png`,
        }}
      />
      <Text style={styles.text}>
        Name: {props.detailPokemons.pokemonsDetail.name}
      </Text>
      <Text style={styles.text}>
        Height: {props.detailPokemons.pokemonsDetail.height}
      </Text>
      <Text style={styles.text}>
        Weight: {props.detailPokemons.pokemonsDetail.weight}
      </Text>
      <Text style={styles.text}>
        Ability:{' '}
        {props.detailPokemons.pokemonsDetail.abilities[0] &&
          props.detailPokemons.pokemonsDetail.abilities[0].ability.name}
      </Text>
      <Text style={styles.text}>
        Type:{' '}
        {props.detailPokemons.pokemonsDetail.abilities[0] &&
          props.detailPokemons.pokemonsDetail.types[0].type.name}
      </Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 22,
    marginBottom: 15,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
