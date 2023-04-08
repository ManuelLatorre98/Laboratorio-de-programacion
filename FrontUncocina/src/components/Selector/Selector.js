import {faStar as offStar} from "@fortawesome/free-regular-svg-icons";
import { faAngleLeft, faStar as onStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ItemSelector from "./ItemSelector";
import { selectorStyle } from "./styles";

export default function Selector(props){
  const {titleText, items, selectedItems, handleCategories, handleSelectItem} = props
  const {container, itemContainer, titleContainer, exitIcon, title,exit, itemListContainer} = selectorStyle

  //RENDER COMPONENTS
  const itemElements = items.map((item, i)=>{ //receives an array with names
    return <ItemSelector 
      key={'item'+i}
      itemName={item}
      selectedItem={selectedItems.includes(item)}
      handleSelectItem={handleSelectItem}
    />

  })  
  return(
      <TouchableOpacity onPress={handleCategories} style={container}>
        <TouchableOpacity activeOpacity={1} style={itemContainer}>
          <View style={titleContainer}>
            <Text style={title}>{titleText}</Text>
            <TouchableOpacity onPress={handleCategories} style={exit}>
              <FontAwesomeIcon icon={faXmark} size={25} style={exitIcon} />
            </TouchableOpacity>
          </View>
          <ScrollView style={itemListContainer}>

            {itemElements}

          </ScrollView>
         
          </TouchableOpacity>
      </TouchableOpacity>
  )
}