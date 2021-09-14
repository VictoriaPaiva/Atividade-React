import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image,Modal } from 'react-native';
import Constants from 'expo-constants';


const ShowDetalhes = ({display,toogleModal,mensagem}) => (   
    <Modal
          animationType="slide"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text>{mensagem}</Text>
                </Pressable>
          </View>
        </View>
    
    </Modal>
        
 )

const Pessoa = ({nome,comentario,foto}) => {
    
    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={comentario}/>
      
    
      
        <Image
          style={styles.imagem}
          source={{
            uri: foto,
          }}
        />
         <Text style={styles.paragraph}>{nome}</Text>
           <Pressable onPress={mudaModal}>

       
      </Pressable>
    </View>
    )
}


const DATA = [
        {
          "id": 1,
          "name": "Moniink",
          "body": "Tatuadora do estilo fine line, micropigmentadora e designer de sobrancelha",  
          "foto": "https://d1fdloi71mui9q.cloudfront.net/r0Awj7TwRyCrrYkX6sjc_4iTO8cIOg1zX7stt"
        },
        {
          "id": 2,
          "name": "John",
          "body": "Tatuador do realismo, recepcionista e assistente para responder mensagens via whatsApp",
          "foto": "https://scontent.fcgh13-1.fna.fbcdn.net/v/t1.18169-9/21752054_793432230829793_348763672363422832_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFVt7eYcrUQ0Mupe2Iz-uHpbHiWpPICMaBseJak8gIxoDGw0aM8O7iLlqMFCT3B0BbMpcAzZ-mJmP79cU4ql0qK&_nc_ohc=i1aHCjNuNd0AX82oJND&_nc_ht=scontent.fcgh13-1.fna&oh=7807d73a06f5cce7b98013c459158019&oe=6165D253"
        },
        {
          "id": 3,
          "name": "Studio 283 Tattoo",
          "body":"Estudio de tatuagem, piersing, unhas e outros procedimentos esteticos como micropigmentação e microblading",
          "foto": "https://scontent.fcgh13-1.fna.fbcdn.net/v/t1.6435-9/202760235_866719157251571_7134590506683844981_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHOSKyWFf-Y89oZ758Esn97IOgCwianqAEg6ALCJqeoAYbP8_0zZIuKVEfd36tsOK7xyBfENRntVdGoS422pEFP&_nc_ohc=cPMUtG27RGoAX_qgNxB&_nc_ht=scontent.fcgh13-1.fna&oh=e22ab3054e0e1769eaf49f9759b5c544&oe=6166367D"
          
        }
    ];



export default function App() {

  //função que renderiza cada item do FlatList
  function meuItem({item}){
       
    return(
      <Pessoa nome={item.name}
              comentario={item.body}
              foto={item.foto}
      />
    )
  }
  

  return (

    <View style={styles.container}>

      <FlatList
        data={DATA}
        renderItem={meuItem}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#afbde9',
    padding: 2,
  },
  paragraph: {
    margin: 12,
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#3f51fa',
    borderRadius:30
  },
  imagem: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    borderRadius:100
  },
  modalView: {
    margin: 20,
    backgroundColor: "#CCCCCC",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});