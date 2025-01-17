import { createElement } from 'react';
import type { HeadingProps } from './Heading.types';

import 'roobar-style/Heading.css';

export const Heading = (props: HeadingProps) => {
  const { level = 1 } = props;
  switch (level) {
    case 1:
      return <h1 className="heading" {...props} />;
    case 2:
      return <h2 className="heading" {...props} />;
    case 3:
      return <h3 className="heading" {...props} />;
    case 4:
      return <h4 className="heading" {...props} />;
    case 5:
      return <h5 className="heading" {...props} />;
    case 6:
      return <h6 className="heading" {...props} />;
    default:
      return <h1 className="heading" {...props} />;
  }
};
