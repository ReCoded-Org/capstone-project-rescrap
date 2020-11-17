import React from 'react';
import { useTranslation } from 'react-i18next';

const ShopSearch = ({ searchText,text }) => {
  const {t}=useTranslation();

 

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-green-500 py-2">
          <input
            onChange={(e) => searchText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-600 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder={ t('translation:pages.shop.shopsearch.placeholder') }
            value={text}
          />
          {/* <button
            className="flex-shrink-0 bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            { t('translation:pages.shop.shopsearch.search-btn') }
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default ShopSearch;
