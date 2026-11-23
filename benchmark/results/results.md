Measured 2026-11-23, 10 runs of each journey, host BenchmarkIndex 2390 (low-end run) and 2411 (mid-tier run), slow 4G. Times are median / 90th percentile.

## Low-end phone (Lighthouse BenchmarkIndex 125), 19.1x CPU slowdown

### account

| Variant              | JS transferred | First page LCP | Total blocking time | Worst INP    | Worst INP while loading |
| -------------------- | -------------- | -------------- | ------------------- | ------------ | ----------------------- |
| govuk-frontend       | 12.1 kB        | 1744 / 1840 ms | 58 / 136 ms         | 88 / 104 ms  | 96 / 112 ms             |
| govuk-react          | 3.7 kB         | 1708 / 1760 ms | 74 / 98 ms          | 72 / 120 ms  | 88 / 120 ms             |
| govuk-react-hydrated | 87.7 kB        | 1744 / 1828 ms | 96 / 147 ms         | 112 / 160 ms | 216 / 272 ms            |

| Variant              | Page             | JS parsed | JS transferred | LCP            | TBT         | TTI            | INP          | INP while loading | Hydrated       |
| -------------------- | ---------------- | --------- | -------------- | -------------- | ----------- | -------------- | ------------ | ----------------- | -------------- |
| govuk-frontend       | Form             | 45.9 kB   | 11.8 kB        | 1744 / 1840 ms | 43 / 104 ms | 3057 / 3153 ms | 88 / 104 ms  | 88 / 112 ms       | –              |
| govuk-frontend       | Form with errors | 45.9 kB   | 0.2 kB         | 940 / 988 ms   | 15 / 32 ms  | 1137 / 1565 ms | 64 / 80 ms   | 48 / 96 ms        | –              |
| govuk-frontend       | Confirmation     | 45.9 kB   | 0.2 kB         | 1492 / 1564 ms | 0 / 16 ms   | 1530 / 2036 ms | –            | –                 | –              |
| govuk-react          | Form             | 2.9 kB    | 1.2 kB         | 1708 / 1760 ms | 29 / 56 ms  | 3187 / 3333 ms | 72 / 120 ms  | 88 / 120 ms       | –              |
| govuk-react          | Form with errors | 7.7 kB    | 2.5 kB         | 1084 / 1180 ms | 24 / 78 ms  | 1141 / 1657 ms | 48 / 72 ms   | 56 / 64 ms        | –              |
| govuk-react          | Confirmation     | 0.0 kB    | 0.0 kB         | 1508 / 1548 ms | 0 / 1 ms    | 1520 / 1919 ms | –            | –                 | –              |
| govuk-react-hydrated | Form             | 247.4 kB  | 80.0 kB        | 1744 / 1828 ms | 40 / 113 ms | 3706 / 6137 ms | 112 / 160 ms | 216 / 272 ms      | 3647 / 3733 ms |
| govuk-react-hydrated | Form with errors | 252.2 kB  | 4.2 kB         | 1060 / 1236 ms | 44 / 68 ms  | 1595 / 1898 ms | 72 / 80 ms   | 88 / 136 ms       | 1511 / 1618 ms |
| govuk-react-hydrated | Confirmation     | 225.4 kB  | 3.4 kB         | 1584 / 1648 ms | 2 / 29 ms   | 1551 / 2108 ms | –            | –                 | 3270 / 3373 ms |

### licence

| Variant              | JS transferred | First page LCP | Total blocking time | Worst INP    | Worst INP while loading |
| -------------------- | -------------- | -------------- | ------------------- | ------------ | ----------------------- |
| govuk-frontend       | 12.8 kB        | 1816 / 1884 ms | 228 / 275 ms        | 96 / 120 ms  | 104 / 120 ms            |
| govuk-react          | 3.6 kB         | 1632 / 1692 ms | 78 / 258 ms         | 80 / 104 ms  | 80 / 96 ms              |
| govuk-react-hydrated | 102.0 kB       | 1796 / 1836 ms | 292 / 433 ms        | 104 / 136 ms | 152 / 184 ms            |

| Variant              | Page                             | JS parsed | JS transferred | LCP            | TBT          | TTI            | INP          | INP while loading | Hydrated       |
| -------------------- | -------------------------------- | --------- | -------------- | -------------- | ------------ | -------------- | ------------ | ----------------- | -------------- |
| govuk-frontend       | Task list                        | 45.9 kB   | 11.8 kB        | 1816 / 1884 ms | 28 / 51 ms   | 3131 / 3221 ms | –            | –                 | –              |
| govuk-frontend       | Radios with a conditional reveal | 45.9 kB   | 0.2 kB         | 992 / 1044 ms  | 13 / 40 ms   | 1480 / 1630 ms | 80 / 96 ms   | 88 / 120 ms       | –              |
| govuk-frontend       | Task list, 1 task done           | 45.9 kB   | 0.2 kB         | 1508 / 1572 ms | 0 / 7 ms     | 1575 / 1948 ms | –            | –                 | –              |
| govuk-frontend       | Character count                  | 45.9 kB   | 0.2 kB         | 932 / 980 ms   | 172 / 204 ms | 1290 / 1652 ms | 80 / 120 ms  | 80 / 112 ms       | –              |
| govuk-frontend       | Task list, 2 tasks done          | 45.9 kB   | 0.2 kB         | 1508 / 1620 ms | 0 / 6 ms     | 1557 / 2051 ms | –            | –                 | –              |
| govuk-frontend       | Check answers                    | 45.9 kB   | 0.2 kB         | 868 / 968 ms   | 0 / 6 ms     | 956 / 1283 ms  | –            | –                 | –              |
| govuk-frontend       | Confirmation                     | 45.9 kB   | 0.2 kB         | 1512 / 1548 ms | 0 / 3 ms     | 1568 / 1955 ms | –            | –                 | –              |
| govuk-react          | Task list                        | 0.0 kB    | 0.0 kB         | 1632 / 1692 ms | 25 / 32 ms   | 2896 / 2949 ms | –            | –                 | –              |
| govuk-react          | Radios with a conditional reveal | 3.2 kB    | 1.2 kB         | 956 / 1048 ms  | 21 / 43 ms   | 1043 / 1594 ms | 72 / 96 ms   | 72 / 88 ms        | –              |
| govuk-react          | Task list, 1 task done           | 0.0 kB    | 0.0 kB         | 1476 / 1544 ms | 0 / 5 ms     | 1520 / 1891 ms | –            | –                 | –              |
| govuk-react          | Character count                  | 7.2 kB    | 2.4 kB         | 1176 / 1264 ms | 0 / 194 ms   | 1159 / 1556 ms | 72 / 96 ms   | 64 / 96 ms        | –              |
| govuk-react          | Task list, 2 tasks done          | 0.0 kB    | 0.0 kB         | 1488 / 1568 ms | 0 / 4 ms     | 1568 / 1964 ms | –            | –                 | –              |
| govuk-react          | Check answers                    | 0.0 kB    | 0.0 kB         | 876 / 912 ms   | 0 / 3 ms     | 862 / 1302 ms  | –            | –                 | –              |
| govuk-react          | Confirmation                     | 0.0 kB    | 0.0 kB         | 1468 / 1520 ms | 4 / 17 ms    | 1520 / 1892 ms | –            | –                 | –              |
| govuk-react-hydrated | Task list                        | 226.5 kB  | 72.9 kB        | 1796 / 1836 ms | 39 / 76 ms   | 3387 / 3457 ms | –            | –                 | 3389 / 3458 ms |
| govuk-react-hydrated | Radios with a conditional reveal | 247.5 kB  | 10.7 kB        | 1020 / 1076 ms | 55 / 71 ms   | 1564 / 2384 ms | 104 / 136 ms | 152 / 184 ms      | 2384 / 2494 ms |
| govuk-react-hydrated | Task list, 1 task done           | 226.5 kB  | 1.9 kB         | 1552 / 1588 ms | 0 / 2 ms     | 1512 / 2148 ms | –            | –                 | 1875 / 1956 ms |
| govuk-react-hydrated | Character count                  | 258.0 kB  | 8.6 kB         | 1300 / 1444 ms | 216 / 274 ms | 1522 / 2059 ms | 80 / 104 ms  | 104 / 136 ms      | 2401 / 2711 ms |
| govuk-react-hydrated | Task list, 2 tasks done          | 226.5 kB  | 1.9 kB         | 1524 / 1688 ms | 0 / 7 ms     | 1556 / 2237 ms | –            | –                 | 1885 / 1993 ms |
| govuk-react-hydrated | Check answers                    | 231.3 kB  | 3.5 kB         | 996 / 1136 ms  | 0 / 18 ms    | 942 / 1632 ms  | –            | –                 | 2106 / 2308 ms |
| govuk-react-hydrated | Confirmation                     | 225.4 kB  | 2.4 kB         | 1552 / 1640 ms | 0 / 13 ms    | 1546 / 2193 ms | –            | –                 | 2139 / 2264 ms |

## Mid-tier phone (Lighthouse BenchmarkIndex 400), 6x CPU slowdown

### account

| Variant              | JS transferred | First page LCP | Total blocking time | Worst INP  | Worst INP while loading |
| -------------------- | -------------- | -------------- | ------------------- | ---------- | ----------------------- |
| govuk-frontend       | 12.1 kB        | 1432 / 1460 ms | 0 / 0 ms            | 24 / 32 ms | 32 / 80 ms              |
| govuk-react          | 3.7 kB         | 1376 / 1392 ms | 0 / 0 ms            | 32 / 48 ms | 32 / 32 ms              |
| govuk-react-hydrated | 87.7 kB        | 1400 / 1440 ms | 0 / 0 ms            | 32 / 56 ms | 24 / 40 ms              |

| Variant              | Page             | JS parsed | JS transferred | LCP            | TBT      | TTI            | INP        | INP while loading | Hydrated       |
| -------------------- | ---------------- | --------- | -------------- | -------------- | -------- | -------------- | ---------- | ----------------- | -------------- |
| govuk-frontend       | Form             | 45.9 kB   | 11.8 kB        | 1432 / 1460 ms | 0 / 0 ms | 1444 / 1480 ms | 24 / 32 ms | 32 / 40 ms        | –              |
| govuk-frontend       | Form with errors | 45.9 kB   | 0.2 kB         | 680 / 704 ms   | 0 / 0 ms | 694 / 722 ms   | 24 / 24 ms | 24 / 80 ms        | –              |
| govuk-frontend       | Confirmation     | 45.9 kB   | 0.2 kB         | 1264 / 1304 ms | 0 / 0 ms | 1277 / 1304 ms | –          | –                 | –              |
| govuk-react          | Form             | 2.9 kB    | 1.2 kB         | 1376 / 1392 ms | 0 / 0 ms | 1384 / 1403 ms | 32 / 48 ms | 32 / 32 ms        | –              |
| govuk-react          | Form with errors | 7.7 kB    | 2.5 kB         | 732 / 776 ms   | 0 / 0 ms | 703 / 749 ms   | 24 / 24 ms | 16 / 24 ms        | –              |
| govuk-react          | Confirmation     | 0.0 kB    | 0.0 kB         | 1240 / 1264 ms | 0 / 0 ms | 1240 / 1264 ms | –          | –                 | –              |
| govuk-react-hydrated | Form             | 247.4 kB  | 80.0 kB        | 1400 / 1440 ms | 0 / 0 ms | 1396 / 1433 ms | 32 / 56 ms | 24 / 40 ms        | 3157 / 3190 ms |
| govuk-react-hydrated | Form with errors | 252.2 kB  | 4.2 kB         | 728 / 752 ms   | 0 / 0 ms | 704 / 719 ms   | 24 / 32 ms | 24 / 24 ms        | 811 / 836 ms   |
| govuk-react-hydrated | Confirmation     | 225.4 kB  | 3.4 kB         | 1284 / 1308 ms | 0 / 0 ms | 1268 / 1308 ms | –          | –                 | 2980 / 3003 ms |

### licence

| Variant              | JS transferred | First page LCP | Total blocking time | Worst INP  | Worst INP while loading |
| -------------------- | -------------- | -------------- | ------------------- | ---------- | ----------------------- |
| govuk-frontend       | 12.8 kB        | 1440 / 1468 ms | 6 / 15 ms           | 24 / 48 ms | 32 / 40 ms              |
| govuk-react          | 3.6 kB         | 1372 / 1384 ms | 0 / 25 ms           | 24 / 32 ms | 24 / 32 ms              |
| govuk-react-hydrated | 102.0 kB       | 1400 / 1416 ms | 0 / 23 ms           | 32 / 48 ms | 32 / 64 ms              |

| Variant              | Page                             | JS parsed | JS transferred | LCP            | TBT       | TTI            | INP        | INP while loading | Hydrated       |
| -------------------- | -------------------------------- | --------- | -------------- | -------------- | --------- | -------------- | ---------- | ----------------- | -------------- |
| govuk-frontend       | Task list                        | 45.9 kB   | 11.8 kB        | 1440 / 1468 ms | 0 / 0 ms  | 1445 / 1478 ms | –          | –                 | –              |
| govuk-frontend       | Radios with a conditional reveal | 45.9 kB   | 0.2 kB         | 684 / 716 ms   | 0 / 0 ms  | 699 / 739 ms   | 24 / 48 ms | 24 / 32 ms        | –              |
| govuk-frontend       | Task list, 1 task done           | 45.9 kB   | 0.2 kB         | 1260 / 1280 ms | 0 / 0 ms  | 1264 / 1280 ms | –          | –                 | –              |
| govuk-frontend       | Character count                  | 45.9 kB   | 0.2 kB         | 680 / 728 ms   | 6 / 15 ms | 739 / 769 ms   | 24 / 32 ms | 24 / 32 ms        | –              |
| govuk-frontend       | Task list, 2 tasks done          | 45.9 kB   | 0.2 kB         | 1252 / 1300 ms | 0 / 0 ms  | 1256 / 1300 ms | –          | –                 | –              |
| govuk-frontend       | Check answers                    | 45.9 kB   | 0.2 kB         | 680 / 740 ms   | 0 / 0 ms  | 680 / 741 ms   | –          | –                 | –              |
| govuk-frontend       | Confirmation                     | 45.9 kB   | 0.2 kB         | 1236 / 1276 ms | 0 / 0 ms  | 1242 / 1281 ms | –          | –                 | –              |
| govuk-react          | Task list                        | 0.0 kB    | 0.0 kB         | 1372 / 1384 ms | 0 / 0 ms  | 1372 / 1384 ms | –          | –                 | –              |
| govuk-react          | Radios with a conditional reveal | 3.2 kB    | 1.2 kB         | 680 / 724 ms   | 0 / 0 ms  | 680 / 720 ms   | 24 / 32 ms | 24 / 24 ms        | –              |
| govuk-react          | Task list, 1 task done           | 0.0 kB    | 0.0 kB         | 1240 / 1256 ms | 0 / 0 ms  | 1242 / 1256 ms | –          | –                 | –              |
| govuk-react          | Character count                  | 7.2 kB    | 2.4 kB         | 744 / 792 ms   | 0 / 25 ms | 740 / 792 ms   | 24 / 32 ms | 24 / 24 ms        | –              |
| govuk-react          | Task list, 2 tasks done          | 0.0 kB    | 0.0 kB         | 1256 / 1292 ms | 0 / 0 ms  | 1256 / 1292 ms | –          | –                 | –              |
| govuk-react          | Check answers                    | 0.0 kB    | 0.0 kB         | 652 / 688 ms   | 0 / 0 ms  | 660 / 688 ms   | –          | –                 | –              |
| govuk-react          | Confirmation                     | 0.0 kB    | 0.0 kB         | 1228 / 1256 ms | 0 / 0 ms  | 1228 / 1257 ms | –          | –                 | –              |
| govuk-react-hydrated | Task list                        | 226.5 kB  | 72.9 kB        | 1400 / 1416 ms | 0 / 0 ms  | 1372 / 1413 ms | –          | –                 | 3013 / 3035 ms |
| govuk-react-hydrated | Radios with a conditional reveal | 247.5 kB  | 10.7 kB        | 692 / 704 ms   | 0 / 0 ms  | 692 / 704 ms   | 32 / 48 ms | 32 / 48 ms        | 1876 / 1900 ms |
| govuk-react-hydrated | Task list, 1 task done           | 226.5 kB  | 1.9 kB         | 1252 / 1296 ms | 0 / 0 ms  | 1256 / 1304 ms | –          | –                 | 1349 / 1430 ms |
| govuk-react-hydrated | Character count                  | 258.0 kB  | 8.6 kB         | 744 / 800 ms   | 0 / 23 ms | 740 / 800 ms   | 24 / 32 ms | 32 / 56 ms        | 1844 / 1891 ms |
| govuk-react-hydrated | Task list, 2 tasks done          | 226.5 kB  | 1.9 kB         | 1244 / 1276 ms | 0 / 0 ms  | 1249 / 1276 ms | –          | –                 | 1338 / 1401 ms |
| govuk-react-hydrated | Check answers                    | 231.3 kB  | 3.5 kB         | 692 / 720 ms   | 0 / 0 ms  | 671 / 704 ms   | –          | –                 | 1835 / 1855 ms |
| govuk-react-hydrated | Confirmation                     | 225.4 kB  | 2.4 kB         | 1272 / 1296 ms | 0 / 0 ms  | 1251 / 1296 ms | –          | –                 | 1830 / 1855 ms |
