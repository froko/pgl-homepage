import React from 'react';
import { navigate } from 'gatsby';
import { FaShoppingBasket } from 'react-icons/fa';
import tw from 'twin.macro';

const ShoppingBasket = ({ basket }) => {
  const Button = tw.button`relative mr-6 md:mr-8`;
  const Icon = tw(FaShoppingBasket)`h-6 w-auto fill-current`;
  const BadgeContainer = tw.span`absolute inset-0 mt-2 -mr-5`;
  const Badge = tw.div`inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-pgl-blue text-white`;

  return basket?.length > 0 ? (
    <Button onClick={() => navigate('/shop')}>
      <Icon />
      <BadgeContainer>
        <Badge>{basket?.length}</Badge>
      </BadgeContainer>
    </Button>
  ) : null;
};

export default ShoppingBasket;
