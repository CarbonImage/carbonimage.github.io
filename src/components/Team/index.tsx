import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Icon from '../More';
import More from '../More';

type TeamMember = {
  name: string;
  email: string;
  instution: string;
  picture: string;
  bio: string;
};

const TeamMembers: TeamMember[] = [
  {
    name: 'Seyran Khademi',
    email: 'S.Khademi@tudelft.nl',
    instution: 'TU Delft',
    picture: require('@site/static/img/team/seyran-khademi.png').default,
    bio: "Since April 2021, Seyran Khademi is an Assistant Professor at the faculty of Architecture and the Built Environment (ABE) and the co-director of AiDAPT lab (AI for Design, Analysis, and Optimization in Architecture and the Built Environment). She is working as an interdisciplinary researcher between Computer Vision lab and Architecture Department at ABE. Her research interest lies at the intersection of Data, Computer Vision and Deep Learning in the context of man-made imagery including illustrations and visual data for Architectural Design. In 2020 she was honored to be the research in residence fellow at the Royal Library of the Netherlands working on visual recognition for children's book collection. In 2017 she was appointed as an postdoctoral researcher at Computer vision lab working on the ArchiMediaL project, regarding the automatic detection of buildings and architectural elements in visual data focusing on Computer Vision and Deep Learning methods for archival data and street-view imagery. Seyran received her Ph.D. in signal processing and optimization in 2015 from TU Delft, followed by postdoctoral research on Intelligent Audio and Speech algorithms. She received her MSc. degree in Signal Processing from the Chalmers University of Technology in Gothenburg, Sweden, in 2010 and her BSc degree in telecommunications from the University of Tabriz in Iran.",
  },
  {
    name: 'Burak Yildiz',
    email: 'B.Yildiz@tudelft.nl',
    instution: 'TU Delft',
    picture: require('@site/static/img/team/burak-yildiz.png').default,
    bio: "Burak Yildiz is a researcher currently working at the AiDAPT Lab (AI for Design, Analysis, and Optimization in Architecture and the Built Environment) in Delft University of Technology. He received his Bachelor's degree in Mechanical Engineering from TOBB University of Economics and Technology, and his Master's degree in Computer Engineering from the same university. With expertise in a wide variety of topics, including blockchain, deep learning, and self-supervised learning for visual place recognition, Burak is at the forefront of cutting-edge research in the field of artificial intelligence. In addition to his work in academia, Burak is also an avid sports enthusiast, with a passion for basketball and fencing.",
  },
  {
    name: 'Fatemeh Mostafavi',
    email: 'F.Mostafavi@tudelft.nl',
    instution: 'TU Delft',
    picture: require('@site/static/img/team/fatemeh-mostafavi.png').default,
    bio: "Fatemeh Mostafavi is a PhD researcher in Theory of Architecture and Digital Culture Group at TU Delft. She is a member of AiDAPT lab, where data-driven intelligence and model-based engineering come together to support long-term, adaptive, and evidence-based abstraction and synthesis of structural and architectural choices, towards a more sustainable and resilient built environment. Her research proposes a machine learning (ML) framework to learn environmental features from the large-scale existing architectural plan data to augment the architect's intuition towards environmental design. The goal of her research is to develop AI-based decision-making model to assist in the analysis and generation of spatial zonings while taking environmental factors into consideration. Fatemeh obtained her master's degree in Building Science - Architecture and Energy at Shahid Beheshti University of Tehran in 2021. Formerly, she got her bachelor's degree in Mechanical Engineering at Shiraz University in 2017. She has cooperated in a number of research-based projects in the building physics area and co-authored the manuscript titled “Energy Efficiency and Carbon Emission of High-rise Buildings A Review: 2005-2020”, which was published in Building and Environment journal in 2021.",
  },
  {
    name: 'Javier Cuartero',
    email: 'j.Cuartero@kaanarchitecten.com',
    instution: 'Kaan Architecten',
    picture: require('@site/static/img/team/javier-cuartero.png').default,
    bio: "Javier Cuartero is a technology-oriented architectural practitioner at KAAN Architecten, where he has been working since 2018. During his time at the company, he has been involved in various Dutch and international projects, including the Schiphol New Terminal, Lumière, and RUG Onderwijscentrum. In his current role, Javier provides support for several office projects, ensuring that interdisciplinary and managerial workflows run smoothly and that project information models are delivered according to office and OpenBIM high-end standards. He is also responsible for delivering the office technology strategy and promoting the benefits of digital ways of working over traditional ones. Moreover, Javier provides training and mentoring to office assets, aiming to maximize their digital office knowledge, including BIM (Revit) software skills, visual programming, and document management. Javier's interest in design technologies and fascination with the ever-evolving digital transformation of the AEC industry motivate him to continuously develop new skills and knowledge at the interfaces between architecture and other disciplines. He is optimistic about the future, acknowledging that industry transformations will require changes in working practices towards a more open, transparent, sustainable, and collaborative approach, leading to significant cultural and mindset shifts.",
  },
];

function Avatar({name, email, instution, picture, bio}: TeamMember) {
  return (
    <div className={clsx('col col--3 padding--sm')}>
      <div className="avatar avatar--vertical">
        <img
          className={clsx(
            'avatar__photo avatar__photo--xl',
            styles.profilePicture,
          )}
          src={picture}
        />
        <div className="avatar__intro margin-top--sm">
          <div className="avatar__name">{name}</div>
          <small className={clsx('avatar__subtitle')}>{instution}</small>
          <small className={clsx('avatar__subtitle')}>{email}</small>
          <small className={clsx('avatar__subtitle', styles.profileText)}>
            <More text={bio} />
          </small>
        </div>
      </div>
    </div>
  );
}

export default function Team(): JSX.Element {
  return (
    <section id="team">
      <div className="container">
        <h1>Team</h1>
        <div className="row">
          {TeamMembers.map((props, idx) => (
            <Avatar key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
