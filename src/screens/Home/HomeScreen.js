import React, { Component } from 'react';
import { StyleSheet, FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';
import { SearchBar } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://www.prachachat.net/wp-content/uploads/2020/03/Lazada_Shop-From-Home.png",
        "https://cf.shopee.co.th/file/8b5eaca1e5be53cdf5bf97e8e573fdd9",
        "https://newscurveonline.com/wp-content/uploads/2020/03/Almond-Breeze_new-ad1.jpg",
        "https://brandinside.asia/wp-content/uploads/2018/08/Screen-Shot-2561-08-21-at-12.26.23.png"
        // require('./assets/images/girl.jpg'),
      ],
      search: '',
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    )
  });

  updateSearch = (search) => {
    this.setState({ search });
  };



  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    const { search } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <SearchBar
          placeholder="ค้นหา"
          onChangeText={this.updateSearch}
          value={search}
        />
        <View style={styles.images}>
          <SliderBox images={this.state.images }
            autoplay
            circleLoop />
        </View>
        <View style={styles.console}>
        <Avatar
          size="xlarge"
          rounded
          title="CR"
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        </View>

      </View>

    );
  }
}
const stylesss = StyleSheet.create({
  images:{
    borderRadius: 24,
    background: linear-gradient(145,'#e7e3e3','#c2bfbf'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
  }
});