import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import GetMovies from './ObtenerMovies'

export default class Cartelera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
        };
    }

    render() {
    return(
        <ImageBackground style={ styles.container } source={ require('../../assets/ticket.jpg') }>
            <View >
                <View >
                    <Text style={ styles.header }>CARTELERA</Text>
                </View>

                <View style={ styles.menuContainer }>
                    <GetMovies itemImage={ require('../../assets/ticket.jpg') } />
                </View>

                {/* <Link to="/test">
                    <Text>Topics</Text>
                </Link> */}

            </View>
        </ImageBackground>
    )}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    top: {
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: '#fff',
        marginTop: '15%',
        marginLeft:'5%',
        fontSize: 28,
    },
    menuContainer: {
        height: '40%',
    }
})