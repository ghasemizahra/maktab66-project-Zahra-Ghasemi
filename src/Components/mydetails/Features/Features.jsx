import React, { useState, useEffect } from "react";
import { separate, persinaDigit } from "../../../utils";
import httpService from "../../../services/HttpService";

const Features = ({ product }) => {
  const {
    name,
    categoryId,
    price,
    sizeId,
    colorId,
    count: maxQuantity,
  } = product;
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState();
  const [color, setColor] = useState();
  const [sizes, setSizes] = useState();
  let selectedSize = null;

  const handleClickQuntity = (num) => {
    if ((num === -1 && quantity > 1) || (num === 1 && quantity < maxQuantity)) {
      setQuantity(quantity + num);
    }
  };

  const handleClickSize = (id) => {
    selectedSize = id;
  };

  const handleRequestCategory = async () => {
    await httpService
      .get(`category?id=${categoryId}`)
      .then((res) => setCategory(res.data[0].name));
  };

  const handleRequestColor = async () => {
    await httpService
      .get(`color?id=${colorId}`)
      .then((res) => setColor(res.data[0]));
  };

  const handleRequestSize = async () => {
    const responses = await Promise.all(
      sizeId.map((sizeId) => {
        return httpService.get(`size?id=${sizeId}`).then((res) => res.data);
      })
    );
    setSizes(responses);
  };

  useEffect(() => {
    handleRequestCategory();
    handleRequestColor();
    sizeId && handleRequestSize();
  }, []);

  return (
    <>
      <h2 className="md:text-3xl text-2xl font-medium mb-4">{name}</h2>
      <div className="flex flex-row-reverse items-center">
        <span className="text-gray-800 ml-2"> دسته بندی</span>
        <span className="text-gray-600">{category}</span>
      </div>
      <div className="mt-4 space-x-2 flex flex-row-reverse">
        <span className="text-xl">{persinaDigit(separate(price))}</span>
        <span className="text-gray-800 pr-2">تومان</span>
      </div>
      <div className="mt-4 flex justify-between items-center flex-row-reverse">
        <h3 className="text-gray-800 mb-1">سایز</h3>
        <div className="flex items-center space-x-2">
          {sizes &&
            React.Children.toArray(
              sizes.map((size) => {
                return (
                  <button
                    className="text-sm border border-gray-200 rounded-sm h-8 w-8 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 focus:bg-primary focus:text-white"
                    onClick={() => handleClickSize(size[0].id)}
                  >
                    {persinaDigit(size[0].name)}
                  </button>
                );
              })
            )}
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center flex-row-reverse">
        <h3 className="text-gray-800 mb-1">رنگ</h3>
        <button
          className={'text-xs border border-gray-200 rounded-sm h-8 w-8 shadow-sm'}
          style={color && {backgroundColor: `${color.hex}`}}
        ></button>
      </div>
      <div className="mt-4 flex justify-between items-center flex-row-reverse">
        <h3 className="text-gray-800 mb-1">تعداد</h3>
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
          <button
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer text-primary hover:bg-gray-100 shadow-sm rounded-sm"
            onClick={() => handleClickQuntity(-1)}
          >
            -
          </button>
          <div className="h-8 w-10 flex items-center justify-center">
            {persinaDigit(quantity)}
          </div>
          <button
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer text-primary hover:bg-gray-100 shadow-sm rounded-sm"
            onClick={() => handleClickQuntity(1)}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Features;
