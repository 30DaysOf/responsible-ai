import clsx from 'clsx';
import Heading from '@theme/Heading';
import Image from '@theme/IdealImage';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Exercise 1',
    img: require('@site/static/img/landing/rai-collection-1.jpeg').default,
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 2',
    img: require('@site/static/img/landing/rai-collection-2.jpeg').default,
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 3',
    img: require('@site/static/img/landing/rai-collection-3.jpeg').default,
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Image className={styles.featureSvg} role="img" img={img}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
