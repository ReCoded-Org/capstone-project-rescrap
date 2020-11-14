import React from 'react';
import Title from './../Title/Title';
import SubTitle from './../SubTitle/SubTitle';
import { useTranslation } from 'react-i18next';


const Statistics = ({footer}) => {
  const {t, i18n}=useTranslation();

  const statisticsItems = [
    {
      icon: <i class="fas fa-globe-asia"></i>,
      title: '150+',
      subTitle: t('translation:pages.home.footer.Subtitle1') ,
    },
    {
      icon: <i class="fas fa-chart-bar"></i>,
      title: '4000+',
      subTitle:  t('translation:pages.home.footer.Subtitle2') ,
    },
    {
      icon: <i class="fas fa-shopping-cart"></i>,
      title: '2.5m',
      subTitle:  t('translation:pages.home.footer.Subtitle3') ,
    },
  ];
  
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
