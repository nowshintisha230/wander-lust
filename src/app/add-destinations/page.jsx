"use client";

import {
  Button,
  Card,
  FieldError,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";

import React from "react";

const AddDestinationPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const destination = Object.fromEntries(formData.entries());

    console.log(destination);

    try {
      const res = await fetch("http://localhost:5000/destination", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(destination),
      });

      const data = await res.json();

      console.log(data);

      alert("Destination Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold m-2">Add Destination</h1>

      <Card>
        <form onSubmit={onSubmit} className="p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="destinationName" isRequired>
                <Label>Destination Name</Label>

                <Input
                  name="destinationName"
                  placeholder="Bali Paradise"
                  className="rounded-2xl"
                />

                <FieldError />
              </TextField>
            </div>

            {/* Country */}
            <TextField name="country" isRequired>
              <Label>Country</Label>

              <Input
                name="country"
                placeholder="Indonesia"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* Category */}
            <div>
              <Label>Category</Label>

              <select
                name="category"
                required
                className="w-full border p-3 rounded-xl"
              >
                <option value="">Select Category</option>

                <option value="Beach">Beach</option>

                <option value="Mountain">Mountain</option>

                <option value="City">City</option>

                <option value="Adventure">Adventure</option>

                <option value="Cultural">Cultural</option>

                <option value="Luxury">Luxury</option>
              </select>
            </div>

            {/* Price */}
            <TextField name="price" type="number" isRequired>
              <Label>Price</Label>

              <Input
                name="price"
                type="number"
                placeholder="1299"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* Duration */}
            <TextField name="duration" isRequired>
              <Label>Duration</Label>

              <Input
                name="duration"
                placeholder="7 Days / 6 Nights"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* Departure Date */}
            <TextField name="departureDate" type="date" isRequired>
              <Label>Departure Date</Label>

              <Input
                name="departureDate"
                type="date"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* Image URL */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>

                <Input
                  name="imageUrl"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="rounded-2xl"
                />

                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>

                <TextArea
                  name="description"
                  placeholder="Describe the destination..."
                  className="rounded-3xl"
                />

                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Submit Button */}

          <Button
            type="submit"
            className="rounded-none w-full bg-cyan-500 text-white"
          >
            Add Destination
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddDestinationPage;