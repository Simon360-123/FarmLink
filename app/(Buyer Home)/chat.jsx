import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet, Keyboard, KeyboardAvoidingView,Platform} from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';

// const messagesData = [ { id: '1', text: 'Hello Lisa!\nHow are you doin today?', sender: 'user', time: '5:10' },
//                        { id: '2', text: 'Hello Michael! very well, thank you.What would you like to get from us today? I am also available to answer your questions.', sender: 'lisa', time: '5:12' },
//                        { id: '3', text: 'Oh, thats nice to hear. I just wanted to ask if you could give discount on the plantain.', sender: 'user', time: '5:13' }, ];

  const Chat= ()=>{
    const [messages, setMessages] = useState(""); 
    const [input, setInput] = useState(''); 
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = () => { 
        if (input.trim()) { 
            const newMessage = { id: Date.now().toString(), 
        text: input, 
        sender: 'user', 
        time: new Date().toLocaleTimeString([], 
            { hour: '2-digit', minute: '2-digit' }) 
        }; 
        setMessages([...messages, newMessage]); 
        setInput(''); setIsTyping(false); } };

    const handleInputChange = (text) => { 
        setInput(text); setIsTyping(text.length > 0); 
    };

    const renderMessage = ({ item }) => ( 
    <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.farmerMessage]}>
         <Text style={styles.messageText}>{item.text}</Text>
         <Text style={styles.timeText}>{item.time}</Text> 
     </View> 
   );

    return (
      <SafeAreaView style={{flex:1,backgroundColor:'#E1E2DF'}}>
        <KeyboardAvoidingView style={{flex:1}}
          behavior={Platform.OS === 'ios' ? 
         'padding':'height'}
          keyboardVerticalOffset={90}>

         <View style={styles.container}>

          <View style={styles.header}> 
            {/* <TouchableOpacity>
              <Text style={styles.backArrow}>{'<'}</Text>
            </TouchableOpacity> 
            <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.avatar} />
             */}
            <View> 
              <Text style={styles.name}>Farmer</Text> 
            </View> 

          </View> 
 
            <FlatList data={messages} 
            keyExtractor={item => item.id}
            renderItem={renderMessage} 
            contentContainerStyle={styles.chatContainer} /> 

          <View style={styles.inputWrapper}> 
            <Icon name="happy-outline" 
            size={22} 
            color="#555" 
            style={styles.leftIcon} 
            onPress={() => console.log('Open emoji picker')} />

            <TextInput
              value={input}
              onChangeText={handleInputChange}
              placeholder="Enter message..."
              style={styles.textInput}
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
              multiline
            />

            <View style={styles.rightInLineIcons}>
              <Icon 
                  name="attach" 
                  size={22}
                  color="#555" 
                  style={styles.inlineIcon}
                  onPress={() => console.log('Attach file')} 
              />
      
              {!isTyping && (
              <Icon
                  name='camera-outline'
                  size={22}
                  color='#555'
                  style={styles.inlineIcon}
                  onPress={()=>console.log('Open camera')}
              />
              )}
            </View>
   
            <TouchableOpacity onPress={handleSend} 
              style={styles.sendButton}>
              {isTyping ? (
              <Icon 
                name="send" 
                size={24} 
                color="#00a884"/>

              ) : (
                <Icon 
                name="mic" 
                size={22} 
                color="#00a884"/>
              )}
            </TouchableOpacity>
        
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>

  ); 
}

export default Chat;

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        backgroundColor: '#E1E2DF'
     }, 

     messageContainer: { 

      marginVertical: 5, 
      padding: 10, 
      borderRadius: 10, 
      maxWidth: '80%'
  
      }, 

      userMessage: {
              alignSelf: 'flex-end', 
              backgroundColor: '#00a884'
            
             },

             lisaMessage: { 
              alignSelf: 'flex-start',
              backgroundColor: '#d9fdd3'
            
             },

             backArrow: { 
         fontSize: 24, 
         marginRight: 10 
     }, 

     avatar: { 
             width: 40,
             height: 40, 
             borderRadius: 20, 
             marginRight: 10 
         },
         
         name: { 
             fontWeight: 'bold', 
             fontSize: 16 
         },

         date: {
           alignSelf: 'center', 
           marginVertical: 5, 
           color: '#888',
         },

         chatContainer: { 
            
             padding: 10 
        
         },

         sendButton: {
   marginLeft: 5,
 },

 rightInLineIcons:{
     position:'absolute',
     right:50,
     flexDirection:'row',
     top:18
 },

 inlineIcon:{
     marginLeft:10
 },

 header: { 
         flexDirection: 'row', 
         alignItems: 'center', 
         padding: 10, 
         backgroundColor: '#ddd',
      }, 

      messageText: { 
        fontSize: 16, 
        color: '#000' 
      },
      
       inputContainer: {
               flexDirection: 'row',
               alignItems: 'center', 
               paddingHorizontal: 10, 
               paddingVertical: 5, 
               borderTopWidth: 1, 
               borderColor: '#ccc', 
               backgroundColor: '#fff'
       },

       input: { 
               flex: 1, 
               height: 40, 
               backgroundColor: '#eee', 
               borderRadius: 20, 
               paddingHorizontal: 15, 
               paddingLeft: 35,
             },

             leftIcon: { 
                 position: 'absolute', 
                 left: 20, 
                 zIndex: 1,
            
             }, 

             icon: { 
               marginLeft: 10, 
            
           }, 

           sendIcon: {
                 marginLeft: 10, 
               },

        inputWrapper: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 8,
            margin: 10,
            borderRadius: 25,
            backgroundColor: '#eee',
            position: 'relative',

      },

      textInput: {
   flex: 1,
   paddingLeft: 35,  
   paddingRight: 70, 
   maxHeight: 120,
   fontSize: 16,
 },


 leftIcon: {
   position: 'absolute',
   left: 20,
   zIndex: 1,
 },

 rightIconAttach: {
   position: 'absolute',
   right: 40,
   zIndex: 1,
 },

 rightIconCamera: {
   position: 'absolute',
   right: 70,
   zIndex: 1,
},

            
        
        
    })