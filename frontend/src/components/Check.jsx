import React, { useEffect, useState } from 'react';

function Check(props) {
    const [isMonthly, setIsMonthly] = useState(true);

    useEffect(() => {
      Paddle.Environment.set("sandbox");
      Paddle.Initialize({
        token: "test_7d279f61a3499fed520f7cd8c08", // replace with a client-side token
        eventCallback: updateTable
      });
      openCheckout(monthItemsList);
    }, []);
  
    function updateTable(event) {
      if (!event.name) {
        return;
      }
  
      console.log(event);
  
      let items = event.data.items;
      let totals = event.data.totals;
      let recurringTotals = event.data.recurring_totals;
  
      updateItemsTable(items);
      updateSummaryTable(totals, recurringTotals);
    }
  
    function updateItemsTable(items) {
      const itemsTableBody = document.querySelector('.items-table tbody');
      itemsTableBody.innerHTML = '';
  
      items.forEach(item => {
        const newRow = createTableRow(item.product.name, item.price_name, item.quantity, item.totals.subtotal);
        itemsTableBody.appendChild(newRow);
      });
    }
  
    function createTableRow(productName, priceName, quantity, total) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${productName}</td>
        <td>${priceName}</td>
        <td>${quantity}</td>
        <td>${total.toFixed(2)}</td>
      `;
      return newRow;
    }
  
    function updateSummaryTable(totals, recurringTotals) {
      document.getElementById('oneTimeTotal').textContent = (totals.subtotal - recurringTotals.subtotal).toFixed(2);
      document.getElementById('recurringTotal').textContent = recurringTotals.subtotal.toFixed(2);
      document.getElementById('discountTotal').textContent = totals.discount.toFixed(2);
      document.getElementById('taxTotal').textContent = totals.tax.toFixed(2);
      document.getElementById('totalToday').textContent = totals.total.toFixed(2);
    }
  
    const monthItemsList = [
      {
        priceId: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
        quantity: 10
      },
      {
        priceId: 'pri_01gsz95g2zrkagg294kpstx54r',
        quantity: 1
      },
      {
        priceId: 'pri_01gsz98e27ak2tyhexptwc58yk',
        quantity: 1
      }
    ];
  
    const yearItemsList = [
      {
        priceId: 'pri_01gsz8z1q1n00f12qt82y31smh',
        quantity: 10
      },
      {
        priceId: 'pri_01gsz96z29d88jrmsf2ztbfgjg',
        quantity: 1
      },
      {
        priceId: 'pri_01gsz98e27ak2tyhexptwc58yk',
        quantity: 1
      }
    ];
  
    function openCheckout(items) {
      Paddle.Checkout.open({
        settings: {
          displayMode: "inline",
          frameTarget: "checkout-container",
          frameInitialHeight: "450",
          frameStyle: "width: 100%; min-width: 312px; background-color: transparent; border: none;"
        },
        items: items
      });
    }
  
    function switchPlan() {
      let updatedItems = isMonthly ? yearItemsList : monthItemsList;
      Paddle.Checkout.updateCheckout({
        items: updatedItems
      });
      setIsMonthly(!isMonthly);
    }
  
    return (
      <div className="page-container" style={{ maxWidth: '1000px', margin: '0 auto 2em auto', padding: '1em', textAlign: 'center' }}>
        <h1>Sign up now</h1>
        <div className="grid" style={{ display: 'block' }}>
          <div className="checkout-container" style={{ padding: '1rem' }}></div>
          <div style={{ padding: '1rem' }}>
            <h3>Items</h3>
            <table className="items-table" style={{ fontSize: 'smaller' }}>
              <thead>
                <tr>
                  <th>Product name</th>
                  <th>Price name</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td>0</td>
                  <td>00.00</td>
                </tr>
              </tbody>
            </table>
            <h3>Totals</h3>
            <table>
              <tbody>
                <tr>
                  <td>One-time charges</td>
                  <td id="oneTimeTotal">0.00</td>
                </tr>
                <tr>
                  <td>Recurring charges</td>
                  <td id="recurringTotal">0.00</td>
                </tr>
                <tr>
                  <td>Discount</td>
                  <td id="discountTotal">0.00</td>
                </tr>
                <tr>
                  <td>Taxes</td>
                  <td id="taxTotal">0.00</td>
                </tr>
                <tr>
                  <td>Total today</td>
                  <td id="totalToday">0.00</td>
                </tr>
              </tbody>
            </table>
            <p>
              <a href="#" onClick={switchPlan}><b>Switch plan</b></a>
            </p>
          </div>
        </div>
        <footer>
          <hr />
          <p><small>
            For the tutorial, check out:
            <a href="https://developer.paddle.com/build/checkout/build-branded-inline-checkout?utm_source=dx&utm_medium=codepen">Build an inline checkout</a> -
            <a href="https://developer.paddle.com/?utm_source=dx&utm_medium=codepen">
              developer.paddle.com
            </a>
          </small></p>
        </footer>
      </div>
    );
}

export default Check