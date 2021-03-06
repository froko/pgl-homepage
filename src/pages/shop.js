import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import tw from 'twin.macro';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Content from '../components/shop/content';
import Form from '../components/shop/form';
import NoContent from '../components/shop/no-content';
import { Parallax, WhiteBackground, HeaderMargin } from '../components/styles';

const Shop = () => {
  const [shoppingBasket, setShoppingBasket] = useState([]);
  const [articles, setArticles] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const ShopContent = tw.div`bg-white max-w-lg min-h-remaining-screen mx-2 md:mx-auto p-2 md:p-4 min-h-remaining-screen`;

  useEffect(() => {
    setShoppingBasket(JSON.parse(sessionStorage.getItem('shopping-basket')) ?? []);
  }, []);

  useEffect(() => {
    let groupedItems = [];
    let cost = 0;

    shoppingBasket.reduce((prev, current) => {
      if (!prev[current.article]) {
        prev[current.article] = { article: current.article, quantity: 0, price: 0 };
        groupedItems.push(prev[current.article]);
      }

      prev[current.article].quantity += 1;
      prev[current.article].price += current.price;
      cost += current.price;

      return prev;
    }, {});

    setArticles(groupedItems);
    setTotalCost(cost);
  }, [shoppingBasket]);

  const removeFromShoppingBasket = (article) => {
    const basketCopy = [...shoppingBasket];
    const index = shoppingBasket.findIndex((b) => b.article === article);

    if (index > -1) {
      basketCopy.splice(index, 1);
      setShoppingBasket(basketCopy);
      sessionStorage.setItem('shopping-basket', JSON.stringify(basketCopy));
    }
  };

  return (
    <Layout basket={shoppingBasket}>
      <Seo title="Shop" />
      <Parallax>
        <HeaderMargin>
          <WhiteBackground title="Warenkorb">
            {articles.length > 0 ? (
              <ShopContent>
                <Content articles={articles} totalCost={totalCost} remove={removeFromShoppingBasket} />
                <Form articles={articles} totalCost={totalCost} onFormSubmit={() => navigate('/thank-you')} />
              </ShopContent>
            ) : (
              <ShopContent>
                <NoContent />
              </ShopContent>
            )}
          </WhiteBackground>
        </HeaderMargin>
        <Parallax />
      </Parallax>
    </Layout>
  );
};

export default Shop;
