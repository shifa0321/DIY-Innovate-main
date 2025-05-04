'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import useCartContext from '@/context/CartContext';
import {
    IconTrash,
    IconMinus,
    IconPlus,
    IconArrowLeft
} from '@tabler/icons-react';

const CartPage = () => {
    const {
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        getCartTotal
    } = useCartContext();

    const router = useRouter();

    // Handle direct removal of item from cart
    const handleRemoveItem = (item) => {
        const updatedItem = { ...item };
        removeItemFromCart(updatedItem);
    };

    // Handle increasing quantity of item
    const handleIncreaseQuantity = (item) => {
        const updatedItem = { ...item };
        addItemToCart(updatedItem);
    };

    // Proceed to checkout
    const handleCheckout = () => {
        router.push('/user/checkout');
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
                        <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
                        <Link
                            href="/browse-product"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <IconArrowLeft className="mr-2" size={18} stroke={1.5} /> Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {cartItems.map((item) => (
                                            <tr key={item._id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <img
                                                            src={item.imageUrl}
                                                            alt={item.title}
                                                            className="h-16 w-16 rounded-md object-cover mr-4"
                                                        />
                                                        <div>
                                                            <div className="text-sm font-medium text-gray-900">{item.title}</div>
                                                            {item.size && (
                                                                <div className="text-sm text-gray-500">Size: {item.size}</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">${item.pprice}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center border rounded-md">
                                                        <button
                                                            onClick={() => handleRemoveItem(item)}
                                                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                                                        >
                                                            <IconMinus size={16} stroke={1.5} />
                                                        </button>
                                                        <span className="px-4 py-1">{item.quantity}</span>
                                                        <button
                                                            onClick={() => handleIncreaseQuantity(item)}
                                                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                                                        >
                                                            <IconPlus size={16} stroke={1.5} />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        ${(item.pprice * item.quantity).toFixed(2)}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-6 flex justify-between">
                                <Link
                                    href="/browse-product"
                                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                >
                                    <IconArrowLeft className="mr-2" size={18} stroke={1.5} /> Continue Shopping
                                </Link>

                                <button
                                    onClick={clearCart}
                                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
                                >
                                    <IconTrash className="mr-2" size={18} stroke={1.5} /> Clear Cart
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>

                            <div className="mb-4 pb-4 border-b">
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">Items ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</span>
                                    <span className="font-medium">${getCartTotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-medium">Free</span>
                                </div>
                            </div>

                            <div className="flex justify-between mb-6">
                                <span className="text-lg font-semibold">Total</span>
                                <span className="text-lg font-bold">${getCartTotal().toFixed(2)}</span>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;