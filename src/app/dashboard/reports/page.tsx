import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/dashboard/setting_report_user/card';
import { Button } from '@/components/dashboard/setting_report_user/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/dashboard/setting_report_user/tabs';
import { 
  TrendingUp, 
  TrendingDown, 
  Package, 
  DollarSign, 
  BarChart3, 
  Calendar,
  Download
} from 'lucide-react';

// Mock data
const summaryCards = [
  {
    title: 'Total Products',
    value: '128',
    change: '+12% from last month',
    changeType: 'positive',
    icon: Package,
  },
  {
    title: 'Low Stock Items',
    value: '12',
    change: '+3.2% from last month',
    changeType: 'negative',
    icon: TrendingDown,
  },
  {
    title: 'Stock Turnover Rate',
    value: '3.8',
    change: '+8.1% from last month',
    changeType: 'positive',
    icon: TrendingUp,
  },
  {
    title: 'Total Inventory Value',
    value: '$12,580',
    change: '+4.75% from last month',
    changeType: 'positive',
    icon: DollarSign,
  },
];

const Reports = () => {
  return (
    <div>
      <div className="min-h-screen max-w-7xl space-y-6 p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics & Reports</h1>
            <p className="mt-2 text-subheading">
              Track and analyze your inventory performance
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 text-sm text-subheading space-y-1 sm:space-y-0">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Apr 15, 2025 - May 15, 2025</span>
              </div>
              <span className="text-secondary">Last 30 days</span>
            </div>
            <Button variant="outline" className='bg-primary hover:bg-secondary hover:text-foreground w-full sm:w-auto' size="default">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {summaryCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-subheading">
                    {card.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-subheading" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{card.value}</div>
                  <p
                    className={`text-xs ${
                      card.changeType === 'positive'
                        ? 'text-warning/light'
                        : 'text-warning'
                    }`}
                  >
                    {card.change}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tabbed Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-0 overflow-x-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="movement">Stock Movement</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inventory Trend Chart */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <CardTitle>Inventory Trend</CardTitle>
                  </div>
                  <CardDescription>Total inventory over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-secondary/40 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 mx-auto text-subheading mb-2" />
                      <p className="text-subheading">Chart placeholder</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stock Status */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Package className="h-5 w-5 text-primary" />
                    <CardTitle>Stock Status</CardTitle>
                  </div>
                  <CardDescription>Current stock level distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-secondary/40 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Package className="h-12 w-12 mx-auto text-subheading mb-2" />
                      <p className="text-subheading">Chart placeholder</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Selling Products */}
            <Card>
              <CardHeader>
                <CardTitle>Top Selling Products</CardTitle>
                <CardDescription>Products with highest sales volume</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-secondary/40 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 mx-auto text-subheading mb-2" />
                    <p className="text-subheading">Top selling products data</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="movement" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Stock Movement Analysis</CardTitle>
                <CardDescription>Track inventory flow and movement patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-secondary/40 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 mx-auto text-subheading mb-2" />
                    <p className="text-subheading">Stock movement charts and data</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Category Breakdown</CardTitle>
                <CardDescription>Inventory distribution by product categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-secondary/40 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 mx-auto text-subheading mb-2" />
                    <p className="text-subheading">Category analysis and metrics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product-Specific Metrics</CardTitle>
                <CardDescription>Detailed analytics for individual products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-secondary/40 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Package className="h-12 w-12 mx-auto text-subheading mb-2" />
                    <p className="text-subheading">Product performance metrics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Reports;
