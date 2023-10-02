import React from 'react';

import { createRoot } from 'react-dom/client';

import Footer from './jsx/Footer.jsx';

const container = document.getElementById('app-root-2023-tdr_report_footer');
const root = createRoot(container);
root.render(<Footer />);