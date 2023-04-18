import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import {useHistory, useLocation} from '@docusaurus/router';

import TEAM_MEMBERS, {TeamMember} from '../../data/teamMembers';
import styles from './styles.module.css';
import {buildProfileURL} from '@site/src/components/Team';

function Profile({name, email, instution, picture, bio}: TeamMember) {
  return (
    <div className="row">
      <div className={clsx('col col--4')}>
        <img className={styles.profilePicture} src={picture} alt={name} />
      </div>
      <div className={clsx('col col--8')}>
        <div className="avatar">
          <div className="avatar__intro">
            <div className="avatar__name">{name}</div>
            <small className={clsx('avatar__subtitle')}>{instution}</small>
            <small className={clsx('avatar__subtitle')}>{email}</small>
            <small className={clsx('avatar__subtitle', styles.profileText)}>
              {bio}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team(): JSX.Element {
  const location = useLocation();
  const history = useHistory();

  let idxStr = new URLSearchParams(location.search).get('idx');
  if (idxStr === null) {
    idxStr = '0';
  }
  let idx = parseInt(idxStr);
  if (Number.isNaN(idx) || idx < 0 || idx >= TEAM_MEMBERS.length) {
    idx = 0;
  }

  return (
    <Layout
      title="Team Members"
      description="Team members of Carbon Image project">
      <main>
        <div className="container">
          <div className="row padding-top--sm">
            <div className="col">
              <ul className="pills">
                {TEAM_MEMBERS.map((member, i) => (
                  <li
                    className={clsx(
                      'pills__item',
                      i == idx && 'pills__item--active',
                    )}
                    onClick={() => {
                      history.push(
                        buildProfileURL(location.search, i, member.name),
                      );
                    }}>
                    {member.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Profile {...TEAM_MEMBERS[idx]} />
        </div>
      </main>
    </Layout>
  );
}
