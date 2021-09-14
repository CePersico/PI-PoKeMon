import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render } from '@testing-library/react';

import { PokeCreated } from "../components/PokemonsCreated";
import configureStore from "redux-mock-store";


configure({ adapter: new Adapter() });

describe("<PokeCreated/>", () => {
  describe("Estructura", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PokeCreated/>);
    });
    it("Render un <form>", () => {
      expect(wrapper.find("form")).toHaveLength(1);
    });

    it('Renderiza un label con text:"Image: "', () => {
      
      expect(wrapper.find("label").at(0).text()).toEqual("Image: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "sprite"', () => {
      expect(wrapper.find('input[name="image"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Name: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(1).text()).toEqual("Name: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "name"', () => {
      expect(wrapper.find('textarea[name="name"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Hp: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(2).text()).toEqual("Hp: ");
    });

   it('Renderiza un input con la propiedad "name" igual a "hp"', () => {
      expect(wrapper.find('input[name="hp"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Attack: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("Attack: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "attack"', () => {
      expect(wrapper.find('input[name="attack"]')).toHaveLength(1);
    });
    it('Renderiza un label con el texto igual a "Defense: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("Defense: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "defense"', () => {
      expect(wrapper.find('input[name="defense"]')).toHaveLength(1);
    });
    it('Renderiza un label con el texto igual a "Speed: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("Speed: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "speed"', () => {
      expect(wrapper.find('input[name="speed"]')).toHaveLength(1);
    });
    it('Renderiza un label con el texto igual a "Height: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("Height: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "height"', () => {
      expect(wrapper.find('input[name="height"]')).toHaveLength(1);
    });
    it('Renderiza un label con el texto igual a "Weight: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("Weight: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "weight"', () => {
      expect(wrapper.find('input[name="weight"]')).toHaveLength(1);
    });
    it('Renderiza un label con el texto igual a "Types: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("Types: ");
    });

    it('Renderiza un boton con el "type" "submit"', () => {
      expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
    });
  })
})