import * as React from "react";

const Filters = () => {
  return (
    <>
      <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
        <div className="divide-y divide-gray-200 space-y-5">
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Categorías
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="categoria001"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  for="boxdulce001"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  Box dulce 01
                </label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="categoria002"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  for="boxdulce002"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  Box dulce 02
                </label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="categoria003"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  for="boxdulce003"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  Box dulce 03
                </label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="categoria004"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  for="boxdulce004"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  Box dulce 04
                </label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="categoria005"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  for="boxdulce005"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  Box dulce 05
                </label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="categoria006"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  for="boxdulce006"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  Box dulce 06
                </label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Productos
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="alfajores"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  for="alfajores"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  Alfajores
                </label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="lemonpie"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  for="lemonpie"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  Lemon Pie
                </label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="brownie"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  for="brownie"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  Brownie
                </label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cheesescon"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  for="cheesescon"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  Scon de queso
                </label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="conito"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  for="conito"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  Conito DDL
                </label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cinamonroll"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  for="cinamonroll"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  Roll de canela
                </label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Precio
            </h3>
            <div className="mt-4 flex items-center">
              <input
                type="text"
                className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                placeholder="min"
              />
              <span className="mx-3 text-gray-500">-</span>
              <input
                type="text"
                className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                placeholder="max"
              />
            </div>
          </div>
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              N° de Personas
            </h3>
            <div className="flex items-center gap-2">
              <div className="people-selector">
                <input
                  type="radio"
                  name="people"
                  className="hidden"
                  id="people-1"
                />
                <label
                  for="people-1"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  1
                </label>
              </div>
              <div className="people-selector">
                <input
                  type="radio"
                  name="people"
                  className="hidden"
                  id="people-2"
                />
                <label
                  for="people-2"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  2
                </label>
              </div>
              <div className="people-selector">
                <input
                  type="radio"
                  name="people"
                  className="hidden"
                  id="people-3"
                />
                <label
                  for="people-3"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  3
                </label>
              </div>
              <div className="people-selector">
                <input
                  type="radio"
                  name="people"
                  className="hidden"
                  id="people-5"
                />
                <label
                  for="people-5"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  5
                </label>
              </div>
              <div className="people-selector">
                <input
                  type="radio"
                  name="people"
                  className="hidden"
                  id="people-10"
                />
                <label
                  for="people-10"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  10
                </label>
              </div>
              <div className="people-selector">
                <input
                  type="radio"
                  name="people"
                  className="hidden"
                  id="people-20"
                />
                <label
                  for="people-20"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  20
                </label>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Sabor
            </h3>
            <div className="flex items-center gap-2">
              <div className="sabor-selector">
                <input
                  type="radio"
                  name="sabor"
                  className="hidden"
                  id="sabor-frutilla"
                />
                <label
                  for="sabor-frutilla"
                  className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm"
                ></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
