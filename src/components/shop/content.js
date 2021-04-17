import React from 'react';
import { navigate } from 'gatsby';
import { FaRegTrashAlt } from 'react-icons/fa';
import tw from 'twin.macro';

import Button from '../button';

const Content = ({ articles, totalCost, remove }) => {
  const Text = tw.p``;
  const BoldText = tw.p`font-bold`;
  const LineBreak = tw.br``;
  const Center = tw.div`text-center`;

  return (
    <>
      <Text>Du hast folgende Artikel in deinem Warenkorb:</Text>
      <LineBreak />

      <div className="grid grid-cols-6 gap-2">
        {articles.map((item) => (
          <React.Fragment key={item.article}>
            <div className="col-span-3">
              {item.quantity}x {item.article}
            </div>
            <div className="text-right">CHF</div>
            <div className="text-right">{item.price.toFixed(2)}</div>
            <div className="text-center">
              <button onClick={() => remove(item.article)}>
                <FaRegTrashAlt />
              </button>
            </div>
          </React.Fragment>
        ))}
        <div className="col-span-3">
          <BoldText>Total:</BoldText>
        </div>
        <div className="text-right">
          <BoldText>CHF</BoldText>
        </div>
        <div className="text-right">
          <BoldText>{totalCost.toFixed(2)}</BoldText>
        </div>
        <div />
      </div>
      <LineBreak />

      <Center>
        <Button onClick={() => navigate('/#shop')}>Zurück zum Shop</Button>
      </Center>

      <LineBreak />
    </>
  );
};

export default Content;
