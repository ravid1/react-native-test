import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FacebookLogin from "./FacebookLogin";
import GoogleLogIn from "./GoogleLogIn";

type Props = {};
export default class App extends Component<Props> {

    constructor(){
        super();

        this.state = {
            user: 'Stranger',
            picture: null
        }
    }

    loggedInUser = (user,picture)=> {
        this.setState({
            user: user,
            picture: picture
        });
    }

    render() {
        const user = this.state.user;

        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>Welcome {this.state.user}!</Text>
                    <View style={styles.avatar}>
                        { user === 'Stranger' ?
                            <Icon name='user-circle-o' size={100} color="rgba(0,0,0,.09)"/> :
                            <Image source={{uri:this.state.picture}} style={styles.image}/>}
                    </View>
                </View>
                <View style={styles.buttons}>
                    <GoogleLogIn loggedInUser={this.loggedInUser}/>
                    <FacebookLogin loggedInUser={this.loggedInUser}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        margin: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 35,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30,
        margin: 20,
    },
});
