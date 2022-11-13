interface RateType {
  label: string;
  header: string;
  rate: string;
  discount: string;
  period: string;
  action: string;
  perc: string;
  rate_period: string;
}

export const rates: RateType[] = [
  {
    label: '1 месяц',
    header: 'Для тех, кто пробует',
    rate: '299 ₽',
    discount: '499 ₽',
    period: 'в месяц',
    action: 'Начать 7 дней бесплатно',
    perc: '',
    rate_period: 'Ежемесячная оплата',
  },
  {
    label: '1 год',
    header: 'Для тех, кто настроен серьезно',
    rate: '249 ₽',
    discount: '499 ₽',
    period: 'в месяц',
    action: 'Купить подписку',
    perc: '-50%',
    rate_period: 'При оплате 2990 ₽ за год',
  },
  {
    label: '50 лет',
    header: 'Для тех, кто ищет максимальную выгоду',
    rate: '41 ₽',
    discount: '499 ₽',
    period: 'в месяц',
    action: 'Купить подписку',
    perc: '-92%',
    rate_period: 'При оплате 24 990 ₽ навсегда',
  },
];
