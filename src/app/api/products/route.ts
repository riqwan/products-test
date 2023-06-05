import { NextResponse } from 'next/server';

import { initialize as ProductModuleInitialize } from "@medusajs/product"

export async function GET(request: Request) {
  const productService = (global.productService ??=
    await ProductModuleInitialize());

  const data = await productService.list()

  return NextResponse.json({ products: data });
}