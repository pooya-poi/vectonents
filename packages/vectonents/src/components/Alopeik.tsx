
import React from 'react'

interface AlopeikProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Alopeik: React.FC<AlopeikProps> = ({
  size = 24,
  fillColor = 'currentColor',
  className = ''
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-${fillColor} ${className}`}
  >
    <path fill="currentColor" d="M23.89 3.938c-.13-.219-.314-.276-.531-.276-1.885.003-3.77 0-5.655.004a.35.35 0 0 1-.298-.143 10.2 10.2 0 0 0-1.818-1.71A9.4 9.4 0 0 0 13.012.46 8.815 8.815 0 0 0 9.53.027a9.118 9.118 0 0 0-4.096 1.365c-1.345.84-2.469 1.988-3.39 3.41-.009.013-.007.035-.012.063.035.002.062.005.09.005h20.171c.209 0 .254.077.161.293-.358.842-.72 1.679-1.076 2.522-.369.872-.886 1.593-1.579 2.13-.74.573-1.553.883-2.444.89h-.328c-.155.361-.307.709-.454 1.06-.226.545-.458 1.087-.794 1.551-.442.608-.96 1.098-1.583 1.431-.426.227-.863.38-1.325.458-.28.047-.561.04-.855.053l-.67 1.571c.057.004.085.007.114.007l3.99-.001c.069 0 .138 0 .206.022.138.041.223.192.197.357q-.045.281-.344.28h-4.492l-.05.065q-.014.022-.028.047a4.9 4.9 0 0 1-1.222 1.347c-.712.534-1.493.829-2.335.838-1.591.018-3.182.007-4.773.008-.045 0-.096-.02-.153.039 2.094 2.72 4.67 4.222 7.798 4.16 4.233-.085 7.233-2.55 9.217-6.892l.074-.004c.425 0 .849.003 1.273-.002.403-.007.728-.376.736-.856.008-.429-.243-.831-.653-.89-.251-.034-.505-.006-.757-.016-.043-.002-.09.019-.137-.04.335-1.376.443-2.79.37-4.215.658-.494 1.157-1.135 1.52-1.918.297-.64.58-1.29.869-1.936q.587-1.306 1.169-2.617a.7.7 0 0 0-.045-.675M6.618 22.342c-.142.006-.284 0-.427 0s-.294.005-.44 0c-.16-.008-.264-.141-.261-.326.002-.168.114-.311.262-.314q.435-.009.868.002c.144.004.255.152.256.32 0 .168-.11.311-.258.318m4.771-4.061c.062-.092.15-.116.24-.117q.936-.005 1.872 0c.246.002.309.149.323.324.015.192-.131.332-.33.333h-.917q-.472.002-.943 0a.28.28 0 0 1-.281-.188.37.37 0 0 1 .036-.352m3.44 2.983c-.035.125-.102.206-.218.219-.048.005-.096.014-.145.014H8.092a1 1 0 0 1-.146-.011c-.152-.03-.243-.165-.235-.343.009-.162.13-.3.278-.3q.868-.002 1.737-.001h4.759c.098 0 .198 0 .272.092a.36.36 0 0 1 .071.33m5.784-5.377c.201 0 .305.087.334.274.029.185-.055.331-.213.364a1 1 0 0 1-.17.018l-6.376.001c-.232 0-.356-.112-.357-.32-.002-.173.1-.313.246-.334.037-.006.074-.004.11-.004h6.425z"/><path fill="currentColor" d="M10.762 15.282c-.122.286-.244.563-.36.846-.29.707-.706 1.288-1.27 1.711-.545.41-1.144.64-1.796.64q-2.827.003-5.655.003c-.02 0-.04-.004-.095-.008-2-4.016-2.106-8.106-.33-12.286h19.516c-.081.19-.16.371-.234.553-.228.555-.479 1.088-.866 1.518-.44.488-.944.83-1.53 1.01a3.3 3.3 0 0 1-.967.132H7.591c-.26 0-.477.091-.586.388-.16.43.088.907.467.916q.086.002.17.003l7.945-.001h.151c.029.086-.017.133-.04.185-.186.429-.348.873-.58 1.274-.414.721-.971 1.227-1.664 1.53a2.9 2.9 0 0 1-1.183.24q-3.31-.001-6.622 0c-.32 0-.513.144-.611.454-.12.382.112.82.457.86q.09.007.183.005h4.957c.036 0 .073-.01.126.027"/>
  </svg>
);

export default Alopeik;