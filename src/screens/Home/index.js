import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'João da Silva',
        email: 'joao@email.com',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Maria Souza',
        email: 'maria@email.com',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'José Carvalho',
        email: 'jose@email.com',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        name: 'Junior Amorim',
        email: 'junior@email.com',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        name: 'Adriana Coelho',
        email: 'adriana@email.com',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d75',
        name: 'Jessica Andrade',
        email: 'jessica@email.com',
      },
  ];

export default function Home({navigation}) {

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={styles.data}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.email}>{item.email}</Text>
            </View>
            
            <View style={styles.itemButtons}>
                <TouchableOpacity>
                    <FontAwesome5 name="pencil-alt" size={24} color="black" />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <AntDesign name="delete" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );

 return (
    <View style={styles.view}>
        <View style={styles.head}>
            <Text style={styles.header}>Lista de usuários</Text>    
        </View>

        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 50}}
            ListEmptyComponent={() => (
                <Text style={{textAlign: 'center'}}>
                    Nenhum usuário cadastrado!
                </Text>
            )}
        />

        <TouchableOpacity style={styles.addUser} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.txtAddUser}>+</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 25,
        backgroundColor: '#000',
        width: '100%',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 15,
    },
    head: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 25
    },
    header:{
        color: '#FFF',
        fontSize: 32,
        // marginLeft: -30
    },
    input: {
        width: '90%',
        height: 50,
        
        padding: 15,
        marginVertical: 10,
        
        borderColor: '#111',
        borderWidth: 1,
        borderRadius: 10,
        
        backgroundColor: '#222',
        color: '#FFF',
        fontSize: 20
    },
    item: {
        height: 100,
        backgroundColor: '#FFF',
        elevation: 1,
        marginVertical: 5,
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    data: {
        flex: 3,
    },
    itemButtons: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent:'space-between',
        flex: 1,
    },
    id: {
        fontSize: 14,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    email: { 
        fontSize: 16,
    },
    addUser: {
        position: 'absolute',
        right: 15,
        bottom: 15,
        elevation: 10,
        backgroundColor: '#19abfd',
        borderRadius: 50,
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtAddUser: {
        fontSize: 32,
        color: '#FFF'
    }
})