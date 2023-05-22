import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconChat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M12 1c6.617 0 12 4.244 12 9.461C24 15.721 18.617 20 12 20h-1.436c-1.956 2.845-6.341 2.995-6.538 3H4a1.003 1.003 0 0 1-.782-1.624c.016-.02 1.437-1.828 1.719-3.72C2.446 16.409 0 13.774 0 10.461 0 5.244 5.383 1 12 1Zm0 2C6.486 3 2 6.347 2 10.461c0 2.563 2.191 4.778 4.355 5.642.38.151.629.519.629.928 0 1.327-.472 2.625-.98 3.636 1.156-.317 2.492-.933 3.107-2.126A1 1 0 0 1 10 18h2c5.514 0 10-3.382 10-7.539C22 6.347 17.514 3 12 3Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconChat;
