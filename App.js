import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { myBooks, profile, categories } from "./data";

const COLORS = {
  black: '#000000',
    // base colors
    primary: "#F96D41",
    secondary: "#25282F",

    // colors
    black: "#1E1B26",
    white: "#FFFFFF",
    lightGray: "#64676D",
    lightGray2: "#EFEFF0",
    lightGray3: '#D4D5D6',
    lightGray4: '#7D7E84',
    gray: "#2D3038",
    gray1: "#282C35",
    darkRed: "#31262F",
    lightRed: "#C5505E",
    darkBlue: "#22273B",
    lightBlue: "#424BAF",
    darkGreen: "#213432",
    lightGreen: "#31Ad66",
};


const App = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black, paddingTop: 10 }}>
      <View style={{ height: 200 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18 }}>Good morning {profile.username}</Text>
        </View>
        <View>
          <Pressable style={{ flexDirection: "row" }}>
            <Image source={{url: "https://raw.githubusercontent.com/doums85/rn-book-store-app/main/assets/images/icon.png"}} />
            <Text style={{ fontSize: 18 }}>
              {profile.points} points
            </Text>
          </Pressable>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <BookSection />
        <CategorySection 
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </ScrollView>
    </View>
  );
};

const BookSection = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 24 }}>My books</Text>
        <Text style={{ fontSize: 18, color: COLORS.link }}>See more</Text>
      </View>
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
      >
        {myBooks.map((book, index) => (
          <Pressable key={index} style={{ flexDirection: "row" }}>
            <Image source={book.cover} />
            <View>
              <Text style={{ fontSize: 18 }}>{book.title}</Text>
              <Text style={{ fontSize: 14, color: COLORS.gray }}>
                {book.author}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const CategorySection = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <View>
      {categories.map((category, index) => (
        <Pressable
          key={index}
          onPress={() => setActiveCategory(index)}
          style={{
            backgroundColor: index === activeCategory ? COLORS.white : null,
            padding: 10
          }}
        >
          <Text style={{ color: index === activeCategory ? COLORS.black : COLORS.white }}>
            {category.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default App;

