import {faCircleDot, faStar as offStar} from "@fortawesome/free-regular-svg-icons";
import { faAngleLeft, faStar as onStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { itemSelectorStyle } from "./styles";

export default function ItemSelector(props){
  const {selectedItem, itemName, handleSelectItem, itemIndex}= props
  const {itemContainer, itemText,selectIcon} = itemSelectorStyle

  return(
      <TouchableOpacity onPress={()=>handleSelectItem(itemName)} style={itemContainer}>
        <Text style={itemText}>{itemName}</Text>
        {selectedItem && <FontAwesomeIcon icon={faCircleDot} size={20} style={selectIcon}/>}
      </TouchableOpacity>
  )
}