import { SvgIcon } from '@/components/SvgIcon';
import CardsIcon from '../icons/cards.svg?react';
import ClickBoomIcon from '../icons/click-boom.svg?react';
import ClickPassIcon from '../icons/click-pass.svg?react';
import MainIcon from '../icons/main.svg?react';
import PaymentsIcon from '../icons/payments.svg?react';
import QRScannerIcon from '../icons/qr-scanner.svg?react';
import ReportsIcon from '../icons/reports.svg?react';
import ServicesIcon from '../icons/services.svg?react';
import TransfersIcon from '../icons/transfers.svg?react';

export const defaultMainMenu = [
  {
    label: 'Главный',
    icon: <SvgIcon icon={<MainIcon />} width={24} height={24} />,
    key: 'main',
  },
  {
    label: 'Оплата',
    icon: <SvgIcon icon={<PaymentsIcon />} width={24} height={20} />,
    key: 'payments',
    disabled: true,
  },
  {
    label: 'Отчёты',
    icon: <SvgIcon icon={<ReportsIcon />} width={23} height={24} />,
    key: 'reports',
  },
  {
    label: 'Сервисы',
    icon: <SvgIcon icon={<ServicesIcon />} width={22} height={22} />,
    key: 'services',
  },
  {
    label: 'Переводы',
    icon: <SvgIcon icon={<TransfersIcon />} width={22} height={24} />,
    key: 'transfers',
  },
];

export const defaultActionsMenu = [
  {
    label: 'Click\nPass',
    icon: <SvgIcon icon={<ClickPassIcon />} width={32} height={18} />,
    key: 'clickPass',
  },
  {
    label: 'Click\nBoom',
    icon: <SvgIcon icon={<ClickBoomIcon />} width={28} height={32} />,
    key: 'clickBoom',
  },
  {
    label: 'Карты\nи кошелёк',
    icon: <SvgIcon icon={<CardsIcon />} width={32} height={24} />,
    key: 'cards',
    disabled: true,
  },
  {
    label: 'Сканер\nQR',
    icon: <SvgIcon icon={<QRScannerIcon />} width={32} height={32} />,
    key: 'qr',
  },
];
