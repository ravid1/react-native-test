import React, {Component} from "react";
import { View } from "react-native";
import { GoogleSignin } from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class GoogleLogIn extends Component<props> {

    async componentDidMount(){
        await this._configureGoogleSignIn();
        // await this._getCurrentUser();
    }

    async _configureGoogleSignIn() {
        await GoogleSignin.hasPlayServices({ autoResolve: true });
        await GoogleSignin.configure({});
    }

    signIn = async ()=> {
        try {
            const user = await GoogleSignin.signIn();
            this.props.loggedInUser(user.name,user.photo);
        }
        catch (e) {
            alert(e);
        }
    }

    render(){
        return(
            <View>
            <Icon.Button name="google" backgroundColor="#DD4B39" onPress={this.signIn} {...iconStyles}>
                Or with Google
            </Icon.Button>
            </View>
        )
    }
}

const iconStyles = {
    borderRadius: 10,
    iconStyle: { paddingVertical: 5 },
};
