import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import tw from 'twin.macro';

const Content = ({ articles, totalCost, remove }) => {
  const Text = tw.p``;
  const BoldText = tw.p`font-bold`;
  const LineBreak = tw.br``;

  return (
    <>
      <Text>Sie haben folgende Artikel in Ihrem Warenkorb:</Text>
      <LineBreak />

      <div className="grid grid-cols-6 gap-2">
        {articles.map((item) => (
          <React.Fragment key={item.article}>
            <div className="col-span-3">
              {item.quantity}x {item.article}
            </div>
            <div className="text-right">CHF</div>
            <div className="text-right">{item.price.toFixed(2)}</div>
            <div className="text-center md:text-right">
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
    </>
  );
};

export default Content;
