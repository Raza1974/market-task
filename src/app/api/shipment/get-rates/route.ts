import { shipEngine } from "@/libs/helper/shipEngine";
import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe"

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,{
//   apiVersion: "2025-01-27.acacia",
// })

export async function POST(req: NextRequest) {
  const { shipToAddress, packages, name, orderItems, totalprice } = await req.json();


  try {
    if(!shipToAddress || !packages || !name || !orderItems|| !totalprice){
      return NextResponse.json(
              { message: "All fields are required." },
              { status: 400 }
            );

    }

    const shipmentDetails = await shipEngine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipToAddress,
        shipFrom: {
          name: "John Doe",
          phone: "+1 555 123 4567",
          addressLine1: "742 Evergreen Terrace",
          addressLine2: "Apt 101",
          cityLocality: "Springfield",
          stateProvince: "IL",
          postalCode: "62701",
          countryCode: "US",
          addressResidentialIndicator: "no",
        },
        packages: packages,
      },
      rateOptions: {
        carrierIds: [
          process.env.SHIPENGINE_FIRST_COURIER || "",
          process.env.SHIPENGINE_SECOND_COURIER || "",
          process.env.SHIPENGINE_THIRD_COURIER || "",
          process.env.SHIPENGINE_FOURTH_COURIER || "",
        ].filter(Boolean),
      },
    });

    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ["card"],
    //   mode: "payment",
    //   line_items: orderItems.map((product:any) => ({
    //     price_data: {
    //       currency: "usd",
    //       product_data: {
    //         name: product.name,
    //         // images: [product.image],
    //       },
    //       unit_amount: Math.round(product.price * 100),
    //     },
    //      quantity: product.quantity,
    //   })),
    //   success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
    // });
  
    // Save user to Sanity
        const result = await client.create({
          _type: "orderSummary",
          shipToAddress,
          packages,
          orderItems,
          totalprice,
          shipmentDetails: shipmentDetails,
          // stripeSessionId: session.id,


        });
        return NextResponse.json(
          { message: "Order placed successfully", user: result,
            //  url: session.url 
            },
          { status: 201 })
  } catch (error) {
    console.error("Error creating user:", error, "/ Stripe Checkout Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }


  // try {
  //   const shipmentDetails = await shipEngine.getRatesWithShipmentDetails({
  //     shipment: {
  //       shipTo: shipToAddress,
  //       shipFrom: {
  //         name: "John Doe",
  //         phone: "+1 555 123 4567",
  //         addressLine1: "742 Evergreen Terrace",
  //         addressLine2: "Apt 101",
  //         cityLocality: "Springfield",
  //         stateProvince: "IL",
  //         postalCode: "62701",
  //         countryCode: "US",
  //         addressResidentialIndicator: "no",
  //       },
  //       packages: packages,
  //     },
  //     rateOptions: {
  //       carrierIds: [
  //         process.env.SHIPENGINE_FIRST_COURIER || "",
  //         process.env.SHIPENGINE_SECOND_COURIER || "",
  //         process.env.SHIPENGINE_THIRD_COURIER || "",
  //         process.env.SHIPENGINE_FOURTH_COURIER || "",
  //       ].filter(Boolean),
  //     },
  //   });

  //   return new Response(JSON.stringify(shipmentDetails), { status: 200 });
  // } catch (error) {
  //   return new Response(JSON.stringify({ error: "An unknown error occurred." }), { status: 500 });
  // }
}