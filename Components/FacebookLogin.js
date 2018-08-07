import React, {Component} from "react";
import { View } from "react-native";
import { GraphRequestManager, GraphRequest, LoginManager }  from "react-native-fbsdk";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FacebookLogin extends Component<props> {

    signIn = async ()=> {
        const graphResponseHandler = this.graphResponseHandler;
        // const data = await AccessToken.getCurrentAccessToken();
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function(result) {
                if (result.isCancelled) {
                    alert('Login cancelled');
                } else {
                    const infoRequest = new GraphRequest(
                        '/me?fields=name,picture',
                        null,
                        graphResponseHandler
                    );
                    new GraphRequestManager().addRequest(infoRequest).start();
                }
            },
            function(error) {
                alert('Login fail with error: ' + error);
            }
        );
    }

    graphResponseHandler = (error, result)=> {
        if (error) {
            alert('Error fetching data: ' + error.toString());
        } else {
            this.props.loggedInUser(result.name,result.picture.data.url);
        }
    }

    render(){
        return (
            <View>
                <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.signIn} {...iconStyles}>
                    Login With Facebook
                </Icon.Button>
            </View>
        );
    }
}

const iconStyles = {
    borderRadius: 10,
    iconStyle: { paddingVertical: 5 },
};
