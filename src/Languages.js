import * as React from 'react';
import { Button,ScrollView, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const Languages=()=>{
    return(
        <ScrollView style={styles.scrollView}>
        <DataTable style={styles.container}>
          <DataTable.Header>
            <DataTable.Title >Languages</DataTable.Title>
            <DataTable.Title >What for?</DataTable.Title>
        
           
          </DataTable.Header>
  
          <DataTable.Row>
            <DataTable.Cell>C#</DataTable.Cell>
            <DataTable.Cell>game and app development</DataTable.Cell>
            
    
          </DataTable.Row>
  
          <DataTable.Row>
            <DataTable.Cell >R</DataTable.Cell>
            <DataTable.Cell>Data Science</DataTable.Cell>
            
         
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>JavaScript</DataTable.Cell>
            <DataTable.Cell >frontend,Backend</DataTable.Cell>
           
          
          </DataTable.Row>
          
          <DataTable.Row>
            <DataTable.Cell>Swift</DataTable.Cell>
            <DataTable.Cell >Program for Macs</DataTable.Cell>
           
          
          </DataTable.Row>
          
          <DataTable.Row>
            <DataTable.Cell>Java</DataTable.Cell>
            <DataTable.Cell >memory management </DataTable.Cell>
           
          
          </DataTable.Row>
          
          <DataTable.Row>
            <DataTable.Cell>Python</DataTable.Cell>
            <DataTable.Cell >Artifical Intelligence</DataTable.Cell>
           
          
          </DataTable.Row>
          
          <DataTable.Row>
            <DataTable.Cell>C++</DataTable.Cell>
            <DataTable.Cell >game and app development</DataTable.Cell>
           
          
          </DataTable.Row>
          
          <DataTable.Row>
            <DataTable.Cell>Golang</DataTable.Cell>
            <DataTable.Cell >networks</DataTable.Cell>
           
          
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>React Native</DataTable.Cell>
            <DataTable.Cell >Mobil Application</DataTable.Cell>
           
          
          </DataTable.Row>
         
          
  
        </DataTable>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    scrollView: {
      //backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    container:{
        backgroundColor:"pink",
        marginTop:10
    }
  })

  export default Languages;