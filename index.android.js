import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default class ChatReact extends Component {
    constructor(props) {
        super(props);
        this.state = {messages: []};
        this.onSend = this.onSend.bind(this);
    }

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello there!',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'Ken Bot',
                        avatar: 'https://s-media-cache-ak0.pinimg.com/564x/7d/9b/1d/7d9b1d662b28cd365b33a01a3d0288e1.jpg',
                    },
                },
            ],
        });
    }

    onReceive(text) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, {
                    _id: Math.round(Math.random() * 1000000),
                    text: text,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'Ken Bot',
                        avatar: 'https://s-media-cache-ak0.pinimg.com/564x/7d/9b/1d/7d9b1d662b28cd365b33a01a3d0288e1.jpg',
                    },
                }),
            };
        });
    }

    onSend(messages = []) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });

        //messages[0].text -> message sent by the user
        var reply = "";
        switch(messages[0].text) {
            case "Victor": {
                reply = "A handsome creature, indeed!"
                break;
            }
            case "Jessica": {
                reply = "A white potato!"
                break;
            }
            case "Jerome": {
                reply = "A ... well, an otaku!"
                break;
            }
            case "Kendrick": {
                reply = "Master!"
                break;
            }
            default: {
                reply = "You said: \"" + messages[0].text +"\"";
                break;
            }            
        }
        this.onReceive(reply);
    }
  
    
    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend}
                user={{
                    _id: 1,
                }}
            />
        );
    }
}

AppRegistry.registerComponent('ChatReact', () => ChatReact);