import React from "react";
import { View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import Icon from "react-native-vector-icons/Ionicons";
import { black } from "../../helper/Color";

const BackIcon = ({ style, navigation, color }) => {
  return (
    <View style={style}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name={"md-chevron-back"} size={32} color={color} />
      </TouchableOpacity>
    </View>
  );
};

export default BackIcon;

BackIcon.propTypes = {
  style: PropTypes.object,
  navigation: PropTypes.object,
  color: PropTypes.string,
};

BackIcon.defaultProps = {
  color: black,
};
