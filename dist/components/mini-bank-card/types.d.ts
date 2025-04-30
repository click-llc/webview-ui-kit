import { bankLogos, cardTypeIcons } from './constants';
export type BankCode = keyof typeof bankLogos;
export type CardType = keyof typeof cardTypeIcons;
export type MiniCardProps = {
    bankCode: BankCode;
    cardNum: string;
    cardType: CardType;
    className?: string;
    disabled?: boolean;
};
