import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Description(): JSX.Element {
  return (
    <section id="description" className={clsx('padding-top--sm')}>
      <div className="container">
        <h1>Description</h1>
        <p>
          How visible is the carbon footprint of a building? This project
          focuses on analyzing the environmental impact of building construction
          during the early design stages by studying the visual cues in building
          representations, such as drawings and 3D models. By assessing the
          embodied carbon footprint of the building, the ai-powered assistant
          suggests eco-friendly plan solutions, when design alternations are
          still feasible and most effective.
        </p>
      </div>
    </section>
  );
}
