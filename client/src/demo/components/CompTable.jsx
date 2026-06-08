import { formatCurrency, formatShortDate } from "../utils/formatters";
import "./CompTable.css";

/** One row in the comp transactions table. */
function CompTableRow({ comp }) {
  const fullAddress = comp.address + ", " + comp.zip;
  const salePrice = formatCurrency(comp.sale_price);
  const sqft = comp.sqft.toLocaleString();
  const pricePerSqft = formatCurrency(comp.price_per_sqft);
  const saleDate = formatShortDate(comp.sale_date);

  return (
    <tr>
      <td className="address-cell">{fullAddress}</td>
      <td className="number-cell">{salePrice}</td>
      <td className="number-cell">{comp.bedrooms}</td>
      <td className="number-cell">{comp.bathrooms}</td>
      <td className="number-cell">{sqft}</td>
      <td className="number-cell">{pricePerSqft}</td>
      <td className="number-cell">{saleDate}</td>
    </tr>
  );
}

/**
 * Table of individual sold comps backing a deal's score.
 * Used on the deal detail page.
 */
function CompTable({ comps }) {
  const rows = comps.map((comp) => (
    <CompTableRow key={comp.id} comp={comp} />
  ));

  return (
    <div className="comp-table">
      <div className="table-scroll-wrap">
        <table className="comp-table-inner">
          <thead>
            <tr>
              <th>Address</th>
              <th>Sale Price</th>
              <th>Beds</th>
              <th>Baths</th>
              <th>Sqft</th>
              <th>$/Sqft</th>
              <th>Sale Date</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default CompTable;
