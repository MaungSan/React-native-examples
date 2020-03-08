import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

class ScrollViews extends Component {
  render() {
    return (
      <View style={{alignSelf: 'center', padding: 10, flexDirection: 'column'}}>
        <View style={{height: '25%'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            ScrollView Horizontal
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image
              resizeMode="center"
              style={{width: 150, height: 150, margin: 10}}
              source={require('../image/right.png')}
            />
            <Image
              resizeMode="center"
              style={{width: 150, height: 150, margin: 10}}
              source={require('../image/right.png')}
            />
            <Image
              resizeMode="center"
              style={{width: 150, height: 150, margin: 10}}
              source={require('../image/right.png')}
            />
            <Image
              resizeMode="center"
              style={{width: 150, height: 150, margin: 10}}
              source={require('../image/right.png')}
            />
            <Image
              resizeMode="center"
              style={{width: 150, height: 150, margin: 10}}
              source={require('../image/right.png')}
            />
            <Image
              resizeMode="center"
              style={{width: 150, height: 150, margin: 10}}
              source={require('../image/right.png')}
            />
          </ScrollView>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            ScrollView Vertical
          </Text>
          <View style={{flexDirection: 'row'}}>
            <ScrollView showsVerticalScrollIndicator={false} style={{}}>
              <Image
                resizeMode="center"
                style={{width: 150, height: 150, margin: 10}}
                source={require('../image/down.png')}
              />
              <Image
                resizeMode="center"
                style={{width: 150, height: 150, margin: 10}}
                source={require('../image/down.png')}
              />
              <Image
                resizeMode="center"
                style={{width: 150, height: 150, margin: 10}}
                source={require('../image/down.png')}
              />
              <Image
                resizeMode="center"
                style={{width: 150, height: 150, margin: 10}}
                source={require('../image/down.png')}
              />
              <Image
                resizeMode="center"
                style={{width: 150, height: 150, margin: 10}}
                source={require('../image/down.png')}
              />
              <Image
                resizeMode="center"
                style={{width: 150, height: 150, margin: 10}}
                source={require('../image/down.png')}
              />
            </ScrollView>

            <ScrollView>
              <Image
                resizeMode="center"
                style={{width: 150, height: 150, margin: 10}}
                source={require('../image/up.png')}
              />
              <Image
                resizeMode="center"
                style={{width: 150, height: 150, margin: 10}}
                source={require('../image/up.png')}
              />
              <Image
                resizeMode="center"
                style={{width: 150, height: 150, margin: 10}}
                source={require('../image/up.png')}
              />
              <Image
                resizeMode="center"
                style={{width: 150, height: 150, margin: 10}}
                source={require('../image/up.png')}
              />
              <Image
                resizeMode="center"
                style={{width: 150, height: 150, margin: 10}}
                source={require('../image/up.png')}
              />
              <Image
                resizeMode="center"
                style={{width: 150, height: 150, margin: 10}}
                source={require('../image/up.png')}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default ScrollViews;