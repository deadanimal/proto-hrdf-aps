export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-dark'
  },
  {
    path: '/admin/general-ledger',
    title: 'General Ledger',
    type: 'link',
    icontype: 'fas fa-file-alt text-dark'
  },
  {
    path: '/admin/budget-setup-performance-reporting',
    title: 'Budget Setup & Performance Reporting',
    type: 'link',
    icontype: 'fas fa-balance-scale text-dark'
  },
  // {
  //   path: '/admin/activities-project-costing',
  //   title: 'Activities & Project Costing',
  //   type: 'link',
  //   icontype: 'fas fa-file-invoice-dollar text-dark'
  // },
  {
    path: '/admin/account-receivable',
    title: 'Account Receivable',
    type: 'link',
    icontype: 'fas fa-download text-dark'
  },
  {
    path: '/admin/cash-management',
    title: 'Cash Management',
    type: 'link',
    icontype: 'fas fa-money-bill text-dark'
  },
  {
    path: '/admin/account-payable',
    title: 'Account Payable',
    type: 'link',
    icontype: 'fas fa-file-invoice text-dark'
  },
  // {
  //   path: '/admin/fixed-asset',
  //   title: 'Fixed Asset',
  //   type: 'link',
  //   icontype: 'fas fa-screwdriver text-dark'
  // },
  {
    path: '/admin/fixed-asset-management',
    title: ' Fixed Asset Management',
    type: 'sub',
    icontype: 'fas fa-screwdriver text-dark',
    collapse: 'fixed-asset-management',
    isCollapsed: true,
    children: [
      { path: 'asset-registration', title: 'Assest Registration', type: 'link' },
      { path: 'asset-depreciation-disposal', title: 'Asset Depreciation & Disposal', type: 'link' },
    ]
  },
  {
    path: '/admin/investment',
    title: 'Investment',
    type: 'link',
    icontype: 'fas fa-chart-area text-dark'
  },
  {
    path: '/admin/statutory-reporting',
    title: 'Statutory Reporting',
    type: 'link',
    icontype: 'fas fa-chart-bar text-dark'
  },
  {
    path: '/admin/procurement',
    title: 'Procurement',
    type: 'sub',
    icontype: 'fas fa-handshake text-dark',
    collapse: 'procurement',
    isCollapsed: true,
    children: [
      { path: 'vendor-list', title: 'Vendor List', type: 'link' },
      // { path: 'analysis', title: 'Analysis', type: 'link' },
      // { path: 'notice', title: 'Notice', type: 'link' },
      { path: 'strategic-sourcing', title: 'Stategic Sourcing', type: 'link' },
      { path: 'procurement-management', title: 'Procurement Management', type: 'link' },
      { path: 'tender-management', title: 'Tender Management', type: 'link' }
    ]
  },
  {
    path: '/admin/sales-service-tax',
    title: 'Sales & Service Taxes',
    type: 'link',
    icontype: 'fas fa-chart-line text-dark'
  },
  {
    path: '/admin/claim',
    title: 'Claim',
    type: 'link',
    icontype: 'fas fa-hand-holding-usd text-dark'
  },
  // {
  //   path: '/admin/production-planning-execution',
  //   title: 'Product, Planning & Execution',
  //   type: 'link',
  //   icontype: 'fas fa-edit text-dark'
  // },
  // {
  //   path: '/admin/inventory-control',
  //   title: 'Inventory Control',
  //   type: 'link',
  //   icontype: 'fas fa-desktop text-dark'
  // },
  // {
  //   path: '/admin/product-costing-material-ledger',
  //   title: 'Product Costing & Material Ledger',
  //   type: 'link',
  //   icontype: 'fas fa-file-invoice text-dark'
  // },
  {
    path: '/admin/system-management',
    title: ' System Management',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-dark',
    collapse: 'system-management',
    isCollapsed: true,
    children: [
      { path: 'user-control', title: 'User Control', type: 'link' },
      { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
    ]
  },
  {
    path: '/admin/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-dark'
  },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/applications',
    title: 'Applications',
    type: 'link',
    icontype: 'fas fa-file-invoice text-pink'
  },
  {
    path: '/houses',
    title: 'Houses',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/management',
    title: 'Management',
    type: 'link',
    icontype: 'fas fa-tasks text-red'
  },
  {
    path: '/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }/*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];