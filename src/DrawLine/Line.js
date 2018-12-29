import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const defaultBorderColor = '#f00';
const defaultBorderStyle = 'solid';
const defaultBorderWidth = 1;

export default class Line extends PureComponent {
  static propTypes = {
    x0: PropTypes.number.isRequired,
    y0: PropTypes.number.isRequired,
    x1: PropTypes.number.isRequired,
    y1: PropTypes.number.isRequired,
    borderColor: PropTypes.string,
    borderStyle: PropTypes.string,
    borderWidth: PropTypes.number,
    className: PropTypes.string,
    zIndex: PropTypes.number,
  };

  componentDidMount() {
    // Append rendered DOM element to the container the
    // offsets were calculated for
    this.within.appendChild(this.el);
  }

  componentWillUnmount() {
    this.within.removeChild(this.el);
  }

  findElement(className) {
    return document.getElementsByClassName(className)[0];
  }

  render() {
    const { x0, y0, x1, y1, within = '' } = this.props;

    this.within = within ? this.findElement(within) : document.body;

    const dy = y1 - y0;
    const dx = x1 - x0;

    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    const length = Math.sqrt(dx * dx + dy * dy);

    const positionStyle = {
      position: 'absolute',
      top: `${y0}px`,
      left: `${x0}px`,
      width: `${length}px`,
      zIndex: Number.isFinite(this.props.zIndex)
        ? String(this.props.zIndex)
        : '1',
      transform: `rotate(${angle}deg)`,
      // Rotate around (x0, y0)
      transformOrigin: '0 0',
    };

    const defaultStyle = {
      borderTopColor: this.props.borderColor || defaultBorderColor,
      borderTopStyle: this.props.borderStyle || defaultBorderStyle,
      borderTopWidth: this.props.borderWidth || defaultBorderWidth,
    };

    const props = {
      className: this.props.className,
      style: Object.assign({}, defaultStyle, positionStyle),
    };

    // We need a wrapper element to prevent an exception when then
    // React component is removed. This is because we manually
    // move the rendered DOM element after creation.
    return (
      <div className="react-lineto-placeholder">
        <div
          ref={el => {
            this.el = el;
          }}
          {...props}
        />
      </div>
    );
  }
}
