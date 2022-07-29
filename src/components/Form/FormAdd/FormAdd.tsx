import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store/hooks";
import { addLocationThunk } from "../../../redux/thunks/locationsThunk";
import { LocationData } from "../../../types/types";

interface coordinatesData {
  coordinates: number[];
}

const FormAdd = ({ coordinates }: coordinatesData): JSX.Element => {
  const blankFields = {
    name: "",
    description: "",
    media: "",
    type: "",
  };

  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user);

  const [formData, setFormData] = useState(blankFields);

  const changeData = (event: { target: { id: string; value: string } }) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = () => {
    setFormData(blankFields);
  };

  const submitData = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newLocationData: LocationData = {
      properties: {
        name: formData.name,
        description: formData.description,
        media: formData.media,
      },
      type: formData.type,
      geometry: {
        coordinates: coordinates,
      },
      owner: userData.id,
    };

    await dispatch(addLocationThunk(newLocationData));
    resetForm();
  };

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={submitData}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={formData.name}
          onChange={changeData}
          placeholder={"Name the place"}
        ></input>

        <label htmlFor="description">Description</label>
        <input
          id="description"
          value={formData.description}
          onChange={changeData}
          placeholder={"Describe the place"}
        ></input>

        <label htmlFor="media">Media</label>
        <input
          id="media"
          value={formData.media}
          onChange={changeData}
          placeholder={"Media of the place"}
        ></input>

        <label htmlFor="type">Type</label>
        <input
          id="type"
          value={formData.type}
          onChange={changeData}
          placeholder={"Type"}
        ></input>

        <button type="submit">Save Place</button>
      </form>
    </>
  );
};

export default FormAdd;
