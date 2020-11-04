import React from 'react';
import Title from './../Title/Title';
import SubTitle from './../SubTitle/SubTitle';
const statisticsItems = [
  {
    icon: <i class="fas fa-globe-asia"></i>,
    title: '150+',
    subTitle: 'Countries',
  },
  {
    icon: <i class="fas fa-chart-bar"></i>,
    title: '4000+',
    subTitle: 'Registered businesses',
  },
  {
    icon: <i class="fas fa-shopping-cart"></i>,
    title: '2.5m',
    subTitle: 'Pounds of listed material',
  },
];

const Statistics = ({footer}) => {
  return (
    <div>
    <div
      className="container sm:block md:flex justify-between"
      data-testid="statistics"
    >
      {statisticsItems.map((item, index) => {
        return (
          <div className="sm:my-3 flex-1 text-center px-4 py-2 m-2" key={index}>
            <div className="text-green-100 text-6xl">{item.icon}</div>
            <Title classes="" text={item.title} />
            <SubTitle classes="" text={item.subTitle} />
          </div>
        );
      })}
    </div>
    <div className="mt-16">{footer}</div>
    </div>
  );
};

export default Statistics;
