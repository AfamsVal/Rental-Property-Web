// pages/api/properties/[id].ts

import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/config/db";
import PropertyModel from "@/models/PropertyModel";

connectDB();
export const GET = async () => {
  // Get all properties
  try {
    const properties = await PropertyModel.find();
    return new Response(
      JSON.stringify({
        success: true,
        data: properties,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Server Error",
      }),
      { status: 500 }
    );
  }
};

export const PUT = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  // Update a property
  try {
    const updatedProperty = await PropertyModel.findByIdAndUpdate(
      id as string,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProperty) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Property not found",
        }),
        { status: 200 }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        data: updatedProperty,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Server Error",
      }),
      { status: 500 }
    );
  }
};

export const POST = async (req: any, res: NextApiResponse) => {
  // Create a new property
  try {
    const formData = await req.formData();
    const amenities = await formData.getAll("amenities");
    const images = await formData
      .getAll("images")
      .filter((image: any) => image.name !== "");

    console.log("Amenities", amenities);
    console.log("Images", images);

    // const property = await PropertyModel.create(req.body);
    // return new Response(
    //   JSON.stringify({
    //     success: true,
    //     data: property,
    //   }),
    //   { status: 201 }
    // );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Server Error",
      }),
      { status: 500 }
    );
  }
};

export const DELETE = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  // Delete a property
  try {
    const deletedProperty = await PropertyModel.findByIdAndDelete(id as string);
    if (!deletedProperty) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Property not found",
        }),
        { status: 200 }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        data: {},
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Server Error",
      }),
      { status: 500 }
    );
  }
};
