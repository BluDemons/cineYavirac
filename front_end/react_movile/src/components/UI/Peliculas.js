import SortableGridView from 'react-native-sortable-gridview'
import React, { Component } from 'react';


export default class FinalExample extends Component {
  state = {
    data: [
      {name: 'box1', backgroundColor: '#09f', color: '#fff'},
      {name: 'box2', backgroundColor: '#f60', color: '#fff'},
      {name: 'box3', backgroundColor: '#333', color: '#fff'},
      {name: 'box4', backgroundColor: '#rgba(255, 216, 58, 1)', color: '#333'},
      {name: 'box5', backgroundColor: '#rgba(0, 222, 144, 1)', color: '#fff'},
    ],
    newId: 6, // New box's id should never be used.
  }
  render() {
    let lockData = [];
    if (this.state.data.length < 6) {
      lockData.push({
        name: 'Add box',
      })
    }
    return (
      <View>
        <Text style={styles.title}>You can add up to 6 box</Text>
        <SortableGridView
          data={this.state.data}
          lockData={lockData}
          onDragStart={() => {
            console.log('Default onDragStart');
          }}
          onDragRelease={(data) => {
            console.log('Default onDragRelease', data);
            this.setState({
              data,
            })
          }}
          renderItem={(item, index) => {
            return (
              <View
                uniqueKey={item.name}
                onTap={() => {
                  Alert.alert(`On Tap ${item.name}!`);
                }}
                style={[styles.item, {backgroundColor: item.backgroundColor}]}
              >
                <Text style={[styles.text, {color: item.color}]}>{item.name}</Text>
              </View>
            )
          }}
          itemCoverStyle={{marginTop: -8, marginLeft: -8}}
          renderItemCover={(item, index) => {
            return (
              <TouchableOpacity
                style={styles.delete}
                onPress={() => {
                  let data = [...this.state.data];
                  data.splice(index, 1);
                  this.setState({
                    data,
                  })
                }}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            )
          }}
          renderLockItem={(item, index) => {
            return (
              <View
                uniqueKey={`${item.name}`}
                style={styles.lockItem}
                onTap={() => {
                  Alert.alert(
                    'Add Picture?',
                    'Click Yes to append picture to array!',
                    [
                      {text: 'Cancel'},
                      {text: 'OK', onPress: () => {
                        let data = [...this.state.data];
                        const randomColor = `#rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, 1)`;
                        data.push({
                          name: `box${this.state.newId}`,
                          backgroundColor: randomColor,
                          color: '#fff'
                        })
                        this.setState({
                          data,
                          newId: this.state.newId + 1,
                        })
                      }},
                    ]
                  )
                }}
              >
                <Text style={styles.add}>{item.name}＋</Text>
              </View>
            )
          }}
        />
      </View>
    )
  }
}

