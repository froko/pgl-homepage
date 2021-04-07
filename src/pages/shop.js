import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import tw from 'twin.macro';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Content from '../components/shop/content';
import Form from '../components/shop/form';
import NoContent from '../components/shop/no-content';
import { Parallax, WhiteBackground } from '../components/styles';

const Shop = () => {
  const [shoppingBasket, setShoppingBasket] = useState([]);
  const [articles, setArticles] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const HeaderMargin = tw.div`pt-16`;
  const ShopContent = tw.div`bg-white max-w-lg md:mx-auto px-2 min-h-remaining-screen`;

  useEffect(() => {
    setShoppingBasket(JSON.parse(sessionStorage.getItem('shopping-basket')) ?? []);
  }, []);

  useEffect(() => {
    let groupedItems = [];
    let price = 0;

    shoppingBasket.reduce((prev, current) => {
      if (!prev[current.article]) {
        prev[current.article] = { article: current.article, quantity: 0, price: 0 };
        groupedItems.push(prev[current.article]);
      }

      prev[current.article].quantity += 1;
      prev[current.article].price += current.price;
      price += current.price;

      return prev;
    }, {});

    setArticles(groupedItems);
    setTotalCost(price);
  }, [shoppingBasket]);

  const removeFromShoppingBasket = (article) => {
    setShoppingBasket(shoppingBasket.filter((b) => b.article !== article));
    sessionStorage.setItem('shopping-basket', JSON.stringify(shoppingBasket.filter((b) => b.article !== article)));
  };

  const clearBasket = () => {
    navigate('/thank-you');
    setShoppingBasket([]);
    sessionStorage.removeItem('shopping-basket');
  };

  return (
    <Layout basket={shoppingBasket}>
      <SEO title="Shop" />
      <Parallax>
        <HeaderMargin>
          <WhiteBackground title="Shop">
            {articles.length > 0 ? (
              <ShopContent>
                <Content articles={articles} totalCost={totalCost} remove={removeFromShoppingBasket} />
                <Form articles={articles} totalCost={totalCost} onFormSubmit={clearBasket} />
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
