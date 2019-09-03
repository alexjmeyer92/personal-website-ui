import React from 'react';
import { Link, Match } from '@reach/router';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      if (isCurrent)
        return {
          style: {
            backgroundColor: 'rgba(0,0,0,0.3)',
          },
        };
    }}
  />
);

const NavItem = props => {
  const { routeTo, text } = props;

  return (
    <Match path={routeTo}>
      {({ match }) => (
        <NavLink className="nav-item" to={routeTo}>
          {text}
        </NavLink>
      )}
    </Match>
  );
};

export default NavItem;