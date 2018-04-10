import React from 'react';
import { StyleSheet,
          Text,
          View,
          Alert,
          Button,
          TextInput,
          AsyncStorage,
          TouchableOpacity, ScrollView } from 'react-native';

import store from './services/store';


  
 

export default class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {nome:'',telefone:'',email:''};
  }
  
   
   check(){
    store.get('user')
      .then(res => {        
          this.setState({            
            nome: res.nome,
            telefone: res.telefone,
            email: res.email
          })
        
      });
    }   

 componentWillMount(){
    //this.check()
  }


  persistData = () => { 
      store.save('user', {        
        'nome': this.state.nome+' ',
        'telefone': this.state.telefone,        
        'email': this.state.email
      })
      .then(console.log(store.get('user')));
  }

  

  showdata = () => {
  store.get('user')
      .then(res => {        
          this.setState({            
            nome: res.nome,
            telefone: res.telefone,
            email: res.email
          })
        
      });
    }

  render() {
    return (
      <View style={styles.container}>
      
      <View style={styles.top}>
        <Text>AsyncStore</Text>
        <Text>
          Persistindo Dados
        </Text>
       
        </View>

        <Text >Nome completo</Text>

        <TextInput
          value={this.state.nome}          
          onChangeText={(text) => this.setState({nome:text})}
          style={{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1}}          
        />  

        <Text>Telefone</Text>

        <TextInput          
          value={this.state.telefone}
          onChangeText={(text) => this.setState({telefone:text})}
          style={{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1}}         
        />   

         <Text>email</Text>

        <TextInput          
          value={this.state.email}
          onChangeText={(text) => this.setState({email:text})}
          style={{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginBottom: 5}}         
        />  
 

         <TouchableOpacity
          style={styles.button}
          onPress={this.persistData}
         >
         <Text> Salvar </Text>
         </TouchableOpacity>

         <TouchableOpacity
          style={styles.button}
          onPress={this.showdata}
         >
         <Text> Exibir Dados </Text>
         </TouchableOpacity>       
          
          
          <Text style={{marginBottom: 15,marginTop: 15}}>Lista dos Dados Armazenados</Text>                

          <ScrollView>
            <Text>Exemplo 01</Text>                
          </ScrollView>

        </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    top: 10,
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',  
  },
   button: {
    alignItems: 'center',    
    backgroundColor: '#DDDDDD',
    marginBottom: 5,
    padding: 10,
    width: '50%'
  }  
});
