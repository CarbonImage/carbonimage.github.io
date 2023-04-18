import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import slugify from 'slugify';

import TEAM_MEMBERS from '@site/src/data/teamMembers';
import styles from './styles.module.css';

export function buildProfileURL(search: string, idx: number, name: string) {
  const searchParams = new URLSearchParams(search);
  searchParams.set('idx', String(idx));
  searchParams.set('name', slugify(name));
  return `/team?${searchParams.toString()}`;
}

function Avatar({idx, name, picture}) {
  const location = useLocation();
  return (
    <div className={clsx('col col--3 padding--sm')}>
      <Link to={buildProfileURL(location.search, idx, name)}>
        <div className="avatar avatar--vertical">
          <img
            className={clsx(
              'avatar__photo avatar__photo--xl',
              styles.profilePicture,
            )}
            src={picture}
            alt={name}
          />
        </div>
      </Link>
    </div>
  );
}

export default function Team(): JSX.Element {
  return (
    <section id="team">
      <div className="container">
        <h1>Team Members</h1>
        <div className="row">
          {TEAM_MEMBERS.map((member, idx) => (
            <Avatar
              key={idx}
              idx={idx}
              name={member.name}
              picture={member.picture}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
