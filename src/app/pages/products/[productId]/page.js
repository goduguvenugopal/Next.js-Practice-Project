import ProductOverView from "./ProductOverView";

export async function generateMetadata({ params }) {
  const { productId } = await params;

  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch metadata for product ${productId}`);
    }

    const product = await res.json();

    return {
      title: product?.title,
      description: product?.description,
    };
  } catch (error) {
    console.error("Metadata error:", error);
    return {
      title: "Product not found",
      description: "Unable to load product details.",
    };
  }
}

export default async function fetchSingleProduct({ params }) {
  const { productId } = await params;
  console.log(await params);
  

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const product = await res.json();

    return <ProductOverView overViewProduct={product} />;
  } catch (error) {
    console.error("Fetch error:", error);
    return <p className="text-red-600">Failed to load product details.</p>;
  }
}
