import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { GeneralLedgerComponent } from './general-ledger/general-ledger.component';
import { PlanningBudgetaryControlComponent } from './planning-budgetary-control/planning-budgetary-control.component';
import { ActivitiesProjectCostingComponent } from './activities-project-costing/activities-project-costing.component';
import { AccountReceivableComponent } from './account-receivable/account-receivable.component';
import { PettyCashComponent } from './petty-cash/petty-cash.component';
import { AccountPayableComponent } from './account-payable/account-payable.component';
import { FixedAssetComponent } from './fixed-asset/fixed-asset.component';
import { ProbabilityAnalysisComponent } from './probability-analysis/probability-analysis.component';
import { ProcurementVendorListComponent } from './procurement-vendor-list/procurement-vendor-list.component';
import { ProcurementAnalysisComponent } from './procurement-analysis/procurement-analysis.component';
import { SalesDistributionComponent } from './sales-distribution/sales-distribution.component';
import { ProductionPlanningExecutionComponent } from './production-planning-execution/production-planning-execution.component';
import { InventoryControlComponent } from './inventory-control/inventory-control.component';
import { ProductionCostingMaterialLedgerComponent } from './production-costing-material-ledger/production-costing-material-ledger.component';
import { ClaimComponent } from './claim/claim.component';
import { Report123Component } from './report123/report123.component';
import { ProcurementNoticeComponent } from './procurement-notice/procurement-notice.component';
import { StrategicSourcingComponent } from './strategic-sourcing/strategic-sourcing.component';
import { ProcurementManagementComponent } from './procurement-management/procurement-management.component';
import { TenderManagementComponent } from './tender-management/tender-management.component';
import { InvestmentComponent } from './investment/investment.component';
import { FixedAssetRegistrationComponent } from './fixed-asset-registration/fixed-asset-registration.component';
import { FixedAssetDepreciationDisposalComponent } from './fixed-asset-depreciation-disposal/fixed-asset-depreciation-disposal.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'general-ledger',
                component: GeneralLedgerComponent
            },
            {
                path: 'budget-setup-performance-reporting',
                component: PlanningBudgetaryControlComponent
            },
            {
                path: 'activities-project-costing',
                component: ActivitiesProjectCostingComponent
            },
            {
                path: 'account-receivable',
                component: AccountReceivableComponent
            },
            {
                path: 'cash-management',
                component: PettyCashComponent
            },
            {
                path: 'account-payable',
                component: AccountPayableComponent
            },
            {
                path: 'fixed-asset',
                component: FixedAssetComponent
            },
            {
                path: 'fixed-asset-management',
                children: [
                    {
                        path: 'asset-registration',
                        component: FixedAssetRegistrationComponent
                    },
                    {
                        path: 'asset-depreciation-disposal',
                        component: FixedAssetDepreciationDisposalComponent
                    }
                ]
            },
            {
                path: 'investment',
                component: InvestmentComponent
            },
            {
                path: 'statutory-reporting',
                component: ReportComponent
            },
            {
                path: 'procurement',
                children: [
                    {
                        path: 'vendor-list',
                        component: ProcurementVendorListComponent
                    },
                    {
                        path: 'analysis',
                        component: ProcurementAnalysisComponent
                    },
                    {
                        path: 'notice',
                        component: ProcurementNoticeComponent
                    },
                    {
                        path: 'strategic-sourcing',
                        component: StrategicSourcingComponent
                    },
                    {
                        path: 'procurement-management',
                        component: ProcurementManagementComponent
                    },
                    {
                        path: 'tender-management',
                        component: TenderManagementComponent
                    },

                ]
            },
            {
                path: 'sales-service-tax',
                component: SalesDistributionComponent
            },
            {
                path: 'claim',
                component: ClaimComponent
            },
            {
                path: 'production-planning-execution',
                component: ProductionPlanningExecutionComponent
            },
            {
                path: 'inventory-control',
                component: InventoryControlComponent
            },
            {
                path: 'product-costing-material-ledger',
                component: ProductionCostingMaterialLedgerComponent
            },
            {
                path: 'system-management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user-control',
                        component: ManagementUserComponent
                    }
                ]
            },
            {
                path: 'report',
                component: Report123Component
            },
            // {
            //     path: 'report',
            //     component: ReportComponent
            // }
        ]
    }
]