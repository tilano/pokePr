import React, {Component} from 'react';
import {
  View,
  Alert,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import Firebase from './../../database/firebase';
import {stylesPokemon} from './styles/StylePokemon';

class Login extends Component {
  state = {
    searchfeild: '',
  };
  componentDidMount() {
    this.props.getPokemons();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.loading !== prevProps.loading) {
      return true;
    }
  }

  render() {
    if (this.props.listPokemons.loading) {
      return (
        <View style={stylesPokemon.viewLoading}>
          <ActivityIndicator size="large" color="#9E9E9E" />
          <Text>Cargando...</Text>
        </View>
      );
    } else {
      return (
        <View>
          <View style={stylesPokemon.searchCont} />
          <ScrollView>
            <View style={stylesPokemon.container}>
              {this.props.listPokemons.pokemons.results.map(
                (pokemon, index) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      key={index}
                      style={stylesPokemon.card}
                      onPress={() =>
                        this.props.history.push('/Details', {
                          pokemon: pokemon.name,
                        })
                      }>
                      <Image
                        style={stylesPokemon.imagePoke}
                        source={{
                          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
                        }}
                      />
                      <Text style={stylesPokemon.textName}>{pokemon.name}</Text>
                    </TouchableOpacity>
                  );
                },
              )}
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

export default Login;
