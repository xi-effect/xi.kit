import React from 'react';
import { Svg, IconProps } from '../Svg';

export const Sticker = ({ ...props }: IconProps) => (
  <Svg {...props}>
    <path
      d="M5.929.041C3.541.15 2.341.552 1.375 1.569.526 2.463.157 3.638.04 5.82c-.052.972-.051 11.432.001 12.38.096 1.754.342 2.787.864 3.633.247.4.862 1.015 1.262 1.262.609.376 1.437.639 2.393.76.998.127 2.173.149 7.3.137l5.04-.012.291-.106c.16-.059.385-.165.5-.237.127-.08 1.282-1.2 2.961-2.874 2.873-2.863 3.056-3.064 3.203-3.534.04-.126.089-.229.109-.229.05 0 .046-10.175-.005-11.16-.092-1.775-.337-2.816-.863-3.673-.243-.395-.9-1.049-1.278-1.27-.803-.47-1.597-.682-3.078-.822C18.17.021 7.017-.008 5.929.041M18.68 2.074c.231.025.6.074.82.109 1.45.232 2.085.867 2.317 2.317.141.878.152 1.248.172 5.38l.019 4.14h-2.734c-2.151 0-2.781.011-2.954.054-.327.08-.991.414-1.232.621-.579.498-.922 1.097-1.047 1.827-.03.175-.04 1.094-.033 2.868L14.02 22l-3.72-.001c-4.596-.001-5.471-.042-6.371-.303-1.231-.357-1.665-1.071-1.857-3.061-.075-.773-.075-12.497 0-13.27.11-1.136.263-1.721.572-2.183.506-.757 1.362-1.05 3.336-1.141 1.078-.05 12.201-.021 12.7.033"
      fillRule="evenodd"
    />
  </Svg>
);
