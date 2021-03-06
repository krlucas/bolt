import { props, withComponent } from 'skatejs';
import withPreact from '@skatejs/renderer-preact';
import { h } from 'preact';
import upperCamelCase from 'uppercamelcase';

import { css, spacingSizes } from '@bolt/core';
import styles from './icon.scss';
import * as Icon from '@bolt/components-icons';

const backgroundStyles = [
  'circle',
  'square'
];


class BoltIcon extends withComponent(withPreact()) {
  static props = {
    name: props.string,
    size: props.string,
    background: props.string
  }

  renderCallback({ props }) {
    const classes = css(
      'c-bolt-icon',
      props.size && spacingSizes[props.size] && spacingSizes[props.size] !== '' ? `c-bolt-icon--${props.size}` : ``,
      props.name ? `c-bolt-icon--${props.name}` : ''
    );

    const backgroundClasses = css(
      'c-bolt-icon__background',
      props.background && backgroundStyles.includes(props.background) ? `c-bolt-icon__${props.background}-background` : ''
    )

    const iconName = props.name ? upperCamelCase(props.name) : '';
    const size = props.size && spacingSizes[props.size] ? (spacingSizes[props.size].replace('rem', '') * 16 / 2) : spacingSizes['medium'];
    const IconTag = Icon[iconName];

    return (
      <div class="c-bolt-icon-wrapper">
        <style>{styles[0][1]}</style>
        <IconTag className={classes} size={size} />
        {props.background && props.size == "xlarge" &&
          <span class={backgroundClasses}></span>
        }
      </div>
    )
  }
}

customElements.define('bolt-icon', BoltIcon);
