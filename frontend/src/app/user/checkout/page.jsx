// 'use client';
// import React, { useState } from 'react';
// import useCartContext from '@/context/CartContext';
// import axios from 'axios';
// import { jsPDF } from 'jspdf';
// import 'jspdf-autotable';

// const CheckoutPage = () => {
//   const { cartItems, getCartTotal, clearCart } = useCartContext();
//   const [loading, setLoading] = useState(false);
//   const [orderSuccess, setOrderSuccess] = useState(false);
//   const [orderId, setOrderId] = useState(null);
//   const [error, setError] = useState('');
//   const [deliveryAddress, setDeliveryAddress] = useState('');
//   const [contactNumber, setContactNumber] = useState('');

//   const handleConfirmOrder = async () => {
//     if (cartItems.length === 0) {
//       setError('Your cart is empty!');
//       return;
//     }
//     if (!deliveryAddress.trim()) {
//       setError('Please provide a delivery address.');
//       return;
//     }
//     if (!contactNumber.trim()) {
//       setError('Please provide a contact number.');
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       const orderPayload = {
//         deliveryAddress,
//         contactNumber,
//         itemList: cartItems.map((item) => ({
//           productId: item._id,
//           title: item.title,
//           quantity: item.quantity,
//           unitPrice: item.pprice,
//           subtotal: item.pprice * item.quantity,
//         })),
//       };

//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/order/add`,
//         orderPayload
//       );

//       setOrderId(response.data._id);
//       setOrderSuccess(true);
//       generateBillPDF(orderPayload, response.data._id);
//       clearCart();
//       setDeliveryAddress('');
//       setContactNumber('');
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.message || 'Failed to place order');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const generateBillPDF = (order, savedOrderId) => {
//     const doc = new jsPDF();
//     doc.text('Order Invoice', 14, 20);
//     doc.text(`Order ID: ${savedOrderId}`, 14, 28);
//     doc.text(`Delivery Address: ${order.deliveryAddress}`, 14, 36);
//     doc.text(`Contact Number: ${order.contactNumber}`, 14, 44);

//     const tableData = order.itemList.map((item, index) => [
//       index + 1,
//       item.title,
//       item.quantity,
//       `$${item.unitPrice.toFixed(2)}`,
//       `$${item.subtotal.toFixed(2)}`,
//     ]);

//     doc.autoTable({
//       head: [['#', 'Item', 'Qty', 'Unit Price', 'Subtotal']],
//       body: tableData,
//       startY: 52,
//     });

//     doc.text(
//       `Total: $${getCartTotal().toFixed(2)}`,
//       14,
//       doc.lastAutoTable.finalY + 10
//     );
//     doc.text(
//       `Date: ${new Date().toLocaleString()}`,
//       14,
//       doc.lastAutoTable.finalY + 20
//     );

//     doc.save(`invoice-${Date.now()}.pdf`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>

//       {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//       {orderSuccess && (
//         <p className="text-green-600 text-center mb-4">
//           Order placed successfully! Invoice downloaded.
//         </p>
//       )}

//       {cartItems.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty.</p>
//       ) : (
//         <div className="max-w-3xl mx-auto bg-white shadow rounded p-6">
//           <div className="mb-4">
//             <label className="block font-medium mb-1">Delivery Address</label>
//             <textarea
//               className="w-full border rounded px-3 py-2"
//               value={deliveryAddress}
//               onChange={(e) => setDeliveryAddress(e.target.value)}
//               rows={3}
//               placeholder="Enter delivery address"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block font-medium mb-1">Contact Number</label>
//             <input
//               type="text"
//               className="w-full border rounded px-3 py-2"
//               value={contactNumber}
//               onChange={(e) => setContactNumber(e.target.value)}
//               placeholder="Enter contact number"
//               required
//             />
//           </div>

//           <table className="w-full text-left border-collapse mt-4">
//             <thead>
//               <tr>
//                 <th className="border-b py-2">Item</th>
//                 <th className="border-b py-2">Qty</th>
//                 <th className="border-b py-2">Unit Price</th>
//                 <th className="border-b py-2">Subtotal</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item) => (
//                 <tr key={item._id}>
//                   <td className="border-b py-2">{item.title}</td>
//                   <td className="border-b py-2">{item.quantity}</td>
//                   <td className="border-b py-2">${item.pprice.toFixed(2)}</td>
//                   <td className="border-b py-2">
//                     ${(item.pprice * item.quantity).toFixed(2)}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div className="text-right mt-4 font-bold text-lg">
//             Total: ${getCartTotal().toFixed(2)}
//           </div>

//           <button
//             onClick={handleConfirmOrder}
//             disabled={loading}
//             className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
//           >
//             {loading ? 'Placing Order...' : 'Confirm Order'}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;

// 'use client';
// import React, { useState } from 'react';
// import useCartContext from '@/context/CartContext';
// import axios from 'axios';
// import { jsPDF } from 'jspdf';
// import 'jspdf-autotable';

// const CheckoutPage = () => {
//   const { cartItems, getCartTotal, clearCart } = useCartContext();
//   const [loading, setLoading] = useState(false);
//   const [orderSuccess, setOrderSuccess] = useState(false);
//   const [orderId, setOrderId] = useState(null);
//   const [error, setError] = useState('');
//   const [deliveryAddress, setDeliveryAddress] = useState('');
//   const [contactNumber, setContactNumber] = useState('');

//   const handleConfirmOrder = async () => {
//     // Reset states
//     setError('');
//     setOrderSuccess(false);
//     setOrderId(null);

//     if (cartItems.length === 0) {
//       setError('Your cart is empty!');
//       return;
//     }
//     if (!deliveryAddress.trim()) {
//       setError('Please provide a delivery address.');
//       return;
//     }
//     if (!contactNumber.trim()) {
//       setError('Please provide a contact number.');
//       return;
//     }

//     setLoading(true);

//     try {
//       const orderPayload = {
//         deliveryAddress,
//         contactNumber,
//         itemList: cartItems.map((item) => ({
//           productId: item._id,
//           title: item.title,
//           quantity: item.quantity,
//           unitPrice: item.pprice,
//           subtotal: item.pprice * item.quantity,
//         })),
//       };

//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/order/add`,
//         orderPayload
//       );

//       if (response.data?._id) {
//         setOrderId(response.data._id);
//         setOrderSuccess(true);
//         generateBillPDF(orderPayload, response.data._id);
//         clearCart();
//         setDeliveryAddress('');
//         setContactNumber('');
//       } else {
//         throw new Error('Invalid response from server');
//       }
//     } catch (err) {
//       console.error('Order error:', err);
//       setError(err.response?.data?.message || 'Failed to place order. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const generateBillPDF = (order, savedOrderId) => {
//     const doc = new jsPDF();
//     doc.text('Order Invoice', 14, 20);
//     doc.text(`Order ID: ${savedOrderId}`, 14, 28);
//     doc.text(`Delivery Address: ${order.deliveryAddress}`, 14, 36);
//     doc.text(`Contact Number: ${order.contactNumber}`, 14, 44);

//     const tableData = order.itemList.map((item, index) => [
//       index + 1,
//       item.title,
//       item.quantity,
//       `$${item.unitPrice.toFixed(2)}`,
//       `$${item.subtotal.toFixed(2)}`,
//     ]);

//     doc.autoTable({
//       head: [['#', 'Item', 'Qty', 'Unit Price', 'Subtotal']],
//       body: tableData,
//       startY: 52,
//     });

//     doc.text(
//       `Total: $${getCartTotal().toFixed(2)}`,
//       14,
//       doc.lastAutoTable.finalY + 10
//     );
//     doc.text(
//       `Date: ${new Date().toLocaleString()}`,
//       14,
//       doc.lastAutoTable.finalY + 20
//     );

//     doc.save(`invoice-${savedOrderId}.pdf`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>

//       {error && !orderSuccess && (
//         <p className="text-red-500 text-center mb-4">{error}</p>
//       )}
//       {orderSuccess && !error && (
//         <p className="text-green-600 text-center mb-4">
//           Order placed successfully! Invoice downloaded.
//         </p>
//       )}

//       {cartItems.length === 0 && !orderSuccess ? (
//         <p className="text-center text-gray-500">Your cart is empty.</p>
//       ) : (
//         <div className="max-w-3xl mx-auto bg-white shadow rounded p-6">
//           <div className="mb-4">
//             <label className="block font-medium mb-1">Delivery Address</label>
//             <textarea
//               className="w-full border rounded px-3 py-2"
//               value={deliveryAddress}
//               onChange={(e) => setDeliveryAddress(e.target.value)}
//               rows={3}
//               placeholder="Enter delivery address"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block font-medium mb-1">Contact Number</label>
//             <input
//               type="text"
//               className="w-full border rounded px-3 py-2"
//               value={contactNumber}
//               onChange={(e) => setContactNumber(e.target.value)}
//               placeholder="Enter contact number"
//               required
//             />
//           </div>

//           <table className="w-full text-left border-collapse mt-4">
//             <thead>
//               <tr>
//                 <th className="border-b py-2">Item</th>
//                 <th className="border-b py-2">Qty</th>
//                 <th className="border-b py-2">Unit Price</th>
//                 <th className="border-b py-2">Subtotal</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item) => (
//                 <tr key={item._id}>
//                   <td className="border-b py-2">{item.title}</td>
//                   <td className="border-b py-2">{item.quantity}</td>
//                   <td className="border-b py-2">${item.pprice.toFixed(2)}</td>
//                   <td className="border-b py-2">
//                     ${(item.pprice * item.quantity).toFixed(2)}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div className="text-right mt-4 font-bold text-lg">
//             Total: ${getCartTotal().toFixed(2)}
//           </div>

//           <button
//             onClick={handleConfirmOrder}
//             disabled={loading}
//             className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
//           >
//             {loading ? 'Placing Order...' : 'Confirm Order'}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;


'use client';
import React, { useState } from 'react';
import useCartContext from '@/context/CartContext';
import axios from 'axios';

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCartContext();
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleConfirmOrder = async () => {
    // Reset states
    setError('');
    setOrderSuccess(false);
    setOrderId(null);

    if (cartItems.length === 0) {
      setError('Your cart is empty!');
      return;
    }
    if (!deliveryAddress.trim()) {
      setError('Please provide a delivery address.');
      return;
    }
    if (!contactNumber.trim()) {
      setError('Please provide a contact number.');
      return;
    }

    setLoading(true);

    try {
      const orderPayload = {
        deliveryAddress,
        contactNumber,
        itemList: cartItems.map((item) => ({
          productId: item._id,
          title: item.title,
          quantity: item.quantity,
          unitPrice: item.pprice,
          subtotal: item.pprice * item.quantity,
        })),
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/order/add`,
        orderPayload
      );

      if (response.data?._id) {
        setOrderId(response.data._id);
        setOrderSuccess(true);
        clearCart();
        setDeliveryAddress('');
        setContactNumber('');
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (err) {
      console.error('Order error:', err);
      setError(err.response?.data?.message || 'Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>

      {error && !orderSuccess && (
        <p className="text-red-500 text-center mb-4">{error}</p>
      )}
      {orderSuccess && !error && (
        <p className="text-green-600 text-center mb-4">
          Order placed successfully!
        </p>
      )}

      {cartItems.length === 0 && !orderSuccess ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow rounded p-6">
          <div className="mb-4">
            <label className="block font-medium mb-1">Delivery Address</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              rows={3}
              placeholder="Enter delivery address"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Contact Number</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="Enter contact number"
              required
            />
          </div>

          <table className="w-full text-left border-collapse mt-4">
            <thead>
              <tr>
                <th className="border-b py-2">Item</th>
                <th className="border-b py-2">Qty</th>
                <th className="border-b py-2">Unit Price</th>
                <th className="border-b py-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id}>
                  <td className="border-b py-2">{item.title}</td>
                  <td className="border-b py-2">{item.quantity}</td>
                  <td className="border-b py-2">${item.pprice.toFixed(2)}</td>
                  <td className="border-b py-2">
                    ${(item.pprice * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-right mt-4 font-bold text-lg">
            Total: ${getCartTotal().toFixed(2)}
          </div>

          <button
            onClick={handleConfirmOrder}
            disabled={loading}
            className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? 'Placing Order...' : 'Confirm Order'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;