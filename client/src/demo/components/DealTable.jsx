import { useNavigate } from "react-router-dom";
import { formatCurrency, formatPercent } from "../utils/formatters";
import ScoreBadge from "./ScoreBadge";
import "./DealTable.css";

/** Build spread cell class based on deal score color. */
function getSpreadCellClass(score) {
  let spreadClass = "spread-cell";

  if (score === "green") {
    spreadClass = "spread-cell green";
  } else if (score === "yellow") {
    spreadClass = "spread-cell yellow";
  } else {
    spreadClass = "spread-cell red";
  }

  return spreadClass;
}

/** Shared deal display values for table row and mobile card. */
function getDealDisplayValues(deal) {
  let costValue = deal.direct_cost;

  if (deal.per_unit_cost) {
    costValue = deal.per_unit_cost;
  }

  let unitLabel = "";

  if (deal.unit_count > 1) {
    unitLabel = deal.unit_count + " units";
  }

  return {
    costValue,
    unitLabel,
    askingPrice: formatCurrency(deal.asking_price),
    formattedCost: formatCurrency(costValue),
    compMedian: formatCurrency(deal.comp_median_6mo),
    spread: formatPercent(deal.spread_6mo),
    spreadClass: getSpreadCellClass(deal.score),
  };
}

/** One clickable row in the deal table (tablet and up). */
function DealTableRow({ deal, onRowClick }) {
  const values = getDealDisplayValues(deal);

  function handleClick() {
    onRowClick(deal.id);
  }

  return (
    <tr className="deal-row" onClick={handleClick}>
      <td>
        <ScoreBadge score={deal.score} />
      </td>
      <td className="address-cell">{deal.address}</td>
      <td className="number-cell">{deal.zip}</td>
      <td className="number-cell">{values.askingPrice}</td>
      <td className="number-cell">{values.unitLabel}</td>
      <td className="number-cell">{values.formattedCost}</td>
      <td className="number-cell">{values.compMedian}</td>
      <td className={values.spreadClass}>{values.spread}</td>
      <td className="screen-cell">{deal.screen}</td>
    </tr>
  );
}

/** Stacked card for one deal on mobile screens. */
function DealTableCard({ deal, onRowClick }) {
  const values = getDealDisplayValues(deal);

  function handleClick() {
    onRowClick(deal.id);
  }

  return (
    <button type="button" className="deal-card" onClick={handleClick}>
      <div className="deal-card-header">
        <ScoreBadge score={deal.score} />
        <span className={values.spreadClass}>{values.spread}</span>
      </div>

      <p className="deal-card-address">{deal.address}</p>
      <p className="deal-card-zip">{deal.zip}</p>

      <div className="deal-card-grid">
        <div className="deal-card-field">
          <span className="deal-card-label">Asking</span>
          <span className="deal-card-value">{values.askingPrice}</span>
        </div>
        <div className="deal-card-field">
          <span className="deal-card-label">Cost</span>
          <span className="deal-card-value">{values.formattedCost}</span>
        </div>
        <div className="deal-card-field">
          <span className="deal-card-label">Comp Median</span>
          <span className="deal-card-value">{values.compMedian}</span>
        </div>
        {values.unitLabel && (
          <div className="deal-card-field">
            <span className="deal-card-label">Units</span>
            <span className="deal-card-value">{values.unitLabel}</span>
          </div>
        )}
      </div>

      <p className="deal-card-screen">{deal.screen}</p>
    </button>
  );
}

/**
 * Clickable deal rows for the dashboard.
 * Mobile shows cards; tablet and up shows the full table.
 */
function DealTable({ deals, onDealClick }) {
  const navigate = useNavigate();

  function handleRowClick(dealId) {
    if (onDealClick) {
      onDealClick();
    }

    navigate("/demo/deals/" + dealId);
  }

  if (deals.length === 0) {
    return (
      <div className="deal-table empty-state">
        <p>No deals match the current filters.</p>
      </div>
    );
  }

  const rows = deals.map((deal) => (
    <DealTableRow key={deal.id} deal={deal} onRowClick={handleRowClick} />
  ));

  const cards = deals.map((deal) => (
    <DealTableCard key={deal.id} deal={deal} onRowClick={handleRowClick} />
  ));

  return (
    <div className="deal-table">
      <div className="deal-cards-mobile">{cards}</div>

      <table className="deal-table-inner">
        <thead>
          <tr>
            <th>Score</th>
            <th>Address</th>
            <th>Zip</th>
            <th>Asking</th>
            <th>Units</th>
            <th>Cost</th>
            <th>Comp Median (6mo)</th>
            <th>Spread</th>
            <th>Screen</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default DealTable;
