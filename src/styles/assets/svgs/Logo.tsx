import { SVGProps } from 'react';
const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="100%" height="100%" fill="white" />
      <text
        x="50%"
        y="50%"
        fontFamily="'Brush Script MT', cursive"
        fontSize="50"
        fill="black"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        hippoGallary
      </text>
    </svg>
  );
};

export default Logo;
