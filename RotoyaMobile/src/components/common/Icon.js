import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { Icon } from 'galio-framework';

class IconExtra extends React.Component {
  state = {
    fontLoaded: false,
  }

  render() {
    const { name, family, ...rest } = this.props;
    
    if (name && family && this.state.fontLoaded) {
      return <Icon name={name} family={family} {...rest} />;
    }

    return null;
  }
}

export default IconExtra;
