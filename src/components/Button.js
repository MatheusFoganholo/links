/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link, Icon } from './ButtonStyles';
import Site from '../assets/img/site.png';
import GitHub from '../assets/img/github.svg';
import LinkedIn from '../assets/img/linkedin.svg';
import Instagram from '../assets/img/instagram.svg';
import Steam from '../assets/img/steam.svg';
import Spotify from '../assets/img/spotify.svg';

export default function Button({
  href,
  text,
  color,
  hover,
  textColor,
  padding,
  borderRadius,
  icon,
  iconBackground,
  iconRadius,
  iconPadding,
  ...rest
}) {
  const icons = {
    site: Site,
    github: GitHub,
    linkedin: LinkedIn,
    instagram: Instagram,
    steam: Steam,
    spotify: Spotify,
  };

  return (
    <Link
      href={href}
      type="button"
      target="_blank"
      bg={color}
      hover={hover}
      style={{
        padding,
        color: textColor,
        borderRadius,
        ':hover': hover || 'inherit',
        ...rest,
      }}
    >
      <Icon
        src={icons[icon]}
        iconBackground={iconBackground}
        iconRadius={iconRadius}
        iconPadding={iconPadding}
      />
      {text}
    </Link>
  );
}
