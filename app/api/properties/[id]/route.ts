// pages/api/properties/[id].ts

import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/config/db";
import PropertyModel from "@/models/PropertyModel";

connectDB();
export const GET = async (req: NextApiRequest, { params }: any) => {
  // Get a single property by ID
  try {
    const property = await PropertyModel.findById(params.id as string);
    if (!property) {
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
        data: property,
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
