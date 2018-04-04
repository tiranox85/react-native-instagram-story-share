import React from 'react' // eslint-disable-line
import { Dimensions, requireNativeComponent, View } from 'react-native' // eslint-disable-line
import PropTypes from 'prop-types'

const NativeComponent = requireNativeComponent('NativeAd', NativeAd)

const LAYOUT = {
  BIG: 'BIG',
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
}

const DIMENSIONS = {
  [LAYOUT.BIG]: {
    height: 400,
    width: '100%',
  },
  [LAYOUT.MEDIUM]: {
    height: 300,
    width: '100%',
  },
  [LAYOUT.SMALL]: {
    height: 200,
    width: '100%',
  },
}

class NativeAd extends React.Component {
  static DIMENSIONS = DIMENSIONS
  static LAYOUT = LAYOUT

  render() {
    return (
      <View style={this.props.style}>
        <NativeComponent
          {...this.props}
          style={DIMENSIONS[this.props.layout.toUpperCase()]}
        />
      </View>
    )
  }
}

NativeAd.defaultProps = {
  layout: LAYOUT.BIG,
  onClick: () => {},
  onFailure: () => {},
  onImpression: () => {},
  onSuccess: () => {},
}

NativeAd.propTypes = {
  layout: PropTypes.string,
  onClick: PropTypes.func,
  onFailure: PropTypes.func,
  onImpression: PropTypes.func,
  onSuccess: PropTypes.func,
  unitId: PropTypes.string.isRequired,
}

export default NativeAd
