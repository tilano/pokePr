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
    } else {
      return (
        <View>
          <View style={styles.searchCont} />
          <ScrollView>
            <View style={styles.container}>
              {this.props.listPokemons.pokemons.results.map(
                (pokemon, index) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      key={index}
                      style={styles.card}
                      onPress={() =>
                        this.props.history.push('/Details', {
                          pokemon: pokemon.name,
                        })
                      }>
                      <Image
                        style={{width: 150, height: 150}}
                        source={{
                          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
                        }}
                      />
                      <Text style={styles.textName}>{pokemon.name}</Text>
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
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 30,
  },
  textName: {
    fontSize: 18,
    color: 'black',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: 'blue',
    borderWidth: 2,
  },
  searchCont: {
    position: 'absolute',
    marginBottom: 70,
    left: '20%',
    zIndex: 1,
    marginTop: 10,
  },
  searchfeild: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    width: 250,
    borderRadius: 50,
  },
});
export default Login;
