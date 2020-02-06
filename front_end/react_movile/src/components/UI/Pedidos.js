import React, {Component} from 'react'
import { StyleSheet, View, ScrollView, ImageBackground, Image } from 'react-native'
import { Table, Row } from 'react-native-table-component'

const image = 'https://img.freepik.com/psd-gratis/superposicion-sombra-sobre-fondo-textura-madera-blanca_1048-10825.jpg?size=626&ext=jpg'

export default class Pedido extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tableHead: ['Usuario', 'Pedido', 'Cantidad'],
        widthArr: [200, 160, 120],
      }
    }
    render() {
      const state = this.state;
      const tableData = [];
      for (let i = 0; i < 30; i += 1) {
        const rowData = [];
        for (let j = 0; j < 9; j += 1) {
          rowData.push(`${i}${j}`);
        }
        tableData.push(rowData);
      }
  
      return (
        <ImageBackground source={{uri: image}} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <ScrollView horizontal={true}>
            <View>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
              </Table>
              <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{borderColor: '#C1C0B9'}}>
                  {
                    tableData.map((rowData, index) => (
                      <Row
                        key={index}
                        data={rowData}
                        widthArr={state.widthArr}
                        style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                        textStyle={styles.text}
                      />
                    ))
                  }
                </Table>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
        </ImageBackground>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30},
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }
  });