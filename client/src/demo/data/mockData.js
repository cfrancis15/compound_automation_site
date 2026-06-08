/**
 * All mock data for the Deal Screener demo.
 * No API calls — screens, deals, and comps are defined here.
 *
 * SPREAD FORMULA: (comp_median - cost) / cost
 * A positive spread means the comp median is higher than your cost (good).
 * A negative spread means you'd be overpaying relative to comps (bad).
 *
 * SCORE THRESHOLDS are per-screen:
 *   Denver Condo Conversions: green >= 15%, yellow >= 5%
 *   Boulder SFR Flips:       green >= 20%, yellow >= 10%
 *   Aurora Townhouse Plays:  green >= 15%, yellow >= 5%
 */

// ---------------------------------------------------------------------------
// Screens — three automated screening configurations
// ---------------------------------------------------------------------------

export const screens = [
  {
    id: 1,
    name: "Denver Condo Conversions",
    description:
      "Scans multifamily listings in core Denver zips and scores against nearby condo/co-op sold comps on a per-unit basis.",
    source_property_type: "Multi-Family",
    comp_property_type: "Condo/Co-op",
    source_zips: [
      "80202", "80203", "80204", "80205", "80206", "80209", "80210",
      "80211", "80212", "80218", "80219", "80220", "80223", "80224",
      "80230", "80231", "80236", "80237",
    ],
    comp_zips: [
      "80202", "80203", "80204", "80205", "80206", "80209", "80210",
      "80211", "80218", "80220",
    ],
    bedroom_filter: "All",
    comparison_method: "per_unit",
    green_threshold: 0.15,
    yellow_threshold: 0.05,
  },
  {
    id: 2,
    name: "Boulder SFR Flips",
    description:
      "Tracks single-family listings in Boulder and compares asking prices to recent SFR sales in the same submarkets.",
    source_property_type: "Single Family Residential",
    comp_property_type: "Single Family Residential",
    source_zips: ["80301", "80302", "80303", "80304", "80305"],
    comp_zips: ["80301", "80302", "80303", "80304", "80305"],
    bedroom_filter: "3+ BR",
    comparison_method: "direct",
    green_threshold: 0.2,
    yellow_threshold: 0.1,
  },
  {
    id: 3,
    name: "Aurora Townhouse Plays",
    description:
      "Monitors townhouse inventory across Aurora and scores spreads against recent townhouse closings.",
    source_property_type: "Townhouse",
    comp_property_type: "Townhouse",
    source_zips: [
      "80010", "80011", "80012", "80013", "80014", "80015", "80016", "80017",
    ],
    comp_zips: ["80010", "80011", "80012", "80013", "80014", "80015"],
    bedroom_filter: "2-3 BR",
    comparison_method: "direct",
    green_threshold: 0.15,
    yellow_threshold: 0.05,
  },
];

// ---------------------------------------------------------------------------
// Dashboard summary stats (aggregate across all screens in production)
// ---------------------------------------------------------------------------

export const dashboardStats = {
  totalAnalyzed: 127,
  green: 14,
  yellow: 38,
  red: 75,
  lastRefreshed: "June 5, 2026",
};

// ---------------------------------------------------------------------------
// Deals — 25 realistic listings spread across the three screens
//
// Score assignments verified against each screen's thresholds.
// Spread formula: (comp_median_6mo - cost) / cost
//
// Denver Condo Conversions (green >= 0.15, yellow >= 0.05):
//   2 green, 3 yellow, 5 red
//
// Boulder SFR Flips (green >= 0.20, yellow >= 0.10):
//   3 green, 3 yellow, 3 red
//
// Aurora Townhouse Plays (green >= 0.15, yellow >= 0.05):
//   2 green, 2 yellow, 2 red
//
// Total: 7 green, 8 yellow, 10 red = 25 deals
// ---------------------------------------------------------------------------

export const deals = [
  // =========================================================================
  // Denver Condo Conversions (10 deals)
  // Green threshold: 15%, Yellow threshold: 5%
  // Comparison method: per_unit (asking_price / unit_count vs condo comp median)
  // =========================================================================
  {
    id: 1,
    screen: "Denver Condo Conversions",
    address: "1425 Grant St",
    zip: "80203",
    asking_price: 1850000,
    unit_count: 12,
    unit_mix: [{ bedrooms: 1, count: 4 }, { bedrooms: 2, count: 8 }],
    property_type: "Multi-Family",
    per_unit_cost: 154167,               // 1850000 / 12 = 154166.67 ≈ 154167
    comp_median_3mo: 198000,
    comp_median_6mo: 192000,
    comp_median_12mo: 185000,
    spread_3mo: 0.284,                   // (198000 - 154167) / 154167 = 0.2843
    spread_6mo: 0.246,                   // (192000 - 154167) / 154167 = 0.2454
    spread_12mo: 0.2,                    // (185000 - 154167) / 154167 = 0.2000
    comp_count_3mo: 18,
    comp_count_6mo: 34,
    comp_count_12mo: 61,
    score: "green",                      // 0.246 >= 0.15 ✓
    date_scraped: "2026-06-04",
    unit_breakdown: [
      { bedrooms: 1, count: 4, per_unit_cost: 154167, comp_median: 168000, spread: 0.09, comp_count: 14 },
      { bedrooms: 2, count: 8, per_unit_cost: 154167, comp_median: 210000, spread: 0.362, comp_count: 20 },
    ],
  },
  {
    id: 2,
    screen: "Denver Condo Conversions",
    address: "2100 Larimer St",
    zip: "80205",
    asking_price: 2400000,
    unit_count: 16,
    unit_mix: [{ bedrooms: 1, count: 6 }, { bedrooms: 2, count: 10 }],
    property_type: "Multi-Family",
    per_unit_cost: 150000,               // 2400000 / 16 = 150000
    comp_median_3mo: 178000,
    comp_median_6mo: 175000,
    comp_median_12mo: 168000,
    spread_3mo: 0.187,                   // (178000 - 150000) / 150000 = 0.1867
    spread_6mo: 0.167,                   // (175000 - 150000) / 150000 = 0.1667
    spread_12mo: 0.12,                   // (168000 - 150000) / 150000 = 0.1200
    comp_count_3mo: 22,
    comp_count_6mo: 41,
    comp_count_12mo: 72,
    score: "green",                      // 0.167 >= 0.15 ✓
    date_scraped: "2026-06-03",
    unit_breakdown: [
      { bedrooms: 1, count: 6, per_unit_cost: 150000, comp_median: 158000, spread: 0.053, comp_count: 18 },
      { bedrooms: 2, count: 10, per_unit_cost: 150000, comp_median: 188000, spread: 0.253, comp_count: 23 },
    ],
  },
  {
    id: 3,
    screen: "Denver Condo Conversions",
    address: "955 N Logan St",
    zip: "80218",
    asking_price: 1275000,
    unit_count: 8,
    unit_mix: [{ bedrooms: 1, count: 3 }, { bedrooms: 2, count: 5 }],
    property_type: "Multi-Family",
    per_unit_cost: 159375,               // 1275000 / 8 = 159375
    comp_median_3mo: 182000,
    comp_median_6mo: 178000,
    comp_median_12mo: 172000,
    spread_3mo: 0.142,                   // (182000 - 159375) / 159375 = 0.1419
    spread_6mo: 0.117,                   // (178000 - 159375) / 159375 = 0.1168
    spread_12mo: 0.079,                  // (172000 - 159375) / 159375 = 0.0792
    comp_count_3mo: 14,
    comp_count_6mo: 28,
    comp_count_12mo: 49,
    score: "yellow",                     // 0.117 >= 0.05, < 0.15 ✓
    date_scraped: "2026-06-05",
    unit_breakdown: [
      { bedrooms: 1, count: 3, per_unit_cost: 159375, comp_median: 162000, spread: 0.016, comp_count: 11 },
      { bedrooms: 2, count: 5, per_unit_cost: 159375, comp_median: 192000, spread: 0.205, comp_count: 17 },
    ],
  },
  {
    id: 4,
    screen: "Denver Condo Conversions",
    address: "3200 E Colfax Ave",
    zip: "80206",
    asking_price: 3100000,
    unit_count: 24,
    unit_mix: [{ bedrooms: 1, count: 8 }, { bedrooms: 2, count: 16 }],
    property_type: "Multi-Family",
    per_unit_cost: 129167,               // 3100000 / 24 = 129166.67 ≈ 129167
    comp_median_3mo: 148000,
    comp_median_6mo: 145000,
    comp_median_12mo: 140000,
    spread_3mo: 0.146,                   // (148000 - 129167) / 129167 = 0.1458
    spread_6mo: 0.123,                   // (145000 - 129167) / 129167 = 0.1226
    spread_12mo: 0.084,                  // (140000 - 129167) / 129167 = 0.0839
    comp_count_3mo: 31,
    comp_count_6mo: 58,
    comp_count_12mo: 94,
    score: "yellow",                     // 0.123 >= 0.05, < 0.15 ✓
    date_scraped: "2026-06-02",
    unit_breakdown: [
      { bedrooms: 1, count: 8, per_unit_cost: 129167, comp_median: 128000, spread: -0.009, comp_count: 24 },
      { bedrooms: 2, count: 16, per_unit_cost: 129167, comp_median: 158000, spread: 0.223, comp_count: 34 },
    ],
  },
  {
    id: 5,
    screen: "Denver Condo Conversions",
    address: "1560 S Broadway",
    zip: "80210",
    asking_price: 980000,
    unit_count: 6,
    unit_mix: [{ bedrooms: 1, count: 2 }, { bedrooms: 2, count: 4 }],
    property_type: "Multi-Family",
    per_unit_cost: 163333,               // 980000 / 6 = 163333.33 ≈ 163333
    comp_median_3mo: 178000,
    comp_median_6mo: 172000,
    comp_median_12mo: 165000,
    spread_3mo: 0.09,                    // (178000 - 163333) / 163333 = 0.0898
    spread_6mo: 0.053,                   // (172000 - 163333) / 163333 = 0.0531
    spread_12mo: 0.01,                   // (165000 - 163333) / 163333 = 0.0102
    comp_count_3mo: 11,
    comp_count_6mo: 21,
    comp_count_12mo: 38,
    score: "yellow",                     // 0.053 >= 0.05, < 0.15 ✓
    date_scraped: "2026-06-01",
    unit_breakdown: [
      { bedrooms: 1, count: 2, per_unit_cost: 163333, comp_median: 155000, spread: -0.051, comp_count: 8 },
      { bedrooms: 2, count: 4, per_unit_cost: 163333, comp_median: 185000, spread: 0.133, comp_count: 13 },
    ],
  },
  {
    id: 6,
    screen: "Denver Condo Conversions",
    address: "2845 W 23rd Ave",
    zip: "80211",
    asking_price: 875000,
    unit_count: 6,
    unit_mix: [{ bedrooms: 1, count: 2 }, { bedrooms: 2, count: 4 }],
    property_type: "Multi-Family",
    per_unit_cost: 145833,               // 875000 / 6 = 145833.33 ≈ 145833
    comp_median_3mo: 155000,
    comp_median_6mo: 152000,
    comp_median_12mo: 148000,
    spread_3mo: 0.063,                   // (155000 - 145833) / 145833 = 0.0629
    spread_6mo: 0.042,                   // (152000 - 145833) / 145833 = 0.0423
    spread_12mo: 0.015,                  // (148000 - 145833) / 145833 = 0.0149
    comp_count_3mo: 9,
    comp_count_6mo: 17,
    comp_count_12mo: 32,
    score: "red",                        // 0.042 < 0.05 ✓
    date_scraped: "2026-05-30",
    unit_breakdown: [
      { bedrooms: 1, count: 2, per_unit_cost: 145833, comp_median: 138000, spread: -0.054, comp_count: 6 },
      { bedrooms: 2, count: 4, per_unit_cost: 145833, comp_median: 162000, spread: 0.111, comp_count: 11 },
    ],
  },
  {
    id: 7,
    screen: "Denver Condo Conversions",
    address: "4400 Tennyson St",
    zip: "80212",
    asking_price: 1650000,
    unit_count: 10,
    unit_mix: [{ bedrooms: 1, count: 4 }, { bedrooms: 2, count: 6 }],
    property_type: "Multi-Family",
    per_unit_cost: 165000,               // 1650000 / 10 = 165000
    comp_median_3mo: 168000,
    comp_median_6mo: 165000,
    comp_median_12mo: 158000,
    spread_3mo: 0.018,                   // (168000 - 165000) / 165000 = 0.0182
    spread_6mo: 0.0,                     // (165000 - 165000) / 165000 = 0.0000
    spread_12mo: -0.042,                 // (158000 - 165000) / 165000 = -0.0424
    comp_count_3mo: 16,
    comp_count_6mo: 29,
    comp_count_12mo: 51,
    score: "red",                        // 0.0 < 0.05 ✓
    date_scraped: "2026-05-29",
    unit_breakdown: [
      { bedrooms: 1, count: 4, per_unit_cost: 165000, comp_median: 148000, spread: -0.103, comp_count: 12 },
      { bedrooms: 2, count: 6, per_unit_cost: 165000, comp_median: 178000, spread: 0.079, comp_count: 17 },
    ],
  },
  {
    id: 8,
    screen: "Denver Condo Conversions",
    address: "800 Kalamath St",
    zip: "80204",
    asking_price: 1120000,
    unit_count: 8,
    unit_mix: [{ bedrooms: 1, count: 3 }, { bedrooms: 2, count: 5 }],
    property_type: "Multi-Family",
    per_unit_cost: 140000,               // 1120000 / 8 = 140000
    comp_median_3mo: 138000,
    comp_median_6mo: 135000,
    comp_median_12mo: 130000,
    spread_3mo: -0.014,                  // (138000 - 140000) / 140000 = -0.0143
    spread_6mo: -0.036,                  // (135000 - 140000) / 140000 = -0.0357
    spread_12mo: -0.071,                 // (130000 - 140000) / 140000 = -0.0714
    comp_count_3mo: 12,
    comp_count_6mo: 24,
    comp_count_12mo: 44,
    score: "red",                        // -0.036 < 0.05 ✓
    date_scraped: "2026-05-28",
    unit_breakdown: [
      { bedrooms: 1, count: 3, per_unit_cost: 140000, comp_median: 118000, spread: -0.157, comp_count: 10 },
      { bedrooms: 2, count: 5, per_unit_cost: 140000, comp_median: 148000, spread: 0.057, comp_count: 14 },
    ],
  },
  {
    id: 9,
    screen: "Denver Condo Conversions",
    address: "2555 S Colorado Blvd",
    zip: "80222",
    asking_price: 2200000,
    unit_count: 18,
    unit_mix: [{ bedrooms: 1, count: 6 }, { bedrooms: 2, count: 12 }],
    property_type: "Multi-Family",
    per_unit_cost: 122222,               // 2200000 / 18 = 122222.22 ≈ 122222
    comp_median_3mo: 128000,
    comp_median_6mo: 125000,
    comp_median_12mo: 118000,
    spread_3mo: 0.047,                   // (128000 - 122222) / 122222 = 0.0473
    spread_6mo: 0.023,                   // (125000 - 122222) / 122222 = 0.0227
    spread_12mo: -0.035,                 // (118000 - 122222) / 122222 = -0.0345
    comp_count_3mo: 19,
    comp_count_6mo: 36,
    comp_count_12mo: 63,
    score: "red",                        // 0.023 < 0.05 ✓
    date_scraped: "2026-05-27",
    unit_breakdown: [
      { bedrooms: 1, count: 6, per_unit_cost: 122222, comp_median: 112000, spread: -0.084, comp_count: 15 },
      { bedrooms: 2, count: 12, per_unit_cost: 122222, comp_median: 135000, spread: 0.105, comp_count: 21 },
    ],
  },
  {
    id: 10,
    screen: "Denver Condo Conversions",
    address: "1700 E 17th Ave",
    zip: "80218",
    asking_price: 1450000,
    unit_count: 10,
    unit_mix: [{ bedrooms: 1, count: 4 }, { bedrooms: 2, count: 6 }],
    property_type: "Multi-Family",
    per_unit_cost: 145000,               // 1450000 / 10 = 145000
    comp_median_3mo: 132000,
    comp_median_6mo: 128000,
    comp_median_12mo: 122000,
    spread_3mo: -0.09,                   // (132000 - 145000) / 145000 = -0.0897
    spread_6mo: -0.117,                  // (128000 - 145000) / 145000 = -0.1172
    spread_12mo: -0.159,                 // (122000 - 145000) / 145000 = -0.1586
    comp_count_3mo: 15,
    comp_count_6mo: 27,
    comp_count_12mo: 48,
    score: "red",                        // -0.117 < 0.05 ✓
    date_scraped: "2026-05-26",
    unit_breakdown: [
      { bedrooms: 1, count: 4, per_unit_cost: 145000, comp_median: 115000, spread: -0.207, comp_count: 11 },
      { bedrooms: 2, count: 6, per_unit_cost: 145000, comp_median: 138000, spread: -0.048, comp_count: 16 },
    ],
  },

  // =========================================================================
  // Boulder SFR Flips (9 deals)
  // Green threshold: 20%, Yellow threshold: 10%
  // Comparison method: direct (asking_price vs SFR comp median)
  // =========================================================================
  {
    id: 11,
    screen: "Boulder SFR Flips",
    address: "1245 Mapleton Ave",
    zip: "80304",
    asking_price: 725000,
    unit_count: 1,
    unit_mix: null,
    property_type: "Single Family Residential",
    direct_cost: 725000,
    comp_median_3mo: 920000,
    comp_median_6mo: 895000,
    comp_median_12mo: 860000,
    spread_3mo: 0.269,                   // (920000 - 725000) / 725000 = 0.2690
    spread_6mo: 0.234,                   // (895000 - 725000) / 725000 = 0.2345
    spread_12mo: 0.186,                  // (860000 - 725000) / 725000 = 0.1862
    comp_count_3mo: 12,
    comp_count_6mo: 24,
    comp_count_12mo: 41,
    score: "green",                      // 0.234 >= 0.20 ✓
    date_scraped: "2026-06-04",
  },
  {
    id: 12,
    screen: "Boulder SFR Flips",
    address: "2840 9th St",
    zip: "80304",
    asking_price: 589000,
    unit_count: 1,
    unit_mix: null,
    property_type: "Single Family Residential",
    direct_cost: 589000,
    comp_median_3mo: 745000,
    comp_median_6mo: 720000,
    comp_median_12mo: 695000,
    spread_3mo: 0.265,                   // (745000 - 589000) / 589000 = 0.2648
    spread_6mo: 0.222,                   // (720000 - 589000) / 589000 = 0.2224
    spread_12mo: 0.18,                   // (695000 - 589000) / 589000 = 0.1799
    comp_count_3mo: 10,
    comp_count_6mo: 19,
    comp_count_12mo: 35,
    score: "green",                      // 0.222 >= 0.20 ✓
    date_scraped: "2026-06-03",
  },
  {
    id: 13,
    screen: "Boulder SFR Flips",
    address: "455 Pearl Pkwy",
    zip: "80302",
    asking_price: 825000,
    unit_count: 1,
    unit_mix: null,
    property_type: "Single Family Residential",
    direct_cost: 825000,
    comp_median_3mo: 1020000,
    comp_median_6mo: 995000,
    comp_median_12mo: 960000,
    spread_3mo: 0.236,                   // (1020000 - 825000) / 825000 = 0.2364
    spread_6mo: 0.206,                   // (995000 - 825000) / 825000 = 0.2061
    spread_12mo: 0.164,                  // (960000 - 825000) / 825000 = 0.1636
    comp_count_3mo: 14,
    comp_count_6mo: 26,
    comp_count_12mo: 44,
    score: "green",                      // 0.206 >= 0.20 ✓
    date_scraped: "2026-06-02",
  },
  {
    id: 14,
    screen: "Boulder SFR Flips",
    address: "1620 Baseline Rd",
    zip: "80303",
    asking_price: 675000,
    unit_count: 1,
    unit_mix: null,
    property_type: "Single Family Residential",
    direct_cost: 675000,
    comp_median_3mo: 762000,
    comp_median_6mo: 745000,
    comp_median_12mo: 720000,
    spread_3mo: 0.129,                   // (762000 - 675000) / 675000 = 0.1289
    spread_6mo: 0.104,                   // (745000 - 675000) / 675000 = 0.1037
    spread_12mo: 0.067,                  // (720000 - 675000) / 675000 = 0.0667
    comp_count_3mo: 11,
    comp_count_6mo: 22,
    comp_count_12mo: 39,
    score: "yellow",                     // 0.104 >= 0.10, < 0.20 ✓
    date_scraped: "2026-06-01",
  },
  {
    id: 15,
    screen: "Boulder SFR Flips",
    address: "3100 Broadway St",
    zip: "80304",
    asking_price: 548000,
    unit_count: 1,
    unit_mix: null,
    property_type: "Single Family Residential",
    direct_cost: 548000,
    comp_median_3mo: 625000,
    comp_median_6mo: 608000,
    comp_median_12mo: 585000,
    spread_3mo: 0.141,                   // (625000 - 548000) / 548000 = 0.1405
    spread_6mo: 0.109,                   // (608000 - 548000) / 548000 = 0.1095
    spread_12mo: 0.068,                  // (585000 - 548000) / 548000 = 0.0675
    comp_count_3mo: 9,
    comp_count_6mo: 18,
    comp_count_12mo: 33,
    score: "yellow",                     // 0.109 >= 0.10, < 0.20 ✓
    date_scraped: "2026-05-31",
  },
  {
    id: 16,
    screen: "Boulder SFR Flips",
    address: "845 28th St",
    zip: "80303",
    asking_price: 489000,
    unit_count: 1,
    unit_mix: null,
    property_type: "Single Family Residential",
    direct_cost: 489000,
    comp_median_3mo: 558000,
    comp_median_6mo: 542000,
    comp_median_12mo: 520000,
    spread_3mo: 0.141,                   // (558000 - 489000) / 489000 = 0.1411
    spread_6mo: 0.108,                   // (542000 - 489000) / 489000 = 0.1084
    spread_12mo: 0.063,                  // (520000 - 489000) / 489000 = 0.0634
    comp_count_3mo: 8,
    comp_count_6mo: 16,
    comp_count_12mo: 29,
    score: "yellow",                     // 0.108 >= 0.10, < 0.20 ✓
    date_scraped: "2026-05-30",
  },
  {
    id: 17,
    screen: "Boulder SFR Flips",
    address: "2200 30th St",
    zip: "80301",
    asking_price: 612000,
    unit_count: 1,
    unit_mix: null,
    property_type: "Single Family Residential",
    direct_cost: 612000,
    comp_median_3mo: 648000,
    comp_median_6mo: 635000,
    comp_median_12mo: 618000,
    spread_3mo: 0.059,                   // (648000 - 612000) / 612000 = 0.0588
    spread_6mo: 0.038,                   // (635000 - 612000) / 612000 = 0.0376
    spread_12mo: 0.01,                   // (618000 - 612000) / 612000 = 0.0098
    comp_count_3mo: 10,
    comp_count_6mo: 20,
    comp_count_12mo: 36,
    score: "red",                        // 0.038 < 0.10 ✓
    date_scraped: "2026-05-29",
  },
  {
    id: 18,
    screen: "Boulder SFR Flips",
    address: "4750 N Broadway",
    zip: "80304",
    asking_price: 895000,
    unit_count: 1,
    unit_mix: null,
    property_type: "Single Family Residential",
    direct_cost: 895000,
    comp_median_3mo: 905000,
    comp_median_6mo: 890000,
    comp_median_12mo: 865000,
    spread_3mo: 0.011,                   // (905000 - 895000) / 895000 = 0.0112
    spread_6mo: -0.006,                  // (890000 - 895000) / 895000 = -0.0056
    spread_12mo: -0.034,                 // (865000 - 895000) / 895000 = -0.0335
    comp_count_3mo: 13,
    comp_count_6mo: 25,
    comp_count_12mo: 42,
    score: "red",                        // -0.006 < 0.10 ✓
    date_scraped: "2026-05-28",
  },
  {
    id: 19,
    screen: "Boulder SFR Flips",
    address: "1055 Alpine Ave",
    zip: "80304",
    asking_price: 780000,
    unit_count: 1,
    unit_mix: null,
    property_type: "Single Family Residential",
    direct_cost: 780000,
    comp_median_3mo: 720000,
    comp_median_6mo: 705000,
    comp_median_12mo: 688000,
    spread_3mo: -0.077,                  // (720000 - 780000) / 780000 = -0.0769
    spread_6mo: -0.096,                  // (705000 - 780000) / 780000 = -0.0962
    spread_12mo: -0.118,                 // (688000 - 780000) / 780000 = -0.1179
    comp_count_3mo: 11,
    comp_count_6mo: 21,
    comp_count_12mo: 37,
    score: "red",                        // -0.096 < 0.10 ✓
    date_scraped: "2026-05-27",
  },

  // =========================================================================
  // Aurora Townhouse Plays (6 deals)
  // Green threshold: 15%, Yellow threshold: 5%
  // Comparison method: direct (asking_price vs townhouse comp median)
  // =========================================================================
  {
    id: 20,
    screen: "Aurora Townhouse Plays",
    address: "14200 E Alameda Pkwy",
    zip: "80012",
    asking_price: 325000,
    unit_count: 1,
    unit_mix: null,
    property_type: "Townhouse",
    direct_cost: 325000,
    comp_median_3mo: 412000,
    comp_median_6mo: 398000,
    comp_median_12mo: 385000,
    spread_3mo: 0.268,                   // (412000 - 325000) / 325000 = 0.2677
    spread_6mo: 0.225,                   // (398000 - 325000) / 325000 = 0.2246
    spread_12mo: 0.185,                  // (385000 - 325000) / 325000 = 0.1846
    comp_count_3mo: 15,
    comp_count_6mo: 28,
    comp_count_12mo: 48,
    score: "green",                      // 0.225 >= 0.15 ✓
    date_scraped: "2026-06-05",
  },
  {
    id: 21,
    screen: "Aurora Townhouse Plays",
    address: "16850 E Iliff Ave",
    zip: "80013",
    asking_price: 289000,
    unit_count: 1,
    unit_mix: null,
    property_type: "Townhouse",
    direct_cost: 289000,
    comp_median_3mo: 358000,
    comp_median_6mo: 345000,
    comp_median_12mo: 332000,
    spread_3mo: 0.239,                   // (358000 - 289000) / 289000 = 0.2388
    spread_6mo: 0.194,                   // (345000 - 289000) / 289000 = 0.1938
    spread_12mo: 0.149,                  // (332000 - 289000) / 289000 = 0.1488
    comp_count_3mo: 12,
    comp_count_6mo: 23,
    comp_count_12mo: 40,
    score: "green",                      // 0.194 >= 0.15 ✓
    date_scraped: "2026-06-04",
  },
  {
    id: 22,
    screen: "Aurora Townhouse Plays",
    address: "2550 S Havana St",
    zip: "80014",
    asking_price: 365000,
    unit_count: 1,
    unit_mix: null,
    property_type: "Townhouse",
    direct_cost: 365000,
    comp_median_3mo: 408000,
    comp_median_6mo: 395000,
    comp_median_12mo: 378000,
    spread_3mo: 0.118,                   // (408000 - 365000) / 365000 = 0.1178
    spread_6mo: 0.082,                   // (395000 - 365000) / 365000 = 0.0822
    spread_12mo: 0.036,                  // (378000 - 365000) / 365000 = 0.0356
    comp_count_3mo: 14,
    comp_count_6mo: 26,
    comp_count_12mo: 45,
    score: "yellow",                     // 0.082 >= 0.05, < 0.15 ✓
    date_scraped: "2026-06-03",
  },
  {
    id: 23,
    screen: "Aurora Townhouse Plays",
    address: "1100 S Abilene St",
    zip: "80012",
    asking_price: 412000,
    unit_count: 1,
    unit_mix: null,
    property_type: "Townhouse",
    direct_cost: 412000,
    comp_median_3mo: 448000,
    comp_median_6mo: 435000,
    comp_median_12mo: 418000,
    spread_3mo: 0.087,                   // (448000 - 412000) / 412000 = 0.0874
    spread_6mo: 0.056,                   // (435000 - 412000) / 412000 = 0.0558
    spread_12mo: 0.015,                  // (418000 - 412000) / 412000 = 0.0146
    comp_count_3mo: 11,
    comp_count_6mo: 21,
    comp_count_12mo: 37,
    score: "yellow",                     // 0.056 >= 0.05, < 0.15 ✓
    date_scraped: "2026-06-02",
  },
  {
    id: 24,
    screen: "Aurora Townhouse Plays",
    address: "4500 S Chambers Rd",
    zip: "80015",
    asking_price: 478000,
    unit_count: 1,
    unit_mix: null,
    property_type: "Townhouse",
    direct_cost: 478000,
    comp_median_3mo: 485000,
    comp_median_6mo: 472000,
    comp_median_12mo: 458000,
    spread_3mo: 0.015,                   // (485000 - 478000) / 478000 = 0.0146
    spread_6mo: -0.013,                  // (472000 - 478000) / 478000 = -0.0126
    spread_12mo: -0.042,                 // (458000 - 478000) / 478000 = -0.0418
    comp_count_3mo: 10,
    comp_count_6mo: 19,
    comp_count_12mo: 34,
    score: "red",                        // -0.013 < 0.05 ✓
    date_scraped: "2026-06-01",
  },
  {
    id: 25,
    screen: "Aurora Townhouse Plays",
    address: "1800 S Peoria St",
    zip: "80017",
    asking_price: 395000,
    unit_count: 1,
    unit_mix: null,
    property_type: "Townhouse",
    direct_cost: 395000,
    comp_median_3mo: 365000,
    comp_median_6mo: 352000,
    comp_median_12mo: 338000,
    spread_3mo: -0.076,                  // (365000 - 395000) / 395000 = -0.0759
    spread_6mo: -0.109,                  // (352000 - 395000) / 395000 = -0.1089
    spread_12mo: -0.144,                 // (338000 - 395000) / 395000 = -0.1443
    comp_count_3mo: 9,
    comp_count_6mo: 17,
    comp_count_12mo: 31,
    score: "red",                        // -0.109 < 0.05 ✓
    date_scraped: "2026-05-31",
  },
];

// ---------------------------------------------------------------------------
// Helper lookups
// ---------------------------------------------------------------------------

/** Find a single deal by its numeric id. */
export function getDealById(id) {
  const numericId = Number(id);
  return deals.find((deal) => deal.id === numericId) || null;
}

/** Find the screen config that produced a given deal. */
export function getScreenForDeal(deal) {
  return screens.find((screen) => screen.name === deal.screen) || null;
}

/** Count deals and score breakdown for a screen card. */
export function getScreenStats(screenName) {
  const screenDeals = deals.filter((deal) => deal.screen === screenName);

  let green = 0;
  let yellow = 0;
  let red = 0;

  for (const deal of screenDeals) {
    if (deal.score === "green") {
      green += 1;
    } else if (deal.score === "yellow") {
      yellow += 1;
    } else {
      red += 1;
    }
  }

  return {
    dealCount: screenDeals.length,
    green,
    yellow,
    red,
  };
}

// Street name pools for generating realistic comp addresses near a zip
const STREET_NAMES = [
  "Maple", "Oak", "Pine", "Cedar", "Elm", "Birch", "Walnut", "Cherry",
  "Aspen", "Willow", "Spruce", "Hickory", "Laurel", "Magnolia", "Juniper",
];

const STREET_TYPES = ["St", "Ave", "Blvd", "Dr", "Ln", "Ct", "Pl", "Way"];

/**
 * Generate sold comp records for a deal detail view.
 * Prices vary around the 6-month median; dates fall within the last 12 months.
 *
 * If the deal has a unit_breakdown, this function generates comps with bedroom
 * counts that match the breakdown so per-bedroom filtering works correctly.
 */
export function generateComps(deal, count = 12) {
  const medianPrice = deal.comp_median_6mo;
  const zip = deal.zip;
  const comps = [];
  const today = new Date("2026-06-05");

  // If the deal has unit_breakdown, generate comps weighted toward those bedroom counts
  const hasBreakdown = deal.unit_breakdown && deal.unit_breakdown.length > 0;

  for (let i = 0; i < count; i += 1) {
    let bedrooms;
    let targetMedian;

    if (hasBreakdown) {
      // Alternate between bedroom types from the breakdown
      const breakdownEntry = deal.unit_breakdown[i % deal.unit_breakdown.length];
      bedrooms = breakdownEntry.bedrooms;
      targetMedian = breakdownEntry.comp_median;
    } else {
      bedrooms = Math.floor(Math.random() * 3) + 1;
      targetMedian = medianPrice;
    }

    // Spread sale prices roughly ±18% around the target median for this bedroom count
    const variance = 0.82 + Math.random() * 0.36;
    const salePrice = Math.round(targetMedian * variance / 1000) * 1000;

    // Random sale date in the past 12 months
    const daysAgo = Math.floor(Math.random() * 365);
    const saleDate = new Date(today);
    saleDate.setDate(saleDate.getDate() - daysAgo);

    const bathrooms = bedrooms === 1 ? 1 : bedrooms === 2 ? 1.5 : 2;
    const sqft = bedrooms === 1 ? 650 + Math.floor(Math.random() * 200)
      : bedrooms === 2 ? 950 + Math.floor(Math.random() * 300)
      : 1200 + Math.floor(Math.random() * 400);

    const pricePerSqft = Math.round(salePrice / sqft);

    const streetNum = 1000 + Math.floor(Math.random() * 8000);
    const streetName = STREET_NAMES[i % STREET_NAMES.length];
    const streetType = STREET_TYPES[i % STREET_TYPES.length];

    comps.push({
      id: i + 1,
      address: `${streetNum} ${streetName} ${streetType}, ${zip}`,
      zip,
      sale_price: salePrice,
      bedrooms,
      bathrooms,
      sqft,
      price_per_sqft: pricePerSqft,
      sale_date: saleDate.toISOString().split("T")[0],
    });
  }

  // Sort newest sales first
  comps.sort((a, b) => new Date(b.sale_date) - new Date(a.sale_date));

  return comps;
}