import React, { useState, useEffect } from 'react';

// Load helpers.
import ChartSankey from './components/ChartSankey.jsx';

import formatNr from './helpers/FormatNr.js';
import '../styles/styles.less';

function Figure1() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = () => [{
    textAlign: 'center',
    dataLabels: {
      nodeFormatter() {
        const chart = this;
        return `<div class=${chart.point.column === 1 ? 'text_right' : 'text_left'}><b>${chart.key}</b><br />${formatNr(chart.point.sum, ' ')} billion USD</div>`;
      }
    },
    data: [
      ['Node 0: China', 'Node 1: China', 1615, '#f58220'],
      ['Node 0: China', 'Node 1: Other developed countries', 26, '#f58220'],
      ['Node 0: China', 'Node 1: United States', 13, '#f58220'],
      ['Node 0: China', 'Node 1: Other developing countries', 81, '#f58220'],
      ['Node 0: Other developing countries', 'Node 1: China', 8, '#a066aa'],
      ['Node 0: Other developing countries', 'Node 1: Other developed countries', 34, '#a066aa'],
      ['Node 0: Other developing countries', 'Node 1: United States', 7, '#a066aa'],
      ['Node 0: Other developing countries', 'Node 1: Other developing countries', 445, '#a066aa'],
      ['Node 0: United States', 'Node 1: China', 26, '#009edb'],
      ['Node 0: United States', 'Node 1: Other developed countries', 277, '#009edb'],
      ['Node 0: United States', 'Node 1: United States', 816, '#009edb'],
      ['Node 0: United States', 'Node 1: Other developing countries', 169, '#009edb'],
      ['Node 0: Other developed countries', 'Node 1: China', 39, '#72bf44'],
      ['Node 0: Other developed countries', 'Node 1: Other developed countries', 1158, '#72bf44'],
      ['Node 0: Other developed countries', 'Node 1: United States', 657, '#72bf44'],
      ['Node 0: Other developed countries', 'Node 1: Other developing countries', 386, '#72bf44'],
    ],
    nodes:
      [{
        color: '#f58220',
        column: 0,
        id: 'Node 0: China',
        name: 'China'
      }, {
        color: '#f58220',
        column: 1,
        id: 'Node 1: China',
        name: 'China'
      }, {
        color: '#72bf44',
        column: 0,
        id: 'Node 0: Other developed countries',
        name: 'Other developed countries'
      }, {
        color: '#72bf44',
        column: 1,
        id: 'Node 1: Other developed countries',
        name: 'Other developed countries'
      }, {
        color: '#009edb',
        column: 0,
        id: 'Node 0: United States',
        name: 'United States'
      }, {
        color: '#009edb',
        column: 1,
        id: 'Node 1: United States',
        name: 'United States'
      }, {
        color: '#a066aa',
        column: 0,
        id: 'Node 0: Other developing countries',
        name: 'Other developing countries'
      }, {
        color: '#a066aa',
        column: 1,
        id: 'Node 1: Other developing countries',
        name: 'Other developing countries'
      }],
    keys: ['from', 'to', 'weight', 'color']
  }];

  useEffect(() => {
    setDataFigure(cleanData());
  }, []);

  return (
    <div className="app">
      {dataFigure && (
      <ChartSankey
        column_labels_1={['Bank headquarters', 'Company headquarters']}
        data={dataFigure}
        data_type=""
        idx="1"
        note={'See note for figure "Fossil fuel finance unabated even after the Paris Agreement"'}
        source="UNCTAD calculations based on data from Reclaim Finance (2023) and on a 2022 update of Urgewald (2021)"
        subtitle="Cumulative credit support provided to fossil fuel companies, by country (group) of bank and fossil fuel company headquarters, 2016–2022, billions of dollars"
        title="Developed country banks provide the bulk of credit support to fossil fuel companies, except in China"
        ylabel=""
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure1;
